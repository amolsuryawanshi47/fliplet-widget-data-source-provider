export const getDataSources = (appId) => {
  const getOptions = appId ? { appId: appId } : {};

  return Fliplet.DataSources.get(getOptions);
};

export const getDataSource = (dataSourceId) => {
  return Fliplet.DataSources.getById(dataSourceId, { cache: false });
};

export const createDataSource = (data, context) => {
  return Fliplet.Modal.prompt({
    title: 'Enter a name for the data source',
    value: data.default.name || ''
  })
    .then(dataSourceName => {
      if (dataSourceName === null) {
        return;
      }

      if (!dataSourceName) {
        return Fliplet.Modal.alert({
          message: 'Data source name can\'t be empty. Plaese enter data source name again.'
        })
          .then(() => {
            return createDataSource(data);
          });
      }

      context.isLoading = true;

      return Fliplet.DataSources.create({
        name: dataSourceName,
        appId: data.appId,
        entries: data.default.entries,
        columns: data.default.columns
      });
    });
};

export const updateDataSourceSecurityRules = (dataSourceId, securityRules) => {
  return Fliplet.DataSources.update(dataSourceId, {
    accessRules: securityRules
  });
};
