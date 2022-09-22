import type { IStateTreeNode } from 'mobx-state-tree';
import { getEnv } from 'mobx-state-tree';
import { RootStoreEnv } from '../env/store.env';

export const withEnv = (self: IStateTreeNode) => ({
  views: {
    get storeEnv(): RootStoreEnv {
      const env = getEnv<RootStoreEnv>(self);
      return env;
    },
  },
});
