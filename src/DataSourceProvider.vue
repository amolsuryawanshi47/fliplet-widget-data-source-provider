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
        :currentAppDSs="appDataSorces" :otherDSs="allDataSources"
        :selectedDataSource="selectedDataSource"
        :changeDataSource="changeDataSource"
        :showAll="showAll"
        @selectedDataSourceId="selectedDataSourceId = $emit"
        @onDataSourceCreate="createDS"
        @onShowAll="(event) => { showAllDSs(event) }"
        @onDataSourceChange="changeDataSource = !changeDataSource"
      >
      </DataSourceSelector>
    </div>
  </section>

</template>

<script>
import DataSourceSelector from './components/DataSourceSelector';
import { getDataSources, getDataSource } from './services/getDataSources';
import { createDataSource } from './services/createDataSource';

export default {
  data() {
    return {
      appDataSorces: [],
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
    showAllDSs: function(isChecked) {
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
    loadDataSources: function(appId) {
      this.isLoading = true;

      getDataSources(appId)
        .then(dataSources => {
          if (this.widgetData.dataSourceId) {
            this.selectedDataSource = dataSources.find(dataSource => dataSource.id === this.widgetData.dataSourceId);

            if (!this.selectedDataSource) {
              return getDataSource(this.widgetData.dataSourceId)
                .then(dataSorce => {
                  this.selectedDataSource = dataSorce;
                  dataSources.push(dataSorce);
                  return dataSources;
                });
            }
          }

          return dataSources;
        })
        .then(dataSources => {
          if (appId) {
            this.appDataSorces = dataSources;
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
    createDS: function() {
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
