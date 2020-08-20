<template>
  <section>
    <div v-if="dataSources.length && !selectedDataSource">
      <Select2 :dataSources="dataSources" :selectedDataSource="selectedDataSource" @selectDataSource="setDataSource"></Select2>
      <span @click="showAllDSs" class="btn-link create-dataSource">Create new data source</span>
      <div class="checkbox checkbox-icon">
        <input @change="showAllDSs" :checked="showAll" type="checkbox" name="showAll" id="showAll" />
        <label for="showAll">
          <span class="check">
            <i class="fa fa-check"></i>
          </span>
          Show all data sources
        </label>
      </div>
    </div>
    <div v-else-if="dataSources.length && selectedDataSource && !changeDataSource">
      <p>{{ selectedDataSource.id }}. {{ selectedDataSource.name }} <span @click="() => { this.$emit('onDataSourceChange') }" class="btn-link change-dataSource">Change</span></p>
      <div @click="viewDataSource" class="btn btn-default view-ds-btn">View data source</div>
    </div>
    <div v-else-if="dataSources.length && selectedDataSource && changeDataSource">
      <Select2 :dataSources="dataSources" :selectedDataSource="selectedDataSource" @selectDataSource="setDataSource"></Select2>
      <span @click="() => { this.$emit('onDataSourceCreate') }" class="btn-link create-dataSource">Create new data source</span>
      <div class="checkbox checkbox-icon">
        <input @change="showAllDSs" :checked="showAll" type="checkbox" name="showAll" id="showAll" />
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
    currentAppDSs: {
      type: Array,
      default() {
        return [];
      }
    },
    otherDSs: {
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
    showAllDSs: function() {
      this.$emit('onShowAll', !this.showAll);
      this.prepareData();
    },
    prepareData: function() {
      // If otherDSs array is empty it means that we show user only ds's for current app
      if (!this.otherDSs.length) {
        return this.currentAppDSs;
      }

      const groupedDataSources = [
        {
          id: 'currentAppDSs',
          text: 'This app',
          name: 'currentApp',
          children: []
        },
        {
          id: 'otherDSs',
          text: 'Other apps',
          name: 'otherApp',
          children: []
        }
      ];

      groupedDataSources[0].children = this.currentAppDSs;
      groupedDataSources[1].children = this.filterOtherAppsArray(this.otherDSs);

      return groupedDataSources;
    },
    filterOtherAppsArray: function(filterDS) {
      return filterDS.filter(ds => {
        return this.currentAppDSs.findIndex(currDS => currDS.id === ds.id) === -1;
      });
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
    this.dataSources = this.prepareData();
  },
  updated: function() {
    Fliplet.Widget.autosize();
  }
};
</script>
