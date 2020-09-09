<template>
  <section>
    <div class="data-source-title">
      <strong>{{ widgetData.dataSourceTitle || 'Select a data source' }}</strong>
    </div>

    <div v-if="isLoading" class="spinner-holder animated">
      <div class="spinner-overlay">Loading...</div>
    </div>

    <div v-else-if="hasError" class="alert alert-danger" role="alert">
      {{ errorMessage }}
    </div>

    <div v-else class="main-data-source-provider">
      <section class="data-source-selector">

        <div v-if="dataSources.length && changeDataSource">

          <Select2
            :dataSources="dataSources"
            :selectedDataSource="selectedDataSource"
            :customOptionView="formatDataSourceOption"
            :customSearch="customDataSourceSearch"
            :optionLabelKey="'name'"
            :optionValueKey="'id'"
            :selectWithGroups="!!allDataSources.length"
            @selectDataSource="setDataSource">
          </Select2>

          <span @click="onDataSourceCreate" class="btn-link create-data-source">Create new data source</span>

          <div class="checkbox checkbox-icon">
            <input @change="showAllDataSources" :checked="showAll" type="checkbox" name="showAll" id="showAll" />
            <label for="showAll">
              <span class="check">
                <i class="fa fa-check"></i>
              </span>
              Show all data sources
            </label>
          </div>

        </div>

        <div v-else-if="selectedDataSource && !changeDataSource">
          <p>{{ selectedDataSource.id }}. {{ selectedDataSource.name }} <span @click="onDataSourceChange" class="btn-link change-data-source">Change</span></p>
        </div>

        <div v-show="selectedDataSource" @click="viewDataSource" class="btn btn-default btn-view-data-source">View data source</div>

        <section v-show="selectedDataSource" class="security-notify">
          <div v-if="!securityEnabled" class="alert alert-warning">
            <p><b>This data source is missing security rules.</b></p>
            <p>Configure security rules so the app can access the data</p>
            <div @click="onAddDefaultSecurity" class="btn btn-primary btn-security">Configure security rules</div>
          </div>
          <div v-else-if="securityEnabled" class="alert alert-success">
            Security rules added. To manage security rules click <b>View data source</b> above.
          </div>
        </section>

      </section>
    </div>
  </section>
</template>

