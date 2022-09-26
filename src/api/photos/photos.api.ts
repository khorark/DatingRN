type PhotoDTO = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export interface PhotosApi {
  getPhoto(): Promise<PhotoDTO[]>;
}

export class PhotosApiImpl implements PhotosApi {
  async getPhoto(): Promise<PhotoDTO[]> {
    const data = await fetch('https://jsonplaceholder.typicode.com/photos');
    const photos = (await data.json()) as PhotoDTO[];
    return photos;
  }
}
