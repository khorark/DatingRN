import appApi from 'src/api';

export type RootStoreEnv = {
  appApi: typeof appApi;
};

export const storeEnv: RootStoreEnv = {
  appApi: appApi,
};
