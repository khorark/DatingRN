import { types } from 'mobx-state-tree';
import auth from '@react-native-firebase/auth';
import { flow } from 'src/stores/types/store.types';

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
  .actions((self) => ({
    resetError() {
      self.isError = false;
    },
  }))
  .actions((self) => ({
    login: flow(function* ({ login, password }: LoginProps) {
      try {
        if (login.toLocaleLowerCase() === 'bob' && password.toLocaleLowerCase() === '123456') {
          const user = yield auth().signInAnonymously();
          self.userId = user.user.uid;
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
