export interface InitialDogsData {
  isLoading: boolean;
  dogsData: any;
  filterData: FilterData;
}

interface DogData {
  bred_for: string;
  breed_group: string;
  height: { imperial: string; metric: string };
  id: number;
  image: { height: number; id: string; url: string; width: number };
  life_span: string;
  name: string;
  origin: string;
  reference_image_id: string;
  temperament: string;
  weight: { imperial: string; metric: string };
}

interface FilterData {
  id: number;
  name: string;
  life_span: string;
  image: {
    url: string;
  };
}
