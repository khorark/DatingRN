import { Instance, types } from 'mobx-state-tree';
import { useMemo } from 'react';
import { AuthStore } from 'src/stores/auth/auth.store';
import { storeEnv } from 'src/stores/env/store.env';
import { PhotosStore } from 'src/stores/photos/photos.store';

const RootStore = types.model('RootStore', {
  identifier: types.optional(types.identifier, 'RootStore'),
  auth: AuthStore,
  photos: PhotosStore,
});

export const appStore = RootStore.create({ auth: {}, photos: {} }, storeEnv);

export const useAppStore = () => {
  const store = useMemo(() => appStore, [appStore]);
  return store;
};

export interface RootStoreInstance extends Instance<typeof RootStore> {}
