import { combineReducers, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import dogsData from 'store/modules/dogsData';

interface DogsData {
  dogsData: [];
  filterData: {
    id: number;
    image: { url: string };
    life_span: string;
    name: string;
  };
  isLoading: boolean;
}
function rootReducer(state, action: PayloadAction<DogsData>) {
  console.log('🚀 ~ action', action);
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    default: {
      const combineReducer = combineReducers({
        dogsData
      });
      return combineReducer(state, action);
    }
  }
}

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
