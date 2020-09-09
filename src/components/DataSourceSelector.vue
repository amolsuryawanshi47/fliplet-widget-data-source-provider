<template>
  <section>
    <div v-if="dataSources.length && !selectedDataSource">
      <Select2 :dataSources="dataSources" :selectedDataSource="selectedDataSource" @selectDataSource="setDataSource"></Select2>
      <span @click="onDataSourceCreate" class="btn-link create-dataSource">Create new data source</span>
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
      <div @click="viewDataSource" class="btn btn-default btn-view-data-source">View data source</div>
    </div>
    <div v-else-if="dataSources.length && selectedDataSource && changeDataSource">
      <Select2 :dataSources="dataSources" :selectedDataSource="selectedDataSource" @selectDataSource="setDataSource"></Select2>
      <span @click="onDataSourceCreate" class="btn-link create-dataSource">Create new data source</span>
      <div class="checkbox checkbox-icon">
        <input @change="showAllDataSources" :checked="showAll" type="checkbox" name="showAll" id="showAll" />
        <label for="showAll">
          <span class="check">
            <i class="fa fa-check"></i>
          </span>
          Show all data sources
        </label>
      </div>
      <div @click="viewDataSource" class="btn btn-default view-ds-btn">View data source</div>
    </div>
  </section>
</template>

<script>
import Select2 from './Select2';

export default {
  data() {
    return {
      dataSources: []
    };
  },
  props: {
    currentAppDataSources: {
      type: Array,
      default() {
        return [];
      }
    },
    otherDataSources: {
      type: Array,
      default() {
        return [];
      }
    },
    selectedDataSource: {
      type: Object,
      default() {
        return {};
      }
    },
    changeDataSource: {
      type: Boolean,
      default: false
    },
    showAll: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    showAllDataSources: function() {
      this.$emit('onShowAll', !this.showAll);
      this.formatDataSources();
    },
    formatDataSources: function() {
      // If we have selected data source before
      if (!this.currentAppDataSources.length) {
        return [];
      }

      // If the otherDataSources array is empty it means that we show the user only data sources for the current app
      if (!this.otherDataSources.length) {
        return this.currentAppDataSources;
      }

      const allDataSources = [
        {
          id: 'currentAppDataSources',
          text: 'This app',
          name: 'currentApp',
          children: []
        },
        {
          id: 'otherDataSources',
          text: 'Other apps',
          name: 'otherApp',
          children: []
        }
      ];

      allDataSources[0].children = this.currentAppDataSources;
      allDataSources[1].children = this.filterOtherAppsArray(this.otherDataSources);

      return allDataSources;
    },
    getOtherAppsDataSources: function(dataSources) {
      return dataSources.filter(ds => {
        return this.currentAppDataSources.findIndex(currDataSource => currDataSource.id === ds.id) === -1;
      });
    },
    onDataSourceCreate: function() {
      this.$emit('onDataSourceCreate');
    },
    setDataSource: function(dataSource) {
      this.selectedDataSource = dataSource;

      this.$emit('selectedDataSourceId', dataSource);
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
    this.dataSources = this.formatDataSources();
  },
  updated: function() {
    Fliplet.Widget.autosize();
  }
};
</script>
