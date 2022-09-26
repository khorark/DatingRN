import { AuthApi, AuthApiImpl } from 'src/api/auth/auth.api';
import { PhotosApi, PhotosApiImpl } from 'src/api/photos/photos.api';

interface AppApi {
  readonly authApi: AuthApi;
  readonly photoApi: PhotosApi;
}

class AppApiImpl implements AppApi {
  public readonly authApi: AuthApi;
  public readonly photoApi: PhotosApi;

  constructor(props: AppApi) {
    this.authApi = props.authApi;
    this.photoApi = props.photoApi;
  }
}

const appApi = new AppApiImpl({
  authApi: new AuthApiImpl(),
  photoApi: new PhotosApiImpl(),
});

export default appApi;
