<template>
  <select name="selectDatasource" ref="selectDatasource" data-label="select" class="hidden-select form-control">
    <option value="none" disable>-- Select data source</option>
  </select>
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
    selectedDataSource: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    customDataSourceSearch: function(params, data) {
      // If there are no search terms, return all of the data
      if (!params.term) {
        return data;
      }

      // Do not display the item if there is no 'text' property
      if (typeof data.text === 'undefined' || typeof data.name === 'undefined' || typeof data.id === 'undefined') {
        return null;
      }

      const term = params.term.toLowerCase();

      // Search when we get DataSources for all aps
      if (data.children) {
        const matchedChildren = data.children.filter(function(child) {
          const name = child.name.toLowerCase();
          const id = child.id.toString();

          if (name.indexOf(term) > -1 || id.indexOf(term) > -1) {
            return true;
          }
        });

        if (matchedChildren.length) {
          const modifiedData = {...data};

          modifiedData.children = matchedChildren;

          return modifiedData;
        }
      }

      // Search both by name and id
      if (data.name.indexOf(term) > -1 || data.id.indexOf(term) > -1) {
        return data;
      }

      // Return `null` if the term should not be displayed
      return null;
    },
    initSelect2: function() {
      $(this.$refs.selectDatasource).select2({
        data: this.dataSources,
        placeholder: '-- Select a data source',
        templateResult: this.formatState,
        templateSelection: this.formatState,
        width: '100%',
        matcher: this.customDataSourceSearch,
        dropdownAutoWidth: false
      });
    },
    select2Listeners: function() {
      const $vm = this;
      const $select2Ref = $(this.$refs.selectDatasource);

      $select2Ref.on('select2:select', function(e) {
        $vm.$emit('selectDataSource', e.params.data);
      });

      $select2Ref.on('select2:open', function() {
        $($('span.select2-container.select2-container--default.select2-container--open')[1]).css('position', 'relative');

        Fliplet.Widget.autosize();
        setTimeout(() => {
          $($('span.select2-container.select2-container--default.select2-container--open')[1]).css('position', 'absolute');
        }, 250);
      });

      $select2Ref.on('select2:close', function() {
        setTimeout(() => {
          Fliplet.Widget.autosize();
        }, 100);
      });
    },
    formatState: function(state) {
      if (state.id === 'none' || state.id === 'currentAppDataSources' || state.id === 'otherDataSources') {
        return $(
          '<span class="select2-value-holder">' + state.text + '</span>'
        );
      }
      if (state.id === 'new') {
        return $(
          '<span class="select2-value-holder">' + state.text + '</span>'
        );
      }
      if (state.id === '------') {
        return $(
          '<span class="select2-value-holder">' + state.text + '</span>'
        );
      }
      if (typeof state.name === 'undefined' && typeof state.text !== 'undefined') {
        return $(
          '<span class="select2-value-holder">' + state.text + ' <small>ID: ' + state.id + '</small></span>'
        );
      }

      return $(
        '<span class="select2-value-holder">' + state.name + ' <small>ID: ' + state.id + '</small></span>'
      );
    },
    setSelectedDataSource: function(selectedDataSource) {
      if (!selectedDataSource) {
        return;
      }

      const $select2 = $(this.$refs.selectDatasource);

      $select2.val(selectedDataSource.id).trigger('change');
    }
  },
  mounted: function() {
    this.initSelect2();
    this.select2Listeners();
    this.setSelectedDataSource(this.selectedDataSource);
  },
  updated: function() {
  }
};
</script>
