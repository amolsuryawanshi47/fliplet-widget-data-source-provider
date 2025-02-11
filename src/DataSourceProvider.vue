<template>
  <section class="container-fluid">
    <div class="row">
      <div class="data-source-title">
        <strong>{{ widgetData.dataSourceTitle || 'Select a data source' }}</strong>
      </div>

      <div v-if="isLoading" class="spinner-container animated">
        <div class="spinner-overlay">Loading...</div>
      </div>

      <div class="main-data-source-provider" :class="{ 'select-overlay': isLoading }">
        <section class="data-source-selector">
          <div v-if="dataSources.length || (!dataSources.length && !selectedDataSource)">
            <label for="data-source-select" class="select-proxy-display" v-bind:class="{ 'has-error': hasError }">
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
              <input v-model="showAll" type="checkbox" name="showAll" id="showAll" />
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
    </div>
  </section>
</template>

<script>
import { getDataSources, getDataSource, createDataSource, updateDataSourceSecurityRules } from './services/dataSource';
Vue.use(window.vuelidate.default);

const { required } = window.validators;

export default {
  data() {
    return {
      appDataSources: [],
      allDataSources: [],
      copyOfAllDataSources: [],
      hasError: false,
      missingAccessTypes: [],
      selectedValue: '',
      isLoading: true,
      widgetData: {},
      selectedDataSource: null,
      dataSources: [],
      changeDataSource: false,
      securityEnabled: false,
      showAll: false,
      securityAdded: false,
      defaultAccessRules: [
        { type: ['select', 'insert', 'update', 'delete'], allow: 'all', enabled: true }
      ]
    };
  },
  computed: {
    showAccessRulesAlert: function() {
      return this.selectedDataSource && (this.widgetData.accessRules && this.widgetData.accessRules.length > 0);
    }
  },
  validations: {
    selectedValue: {
      required
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
          let selectedOption = _.find(group.options, ['id', id]);

          if (selectedOption) {
            value = selectedOption;

            return true;
          }

          return false;
        });
      } else {
        value = _.find(this.dataSources, ['id', id]);
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
    addAppToExistingRule() {
      this.selectedDataSource.accessRules.forEach(dataSourceRule => {
        if (!dataSourceRule.appId || !dataSourceRule.appId.length || _.includes(dataSourceRule.appId, this.widgetData.appId)) {
          return;
        }

        if (!_.difference(this.missingAccessTypes, dataSourceRule.type).length) {
          return dataSourceRule.appId.push(this.widgetData.appId);
        }

        let existingAccessTypes = [];

        this.missingAccessTypes.forEach(missingRule => {
          if (_.includes(dataSourceRule.type, missingRule)) {
            existingAccessTypes.push(missingRule);
          }
        });

        if (existingAccessTypes.length === dataSourceRule.type.length) {
          dataSourceRule.appId.push(this.widgetData.appId);
        }

        this.missingAccessTypes = _.difference(this.missingAccessTypes, existingAccessTypes);
      });
    },
    enableRequiredRules() {
      this.selectedDataSource.accessRules.forEach(dataSourceRule => {
        if (dataSourceRule.enabled) {
          return;
        }

        let enabledAccessTypes = [];

        // If this rule has any missing access rule
        this.missingAccessTypes.forEach((missingRule) => {
          if (_.includes(dataSourceRule.type, missingRule)) {
            // If this rule for all or for current app
            if (
              (!dataSourceRule.appId || _.includes(dataSourceRule.appId, this.widgetData.appId))
            ) {
              enabledAccessTypes.push(missingRule);

              // Enable access rule
              dataSourceRule.enabled = true;
            }
          }
        });

        this.missingAccessTypes = _.difference(this.missingAccessTypes, enabledAccessTypes);
      });
    },
    onAddDefaultSecurity() {
      this.isLoading = true;

      const defaultRules = _.cloneDeep(this.widgetData.accessRules);

      if (this.selectedDataSource.accessRules && this.selectedDataSource.accessRules.length > 0) {
        this.addAppToExistingRule();
        this.enableRequiredRules();

        defaultRules.forEach(defaultRule => {
          defaultRule.type = this.missingAccessTypes;
          defaultRule.enabled = true;

          let accessRuleFound = this.selectedDataSource.accessRules.some(rule => {
            // Rule considered as duplicated in case if we have the same rule types and same allow option.
            // And it's enabled
            // And it's related to all apps or to the current app
            return (
              defaultRule.allow === rule.allow
                && !_.difference(rule.type, defaultRule.type).length
                && rule.enabled
                && (!rule.appId || _.includes(rule.appId, this.widgetData.appId))
            );
          });

          // Add new rule only if it is not found
          // Or we if we have a missing rules to add
          if (!accessRuleFound && this.missingAccessTypes.length) {
            // Split rules for each rule type
            // To add them as separate rules
            defaultRule.type.forEach((type) => {
              this.selectedDataSource.accessRules.push({
                ...defaultRule,
                type: Array.isArray(type) ? type : [type]
              });
            });
          }
        });
      } else {
        this.selectedDataSource.accessRules = this.widgetData.accessRules.map(defaultRule => {
          defaultRule.enabled = true;

          return defaultRule;
        });
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

      if (!Array.isArray(this.selectedDataSource.accessRules)) {
        this.selectedDataSource.accessRules = this.defaultAccessRules;
      }

      if (!this.selectedDataSource.accessRules.length) {
        this.securityEnabled = false;
        this.missingAccessTypes = this.widgetData.accessRules.map(rule => {
          return rule.type.map(accessType => {
            return accessType;
          });
        });

        return;
      }

      let includedAccessTypes = [];

      this.missingAccessTypes = [];

      this.selectedDataSource.accessRules.forEach(dataSourceRules => {
        _.forEach(this.widgetData.accessRules, componentRules => {
          componentRules.type.forEach(componentType => {
            if (
              _.includes(dataSourceRules.type, componentType)
              && dataSourceRules.enabled
              && (!dataSourceRules.appId || _.includes(dataSourceRules.appId, this.widgetData.appId))
            ) {
              includedAccessTypes.push(componentType);
            }
          });
        });
      });

      includedAccessTypes = _.uniq(includedAccessTypes);

      _.forEach(this.widgetData.accessRules, defaultRule => {
        defaultRule.type.forEach(defaultType => {
          if (!_.includes(includedAccessTypes, defaultType)) {
            this.missingAccessTypes.push(defaultType);
          }
        });
      });

      this.missingAccessTypes = _.uniq(this.missingAccessTypes);

      if (this.missingAccessTypes.length) {
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

          if (Modernizr.ie11) {
            // Specific fix for Vue 2.0.0(and above) render bug in IE11
            // https://github.com/vuejs/vue/issues/6209
            setTimeout(() => {
              this.selectedDataSource = dataSource;
            }, 0);
          } else {
            this.selectedDataSource = dataSource;
          }

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
          if (this.widgetData.dataSourceId && this.selectedDataSource) {
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
      return _.difference(dataSources, this.appDataSources, 'id');
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
            dataSourceId: this.selectedDataSource.id,
            appId: Fliplet.Env.get('appId')
          },
          helpLink: 'https://help.fliplet.com/data-sources/'
        }
      });
    },
    confirmAccessRules() {
      const message = `To use this feature, <code>${this.missingAccessTypes
        .join(', ')
        .toUpperCase()}</code> access must be added to the data source`;

      Fliplet.Modal.confirm({
        title: 'Missing security rules',
        message: message,
        backdrop: true,
        buttons: {
          confirm: {
            label: 'Add security rule'
          },
          cancel: {
            label: 'I\'ll do it later'
          }
        }
      }).then(result => {
        if (result) {
          this.onAddDefaultSecurity();
        }
      });
    },
    status(validation) {
      return {
        error: validation.$error
      };
    }
  },
  mounted() {
    this.initProvider();

    // Transfer selected DataSource id to the parent
    Fliplet.Widget.onSaveRequest(() => {
      Fliplet.Widget.save({ id: this.selectedDataSource ? this.selectedDataSource.id : null });
    });

    Fliplet.Studio.onMessage(event => {
      if (event.data) {
        switch (event.data.event) {
          case 'overlay-close':
            if (event.data.classes === 'data-source-overlay') {
              this.loadSelectedDataSource(this.selectedDataSource.id);
            }

            break;
          case 'validation':
            this.hasError = !this.$v.selectedValue.$model;

            break;
          case 'update-security-rules':
            this.widgetData.accessRules = event.data.accessRules;

            this.hasAccessRules();

            if (!this.securityEnabled && this.selectedDataSource) {
              this.confirmAccessRules();
            }

            break;
          case 'widget-autosize':
            Fliplet.Widget.autosize();

            break;
          default:
            break;
        }
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

        if (this.selectedDataSource) {
          let targetSources = this.allDataSources.length ? this.allDataSources : this.dataSources;

          if (!targetSources.some(currDS => currDS.id === this.selectedDataSource.id)) {
            this.selectedDataSource = null;
          }
        }

        // Give VUE time to reset templates
        this.$nextTick(() => {
          this.isLoading = false;
        });
      }
    }
  }
};
</script>
