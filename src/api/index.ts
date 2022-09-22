import { AuthApi, AuthApiImpl } from 'src/api/auth/auth.api';

interface AppApi {
  readonly authApi: AuthApi;
}

class AppApiImpl implements AppApi {
  public readonly authApi: AuthApi;

  constructor(props: AppApi) {
    this.authApi = props.authApi;
  }
}

const appApi = new AppApiImpl({
  authApi: new AuthApiImpl(),
});

export default appApi;
