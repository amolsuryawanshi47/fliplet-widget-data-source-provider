<template>
  <section>
    <div v-if="isLoading" class="spinner-holder animated">
      <div class="spinner-overlay">Loading...</div>
    </div>
    <div v-else-if="hasError" class="alert alert-danger" role="alert">
      {{ errorMessage }}
    </div>
    <div v-else>
      <DataSourceSelector
        :currentAppDataSources="appDataSources"
        :otherDataSources="allDataSources"
        :selectedDataSource="selectedDataSource"
        :changeDataSource="changeDataSource"
        :showAll="showAll"
        @selectedDataSourceId="selectedDataSourceId = $emit"
        @onDataSourceCreate="createDataSource"
        @onShowAll="(event) => { showAllDataSources(event) }"
        @onDataSourceChange="changeDataSource = !changeDataSource"
      >
      </DataSourceSelector>
    </div>
  </section>

</template>

<script>
import DataSourceSelector from './components/DataSourceSelector';
import { getDataSources, getDataSource, createDataSource } from './services/dataSource';

export default {
  data() {
    return {
      appDataSources: [],
      allDataSources: [],
      copyOfAllDataSources: [],
      isLoading: true,
      hasError: false,
      errorMessage: '',
      widgetData: {},
      selectedDataSourceId: false,
      changeDataSource: false,
      showAll: false
    };
  },
  components: {
    DataSourceSelector
  },
  methods: {
    showAllDataSources: function(isChecked) {
      this.isLoading = true;
      this.showAll = isChecked;

      if (isChecked) {
        if (!this.copyOfAllDataSources.length) {
          this.loadDataSources();
          return;
        }

        this.allDataSources = [...this.copyOfAllDataSources];
      } else {
        this.copyOfAllDataSources = [...this.allDataSources];
        this.allDataSources = [];
      }

      // Give VUE time to reset templates
      setTimeout(() => {
        this.isLoading = false;
      }, 100);
    },
    loadSelectedDataSource: function() {
      getDataSource(this.widgetData.dataSourceId)
        .then(dataSource => {
          this.selectedDataSource = dataSource;

          Fliplet.Widget.emit('showColumns',
            {
              columns: this.selectedDataSource.columns,
              id: this.selectedDataSource.id
            }
          );
        })
        .catch(err => {
          this.errorMessage = Fliplet.parseError(err);
          this.hasError = true;
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    loadDataSources: function(appId) {
      this.isLoading = true;

      if (this.widgetData.dataSourceId && !this.changeDataSource) {
        return this.loadSelectedDataSource();
      }

      getDataSources(appId)
        .then(dataSources => {
          const selectedDataSourceInDataSources = dataSources.some(dataSource => {
            return dataSource.id === this.selectedDataSource.id;
          });

          if (!selectedDataSourceInDataSources) {
            dataSources.push(this.selectedDataSource);
          }

          if (appId) {
            this.appDataSources = dataSources;
          } else {
            this.allDataSources = dataSources;
          }
        })
        .catch(err => {
          this.hasError = true;
          this.errorMessage = Fliplet.parseError(err);
        })
        .finally(() => {
          this.isLoading = false;
          Fliplet.Widget.autosize();
        });
    },
    initProvider() {
      this.widgetData = Fliplet.Widget.getData();

      this.loadDataSources(this.widgetData.appId);
    },
    createDataSource: function() {
      this.isLoading = true;

      createDataSource(this.widgetData)
        .then(dataSource => {
          if (!dataSource) {
            return;
          }

          this.selectedDataSource = dataSource;
        })
        .catch(err => {
          this.hasError = true;
          this.errorMessage = Fliplet.parseError(err);
        })
        .finally(() => {
          this.isLoading = false;
        });
    }
  },
  mounted: function() {
    this.initProvider();
  },
  updated: function() {
    Fliplet.Widget.autosize();
  }
};
</script>
