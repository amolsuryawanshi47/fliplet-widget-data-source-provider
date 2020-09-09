<template>
  <section>
    <div ref="select" class="select" @click="() => { toggleSelect() }">
      <span class="select-holder">{{ selectedOption || '-- Select data source' }}</span>
    </div>
    <div class="options">
      <div class="search">
        <input @input="search" type="text" v-model.trim="searchValue"/>
      </div>
      <div v-if="!selectOptions.length && !searchValue" class="info">
        Loading...
      </div>
      <div v-else-if="!selectOptions.length && searchValue" class="info">
        No results found.
      </div>
      <div v-else-if="selectOptions.length">
        <div v-if="selectWithGroups">
          <div v-for="group in selectOptions" :key="group.name" class="option-group">
          <span class="option-group-name">{{ group.name }}</span>
            <div v-for="option in group.options" @click="() => { setOption(option) }" :key="option.id" class="option">
              {{ optionView(option) }}
            </div>
          </div>
        </div>
        <div v-else v-for="option in selectOptions" @click="() => { setOption(option) }" :key="option.id" class="option">
          {{ optionView(option) }}
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  props: {
    dataSources: {
      type: Array,
      default() {
        return [];
      }
    },
    customSearch: {
      type: Function,
      default: null
    },
    customOptionView: {
      type: Function,
      default: null
    },
    selectedDataSource: {
      type: Number
    },
    optionValueKey: {
      type: String,
      default: ''
    },
    optionLabelKey: {
      type: String,
      default: ''
    },
    selectWithGroups: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      selectedOption: '',
      selectOptions: [],
      allOptions: [],
      searchValue: ''
    };
  },
  methods: {
    toggleSelect: function(init) {
      if (!init) {
        this.$refs.select.classList.toggle('active');

        Fliplet.Widget.autosize();
      }
    },
    setOption: function(value, init) {
      this.selectedOption = this.getSelectedOptionLabel(value);
      this.$emit('selectDataSource', value);
      this.toggleSelect(init);
    },
    getSelectedOptionValue: function(value) {
      if (!this.optionValueKey) {
        return value;
      }

      return value && value[this.optionValueKey];
    },
    getSelectedOptionLabel: function(value) {
      if (!this.optionLabelKey) {
        return value;
      }

      return value && value[this.optionLabelKey];
    },
    search: function() {
      if (this.customSearch) {
        this.selectOptions = this.allOptions.filter(option => {
          return this.customSearch(this.searchValue, option);
        });

        return;
      }

      this.defaultSearch(this.searchValue);
    },
    optionView: function(data) {
      if (this.customOptionView) {
        return this.customOptionView(data);
      }

      return data;
    },
    defaultSearch: function(value) {
      this.selectOptions = [];

      if (!value) {
        this.selectOptions = [...this.allOptions];
        return;
      }

      this.selectOptions = this.allOptions.filter((option) => {
        return option.indexOf(value) !== -1;
      });
    },
    initSelect2: function() {
      this.allOptions = [...this.dataSources];
      this.search();
      this.setOption(this.selectedDataSource, true);
    }
  },
  mounted: function() {
    this.initSelect2();
  }
};
</script>
