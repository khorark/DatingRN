import { types } from 'mobx-state-tree';
import { flow } from 'src/stores/types/store.types';
import { withEnv } from 'src/stores/withStores';

export const AuthStore = types
  .model({
    userId: types.maybe(types.string),
    isError: false,
  })
  .views((self) => ({
    get isSignIn(): boolean {
      return Boolean(self.userId);
    },
  }))
  .extend(withEnv)
  .actions((self) => ({
    resetError() {
      self.isError = false;
    },
  }))
  .actions((self) => ({
    login: flow(function* ({ login, password }: LoginProps) {
      try {
        if (login.toLocaleLowerCase() === 'bob' && password.toLocaleLowerCase() === '123456') {
          self.userId = yield self.storeEnv.appApi.authApi.login();
        } else {
          self.isError = true;
        }
      } catch (e) {
        console.warn('auth.login error: ', e);
        self.isError = true;
      }
    }),
    logout() {
      self.userId = undefined;
    },
  }));

type LoginProps = {
  login: string;
  password: string;
};
