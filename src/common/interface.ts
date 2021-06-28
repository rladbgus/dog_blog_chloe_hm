export interface DogData {
  id?: number;
  url?: string;
  breeds?: object[];
  length?: number;
}

export interface DogDetailData {
  id?: number;
  url?: string;
  name?: string;
  image_id?: string;
  life_span?: string;
  breed_group?: string;
  temperament?: string;
  image?: { id: string; url: string };
}
