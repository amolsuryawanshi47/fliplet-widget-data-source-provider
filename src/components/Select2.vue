<template>
  <section>
    <div ref="select" class="select" @click="() => { toggleSelect() }">
      <span class="select-holder">{{ setedOption || '-- Select an option' }}</span>
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
    options: {
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
    selectedOption: {
      type: Object,
      default: null
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
      setedOption: '',
      selectOptions: [],
      searchValue: ''
    };
  },
  methods: {
    toggleSelect(init) {
      if (!init) {
        this.$refs.select.classList.toggle('active');

        Fliplet.Widget.autosize();
      }
    },
    setOption(value, init) {
      this.setedOption = this.getSelectedOptionLabel(value);
      this.$emit('update:selectedOption', value);
      this.toggleSelect(init);
    },
    getSelectedOptionValue(value) {
      if (!this.optionValueKey) {
        return value;
      }

      return value && value[this.optionValueKey];
    },
    getSelectedOptionLabel(value) {
      if (!this.optionLabelKey) {
        return value;
      }

      return value && value[this.optionLabelKey];
    },
    deepCopy(inObject) {
      let outObject;
      let value;
      let key;

      if (typeof inObject !== 'object' || inObject === null) {
        return inObject; // Return the value if inObject is not an object
      }

      // Create an array or object to hold the values
      outObject = Array.isArray(inObject) ? [] : {};

      // eslint-disable-next-line guard-for-in
      for (key in inObject) {
        value = inObject[key];

        // Recursively (deep) copy for nested objects, including arrays
        outObject[key] = this.deepCopy(value);
      }

      return outObject;
    },
    search() {
      const optionsCopy = this.deepCopy(this.options);

      if (this.customSearch) {
        if (this.selectWithGroups && this.selectOptions.length) {
          this.selectOptions.forEach((group, index, originArray) => {
            originArray[index].options = optionsCopy[index].options.filter(option => {
              return this.customSearch(this.searchValue, option);
            });
          });
        } else {
          this.selectOptions = optionsCopy.filter(option => {
            return this.customSearch(this.searchValue, option);
          });
        }

        return;
      }

      this.defaultSearch(this.searchValue);
    },
    optionView(data) {
      if (this.customOptionView) {
        return this.customOptionView(data);
      }

      return data;
    },
    defaultSearch(value) {
      const optionsCopy = this.deepCopy(this.options);
      this.selectOptions = [];

      if (!value) {
        this.selectOptions = [...optionsCopy];
        return;
      }

      this.selectOptions = optionsCopy.filter((option) => {
        return option.indexOf(value) !== -1;
      });
    },
    initSelect2() {
      this.search();
      this.setOption(this.selectedOption, true);
    }
  },
  mounted: function() {
    this.initSelect2();
  }
};
</script>
