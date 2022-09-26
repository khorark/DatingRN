import { cast, types } from 'mobx-state-tree';
import { flow } from 'src/stores/types/store.types';
import { withEnv } from 'src/stores/withStores';

const PhotoModel = types.model({
  albumId: types.number,
  id: types.identifierNumber,
  title: types.string,
  url: types.string,
  thumbnailUrl: types.string,
});

export const PhotosStore = types
  .model({
    items: types.array(PhotoModel),
  })
  .extend(withEnv)
  .actions((self) => ({
    getPhotos: flow(function* () {
      try {
        const data = yield self.storeEnv.appApi.photoApi.getPhoto();
        self.items = cast(data.slice(0, 10));
      } catch (e) {
        console.warn('Get photos error: ', e);
      }
    }),
  }));
