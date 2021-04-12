import 'core-js/stable';
import 'core-js/es';
import 'regenerator-runtime/runtime';
import DataSourceProvider from './DataSourceProvider.vue';

new Vue({
  el: '#fliplet-widget-data-source-provider',
  render: (createElement) => {
    return createElement(DataSourceProvider);
  }
});
