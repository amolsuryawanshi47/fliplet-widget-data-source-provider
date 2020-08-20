export const getDataSources = (appId) => {
  const getOptions = appId ? {appId: appId} : {};

  return Fliplet.DataSources.get(getOptions);
};

export const getDataSource = (dataSourceId) => {
  return Fliplet.DataSources.getById(dataSourceId);
};
