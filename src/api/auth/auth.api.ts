import auth from '@react-native-firebase/auth';

export interface AuthApi {
  login(): Promise<string>;
}

export class AuthApiImpl implements AuthApi {
  async login(): Promise<string> {
    const user = await auth().signInAnonymously();
    return user.user.uid;
  }
}
