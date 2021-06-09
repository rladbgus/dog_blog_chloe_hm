import { createAction, createReducer } from '@reduxjs/toolkit';
import { DogsDataType } from 'store/interface';

// Actions
export const GET_DOGS_DATA = 'GET_DOGS_DATA';
export const GET_DOGS_DATA_SUCCESS = 'GET_DOGS_DATA_SUCCESS';
export const MORE_DOGS_DATA = 'MORE_DOGS_DATA';
export const SORTED_DOGS_DATA = 'SORTED_DOGS_DATA';
export const SORTED_DOGS_DATA_SUCCESS = 'SORTED_DOGS_DATA_SUCCESS';

// Action 생성자
export const getDogsData = createAction(GET_DOGS_DATA, function prepare(queryData) {
  return {
    payload: {
      page: 1,
      limit: 50,
      order: queryData ? queryData.order : 'Asc'
    }
  };
});
export const getDogsDataSuccess = createAction(GET_DOGS_DATA_SUCCESS, function prepare(DogsData) {
  return {
    payload: {
      DogsData
    }
  };
});

export const moreDogsData = createAction(MORE_DOGS_DATA, function prepare(queryData) {
  return {
    payload: {
      queryData
    }
  };
});

export const sortedDogsData = createAction(SORTED_DOGS_DATA, function prepare(queryData) {
  return {
    payload: {
      queryData
    }
  };
});

export const sortedDogsDataSuccess = createAction(SORTED_DOGS_DATA_SUCCESS);

// 초기값
const initialState: DogsDataType = {
  isLoading: false,
  dogsData: []
};

// Reducer
const reducer = createReducer(initialState, {
  [getDogsData.type]: (state) => {
    state.isLoading = true;
  },
  [getDogsDataSuccess.type]: (state, action) => {
    (state.dogsData = state.dogsData.concat(action.payload.DogsData.data)),
      (state.isLoading = false);
  },
  [sortedDogsData.type]: (state) => {
    state.isLoading = true;
  },
  [sortedDogsDataSuccess.type]: (state, action) => {
    (state.dogsData = action.payload.data), (state.isLoading = false);
  }
});

export default reducer;
