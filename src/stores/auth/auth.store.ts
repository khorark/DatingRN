import { types } from 'mobx-state-tree';

export const AuthStore = types
  .model({
    userId: types.maybe(types.string),
  })
  .actions((self) => ({
    setUserId(value: string) {
      self.userId = value;
    },
  }));
