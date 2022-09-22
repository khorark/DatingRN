import type { IStateTreeNode } from 'mobx-state-tree';
import { getRoot } from 'mobx-state-tree';
import { RootStoreInstance } from 'src/stores';

export const withRoot = (self: IStateTreeNode) => ({
  views: {
    get storeRoot(): RootStoreInstance {
      const root = getRoot<RootStoreInstance>(self);
      return root;
    },
  },
});
