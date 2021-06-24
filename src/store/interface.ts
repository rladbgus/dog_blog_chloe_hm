export interface initialStateProps {
  isLoading: boolean;
  dogsData: object[];
  filterData: FilterData;
}

interface FilterData {
  name: string;
  life_span: string;
  id: number;
  image: Image;
}

interface Image {
  url: string;
}
