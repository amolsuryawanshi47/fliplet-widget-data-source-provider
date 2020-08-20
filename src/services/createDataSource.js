export const createDataSource = (widgetData) => {
  return Fliplet.Modal.prompt({
    title: 'Enter a name for the data source',
    default: widgetData.default.name
  })
    .then(dataSourceName => {
      if (dataSourceName === null) {
        return false;
      }

      if (!dataSourceName) {
        Fliplet.Modal.alert({
          message: 'Data source name can\'t be empty. Plaese enter data source name again.'
        })
          .then(() => {
            createDataSource();
          });
      }

      return Fliplet.DataSources.create({
        name: dataSourceName,
        appId: widgetData.appId,
        entries: widgetData.defaults.entries.entries,
        columns: widgetData.defaults.entries.columns
      });
    });
};