<script>
import Select2 from './components/Select2.vue';
import { getDataSources, getDataSource, createDataSource, updateDataSourceSecurityRules } from './services/dataSource';

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
      selectedDataSource: null,
      dataSources: [],
      changeDataSource: false,
      securityEnabled: false,
      showAll: false
    };
  },
  methods: {
    onDataSourceSelect: function(dataSource) {
      this.selectedDataSource = dataSource;
    },
    initProvider() {
      this.widgetData = Fliplet.Widget.getData();

      if (this.widgetData.dataSourceId) {
        return this.loadSelectedDataSource();
      }

      this.loadDataSources(this.widgetData.appId);
    },
    onAddDefaultSecurity: function() {
      this.isLoading = true;
      this.selectedDataSource.accessRules = this.widgetData.accessRules;

      updateDataSourceSecurityRules(this.selectedDataSource.id, this.selectedDataSource.accessRules)
        .then(() => {
          Fliplet.Modal.alert({
            message: 'Your changes have been applied to all affected apps.'
          });
        })
        .catch(err => {
          this.hasError = true;
          this.errorMessage = Fliplet.parseError(err);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    hasAccessRules: function() {
      if (!this.selectedDataSource) {
        this.securityEnabled = false;
        return;
      }

      if (this.selectedDataSource.accessRules === null || !this.selectedDataSource.accessRules.length) {
        this.securityEnabled = false;
        return;
      }

      this.securityEnabled = true;
    },
    onDataSourceChange: function() {
      this.changeDataSource = !this.changeDataSource;

      if (!this.appDataSources.length) {
        this.loadDataSources(this.widgetData.appId);
      }
    },
    onDataSourceCreate: function() {
      this.isLoading = true;

      createDataSource(this.widgetData)
        .then(dataSource => {
          if (!dataSource) {
            return;
          }

          this.selectedDataSource = dataSource;

          if (this.allDataSources.length) {
            this.allDataSources[0].options.push(dataSource);
          }

          this.appDataSources.push(dataSource);
        })
        .catch(err => {
          this.hasError = true;
          this.errorMessage = Fliplet.parseError(err);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    showAllDataSources: function(event) {
      this.isLoading = true;
      this.showAll = event.target.checked;

      if (this.showAll) {
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
      this.$nextTick(() => {
        this.isLoading = false;
      });
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
      getDataSources(appId)
        .then(dataSources => {
          const selectedDataSourceInDataSources = dataSources.some(dataSource => {
            return dataSource.id === this.selectedDataSource.id;
          });

          if (!selectedDataSourceInDataSources) {
            dataSources.push(this.selectedDataSource);
          }

          if (appId) {
            this.appDataSources = this.formatDataSources(dataSources);
          } else {
            this.allDataSources = this.formatDataSources(dataSources);
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
    formatDataSources: function() {
      // If we have selected data source before
      if (!this.appDataSources.length) {
        return [];
      }

      // If the otherDataSources array is empty it means that we show the user only data sources for the current app
      if (!this.otherDataSources.length) {
        return this.sortDataSourceEntries(this.appDataSources);
      }

      const allDataSources = [
        {
          name: 'This app',
          options: []
        },
        {
          name: 'Other apps',
          options: []
        }
      ];

      allDataSources[0].options = this.sortDataSourceEntries(this.appDataSources);
      allDataSources[1].options = this.sortDataSourceEntries(this.getOtherAppsDataSources(this.allDataSources));

      return allDataSources;
    },
    getOtherAppsDataSources: function(dataSources) {
      return dataSources.filter(dataSource => {
        return this.currentAppDataSources.findIndex(currDS => currDS.id === dataSource.id) === -1;
      });
    },
    formatDataSourceOption: function(data) {
      const { id, name, text } = data;

      return `${name || text} ID: ${id}`;
    },
    customDataSourceSearch: function(condition, data) {
      // Return of this function should be the same as the array.filter function
      // If there are no search terms, return all of the data
      if (!condition) {
        return true;
      }

      const term = condition.toUpperCase();
      const name = data.name.toUpperCase();
      const id = data.id.toString();

      // Search both by name and id
      if (name.indexOf(term) > -1 || id.indexOf(term) > -1) {
        return true;
      }

      // Return `false` if the term should not be displayed
      return false;
    },
    setDataSource: function(dataSource) {
      if (dataSource) {
        this.selectedDataSource = dataSource;

        Fliplet.Widget.emit('showColumns', {
          columns: dataSource.columns,
          id: dataSource.id
        });

        this.$emit('onDataSourceSelect', dataSource);
      }
    },
    sortDataSourceEntries: function(dataSources) {
      const copyDataSources = [...dataSources];

      if (copyDataSources[0].options) {
        copyDataSources[0].options.sort(this.sortArray);
        copyDataSources[1].options.sort(this.sortArray);
      } else {
        copyDataSources.sort(this.sortArray);
      }

      return copyDataSources;
    },
    sortArray: function(a, b) {
      // Sort data source array by name
      // Send names that starts with number to the end of the list
      const startsWithAlphabet = /^[A-Z,a-z]/;
      let aValue = a.name ? a.name.toUpperCase() : '}';
      let bValue = b.name ? b.name.toUpperCase() : '}';

      if (!startsWithAlphabet.test(bValue)) {
        bValue = `{${bValue}`;
      }

      if (!startsWithAlphabet.test(aValue)) {
        aValue = `{${aValue}`;
      }

      if (aValue < bValue) {
        return -1;
      }
      if (aValue > bValue) {
        return 1;
      }

      return 0;
    },
    viewDataSource: function() {
      Fliplet.Studio.emit('overlay', {
        name: 'widget',
        options: {
          size: 'large',
          package: 'com.fliplet.data-sources',
          title: 'Edit Data Sources',
          classes: 'data-source-overlay',
          data: {
            context: 'overlay',
            dataSourceId: this.selectedDataSource.id
          }
        }
      });
    }
  },
  components: {
    Select2
  },
  mounted: function() {
    this.initProvider();

    const $vm = this;

    // Transfer selected DataSource id to the parent
    Fliplet.Widget.onSaveRequest(function() {
      Fliplet.Widget.save({id: $vm.selectedDataSource ? $vm.selectedDataSource.id : undefined});
    });
  },
  updated: function() {
    Fliplet.Widget.autosize();
  }
};
</script>
