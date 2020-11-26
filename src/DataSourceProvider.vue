<template>
  <section class="container">
    <div class="data-source-title">
      <strong>{{ widgetData.dataSourceTitle || 'Select a data source' }}</strong>
    </div>

    <div v-if="isLoading" class="spinner-container animated">
      <div class="spinner-overlay">Loading...</div>
    </div>

    <div
      class="main-data-source-provider"
      :class="{ 'select-overlay': isLoading }"
    >
      <section class="data-source-selector">
        <div v-if="dataSources.length || (!dataSources.length && !selectedDataSource)">
          <label for="data-source-select" class="select-proxy-display">
            <select
              ref="select"
              class="hidden-select form-control"
              @change="onSelectChange"
              :value="selectedDataSource ? selectedDataSource.id : ''"
            >
              <option value>-- Select data source</option>
              <option v-if="!dataSources.length" value="none" disabled>(No data source found)</option>
              <template v-else-if="dataSources.length">
                <template v-if="!!allDataSources.length">
                  <optgroup v-for="group in dataSources" :key="group.name" :label="group.name">
                    <option v-for="option in group.options" :key="option.id" :value="option.id">{{
                      formatDataSourceOption(option)
                    }}</option>
                  </optgroup>
                </template>
                <template v-else>
                  <option v-for="option in dataSources" :key="option.id" :value="option.id">{{
                    formatDataSourceOption(option)
                  }}</option>
                </template>
              </template>
            </select>
            <span class="icon fa fa-chevron-down"></span>
          </label>

          <a @click.prevent="onDataSourceCreate" class="create-data-source" href="#">Create new data source</a>

          <div class="checkbox checkbox-icon">
            <input :checked="showAll" v-model="showAll" type="checkbox" name="showAll" id="showAll" />
            <label for="showAll">
              <span class="check">
                <i class="fa fa-check"></i>
              </span>
              Show all data sources
            </label>
          </div>
        </div>

        <div v-else-if="selectedDataSource && !changeDataSource">
          <div class="selected-data-source">
            <div class="selected-data-source info">
              <code>{{ selectedDataSource.id }}</code> <span>{{ selectedDataSource.name }}</span>
            </div>
            <a @click.prevent="onDataSourceChange" class="change-data-source selected-data-source action">Change</a>
          </div>
        </div>

        <div v-show="selectedDataSource" @click="viewDataSource" class="btn btn-default btn-view-data-source">
          View data source
        </div>

        <section v-show="showAccessRulesAlert" class="security-notify">
          <div v-if="!securityEnabled" class="alert alert-warning">
            <p><b>This data source is missing security rules.</b></p>
            <p>Configure security rules so the app can access the data</p>
            <div @click="onAddDefaultSecurity" class="btn btn-primary btn-security">Configure security rules</div>
          </div>
          <div v-else-if="securityAdded" class="alert alert-success">
            Security rules added. To manage security rules click <b>View data source</b> above.
          </div>
        </section>
      </section>
    </div>
  </section>
</template>

<script>
import { getDataSources, getDataSource, createDataSource, updateDataSourceSecurityRules } from './services/dataSource';

