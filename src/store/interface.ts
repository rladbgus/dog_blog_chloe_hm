export interface initialStateProps {
  isLoading: boolean;
  dogsData: object[];
  filterData: FilterData;
}

interface FilterData {
  name: string;
  life_span: string;
  id: number;
  image: {
    url: string;
  };
}
