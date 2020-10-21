<template>
  <select ref="select" class="select" @change="onSelectChange">
    <option value="none">-- Select data source</option>
    <option v-if="!options.length" value="none" disabled>(No data source found)</option>
    <template v-else-if="options.length">
      <template v-if="selectWithGroups">
        <optgroup v-for="group in options" :key="group.name" :label="group.name">
          <option v-for="option in group.options" :key="option.id" :value="option.id">{{ optionView(option) }}</option>
        </optgroup>
      </template>
      <template v-else>
        <option v-for="option in options" :key="option.id" :value="option.id">{{ optionView(option) }}</option>
      </template>
    </template>
  </select>
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
  methods: {
    onSelectChange(event) {
      const id = parseInt(event.target.value, 10);
      let value;

      if (id === 'none') {
        value = null;
      } else if (this.selectWithGroups) {
        value = this.options.find(group => {
          return group.options.find(option => option.id === id);
        });
      } else {
        value = this.options.find(option => option.id === id);
      }

      this.$emit('update:selectedOption', value);
    },
    optionView(data) {
      if (this.customOptionView) {
        return this.customOptionView(data);
      }

      return data;
    }
  },
  mounted() {
    if (this.selectedOption) {
      this.$refs.select.value = this.selectedOption.id;
    }
  }
};
</script>