export default {
  data() {
    return {
      appDataSources: [],
      allDataSources: [],
      copyOfAllDataSources: [],
      isLoading: true,
      widgetData: {},
      selectedDataSource: null,
      dataSources: [],
      changeDataSource: false,
      securityEnabled: false,
      showAll: false,
      securityAdded: false
    };
  },
  computed: {
    showAccessRulesAlert: function() {
      return this.selectedDataSource && (this.widgetData.accessRules && this.widgetData.accessRules.length > 0);
    }
  },
  methods: {
    onSelectChange: function(event) {
      const id = parseInt(event.target.value, 10);
      let value;

      if (!id) {
        value = null;
      } else if (this.allDataSources.length) {
        this.dataSources.some(group => {
          let selectedOption = group.options.find(option => option.id === id);

          if (selectedOption) {
            value = selectedOption;

            return true;
          }

          return false;
        });
      } else {
        value = this.dataSources.find(option => option.id === id);
      }

      this.selectedDataSource = value;

      if (value) {
        this.hasAccessRules();
      }

      Fliplet.Widget.emit('dataSourceSelect', value);
      Fliplet.Widget.autosize();
    },
    showError: function(message) {
      Fliplet.Modal.alert({ message });
    },
    initProvider() {
      this.widgetData = Fliplet.Widget.getData();

      if (this.widgetData.dataSourceId) {
        return this.loadSelectedDataSource(this.widgetData.dataSourceId);
      }

      this.loadDataSources(this.widgetData.appId);
    },
    onAddDefaultSecurity() {
      this.isLoading = true;

      if (this.selectedDataSource.accessRules && this.selectedDataSource.accessRules.length > 0) {
        this.widgetData.accessRules.forEach(defaultRule => {
          this.selectedDataSource.accessRules.push(defaultRule);
        });
      } else {
        this.selectedDataSource.accessRules = this.widgetData.accessRules;
      }

      updateDataSourceSecurityRules(this.selectedDataSource.id, this.selectedDataSource.accessRules)
        .then(() => {
          Fliplet.Modal.alert({
            message: 'Your changes have been applied to all affected apps.'
          }).then(() => {
            this.hasAccessRules();
            this.securityAdded = true;
          });
        })
        .catch(err => {
          this.showError(Fliplet.parseError(err));
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    hasAccessRules() {
      if (!this.selectedDataSource) {
        this.securityEnabled = false;
        return;
      }

      if (this.selectedDataSource.accessRules === null || !this.selectedDataSource.accessRules.length) {
        this.securityEnabled = false;
        return;
      }

      let includedAccessTypes = [];

      this.selectedDataSource.accessRules.forEach(dataSourceRules => {
        this.widgetData.accessRules.forEach(componentRules => {
          componentRules.type.forEach(componentType => {
            if (dataSourceRules.type.includes(componentType)) {
              includedAccessTypes.push(componentType);
            }
          });
        });
      });

      includedAccessTypes = _.uniq(includedAccessTypes);

      if (this.widgetData.accessRules.length && includedAccessTypes.length !== this.widgetData.accessRules[0].type.length) {
        this.securityEnabled = false;

        return;
      }

      this.securityEnabled = true;
    },
    onDataSourceChange() {
      this.changeDataSource = !this.changeDataSource;

      if (!this.appDataSources.length) {
        this.loadDataSources(this.widgetData.appId);
      }
    },
    onDataSourceCreate() {
      createDataSource(this.widgetData, this)
        .then(dataSource => {
          if (!dataSource) {
            return;
          }

          this.selectedDataSource = dataSource;

          if (this.allDataSources.length) {
            this.allDataSources.push(dataSource);
          }

          this.appDataSources.push(dataSource);
          this.hasAccessRules();
          this.dataSources = this.formatDataSources();

          Fliplet.Widget.emit('dataSourceSelect', dataSource);
        })
        .catch(err => {
          this.showError(Fliplet.parseError(err));
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    loadSelectedDataSource(dataSourceId) {
      getDataSource(dataSourceId)
        .then(dataSource => {
          this.selectedDataSource = dataSource;

          Fliplet.Widget.emit('dataSourceSelect', this.selectedDataSource);

          this.hasAccessRules();
        })
        .catch(err => {
          if (err.status === 404) {
            this.selectedDataSource = null;
            this.widgetData.dataSourceId = null;
            this.loadDataSources(this.widgetData.appId);

            return;
          }

          this.showError(Fliplet.parseError(err));
        })
        .finally(() => {
          this.isLoading = false;
          Fliplet.Widget.autosize();
        });
    },
    loadDataSources(appId) {
      getDataSources(appId)
        .then(dataSources => {
          if (this.widgetData.dataSourceId) {
            const selectedDataSourceFound = dataSources.some(dataSource => {
              return dataSource.id === this.selectedDataSource.id;
            });

            if (!selectedDataSourceFound) {
              dataSources.push(this.selectedDataSource);
            }
          }

          if (appId) {
            this.appDataSources = dataSources;
          } else {
            this.allDataSources = dataSources;
          }

          this.dataSources = this.formatDataSources();
          this.hasAccessRules();
        })
        .catch(err => {
          this.showError(Fliplet.parseError(err));
        })
        .finally(() => {
          this.isLoading = false;
          Fliplet.Widget.autosize();
        });
    },
    formatDataSources() {
      // If the otherDataSources array is empty it means that we show the user only data sources for the current app
      if (!this.allDataSources.length) {
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

      // Remove empty data source groups
      return allDataSources.filter(group => !!group.options.length);
    },
    getOtherAppsDataSources(dataSources) {
      return dataSources.filter(dataSource => {
        return this.appDataSources.findIndex(currDS => currDS.id === dataSource.id) === -1;
      });
    },
    formatDataSourceOption(data) {
      const { id, name, text } = data;

      return `${name || text} (ID: ${id})`;
    },
    customDataSourceSearch(condition, data) {
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
    sortDataSourceEntries(dataSources) {
      const copyDataSources = [...dataSources];

      if (copyDataSources[0] && copyDataSources[0].options) {
        copyDataSources[0].options.sort(this.sortArray);
        copyDataSources[1].options.sort(this.sortArray);
      } else {
        copyDataSources.sort(this.sortArray);
      }

      return copyDataSources;
    },
    sortArray(a, b) {
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
    viewDataSource() {
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
          },
          helpLink: 'https://help.fliplet.com/data-sources/'
        }
      });
    }
  },
  mounted() {
    this.initProvider();

    // Transfer selected DataSource id to the parent
    Fliplet.Widget.onSaveRequest(() => {
      Fliplet.Widget.save({ id: this.selectedDataSource ? this.selectedDataSource.id : null });
    });

    Fliplet.Studio.onMessage(event => {
      if (event.data && event.data.event === 'overlay-close' && event.data.classes === 'data-source-overlay') {
        this.loadSelectedDataSource(this.selectedDataSource.id);
      }
    });
  },
  updated() {
    Fliplet.Widget.autosize();
  },
  watch: {
    showAll: {
      handler(value) {
        this.isLoading = true;
        this.dataSources = [];

        if (value) {
          if (!this.copyOfAllDataSources.length) {
            this.loadDataSources();
            return;
          }

          this.allDataSources = [...this.copyOfAllDataSources];
        } else {
          this.copyOfAllDataSources = [...this.allDataSources];
          this.allDataSources = [];
        }

        this.dataSources = this.formatDataSources();

        // Give VUE time to reset templates
        this.$nextTick(() => {
          this.isLoading = false;
        });
      }
    }
  }
};
</script>
