import { createAction, createReducer } from '@reduxjs/toolkit';
import { DogsDataType } from 'store/interface';

// Actions
export const GET_DOGS_DATA = 'GET_DOGS_DATA';
export const GET_DOGS_DATA_SUCCESS = 'GET_DOGS_DATA_SUCCESS';
export const MORE_DOGS_DATA = 'MORE_DOGS_DATA';
export const SORTED_DOGS_DATA = 'SORTED_DOGS_DATA';
export const SORTED_DOGS_DATA_SUCCESS = 'SORTED_DOGS_DATA_SUCCESS';
export const FILTER_DOGS_DATA = 'FILTER_DOGS_DATA';
export const FILTER_DOGS_DATA_SUCCESS = 'FILTER_DOGS_DATA_SUCCESS';

// Action 생성자
export const getDogsData = createAction(
  GET_DOGS_DATA,
  function prepare(queryData) {
    return {
      payload: {
        page: 1,
        limit: 50,
        order: queryData ? queryData.order : 'Asc'
      }
    };
  }
);
export const getDogsDataSuccess = createAction(
  GET_DOGS_DATA_SUCCESS,
  function prepare(DogsData) {
    return {
      payload: {
        DogsData
      }
    };
  }
);

export const moreDogsData = createAction(
  MORE_DOGS_DATA,
  function prepare(queryData) {
    return {
      payload: {
        queryData
      }
    };
  }
);

export const sortedDogsData = createAction(
  SORTED_DOGS_DATA,
  function prepare(queryData) {
    return {
      payload: {
        queryData
      }
    };
  }
);

export const sortedDogsDataSuccess = createAction(SORTED_DOGS_DATA_SUCCESS);

export const filterDogData = createAction(
  FILTER_DOGS_DATA,
  function prepare(queryData) {
    return {
      payload: {
        queryData
      }
    };
  }
);

export const filterDogsDataSuccess = createAction(FILTER_DOGS_DATA_SUCCESS);

// 초기값
const initialState: DogsDataType = {
  isLoading: false,
  dogsData: [],
  filterData: { name: '', life_span: '', id: -1, image: { url: '' } }
};

// Reducer
const reducer = createReducer(initialState, {
  [getDogsData.type]: (state) => {
    state.isLoading = true;
  },
  [getDogsDataSuccess.type]: (state, action) => {
    state.dogsData = state.dogsData.concat(action.payload.DogsData.data);
  },
  [sortedDogsData.type]: (state) => {
    state.isLoading = true;
  },
  [sortedDogsDataSuccess.type]: (state, action) => {
    state.dogsData = action.payload.data;
  },
  [filterDogsDataSuccess.type]: (state, action) => {
    state.filterData.name = action.payload.data[0].breeds[0].name;
    state.filterData.life_span = action.payload.data[0].breeds[0].life_span;
    state.filterData.id = action.payload.data[0].id;
    state.filterData.image.url = action.payload.data[0].url;
    state.dogsData = [state.filterData];
  }
});

export default reducer;
