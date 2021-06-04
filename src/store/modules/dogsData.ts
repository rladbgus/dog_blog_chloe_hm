import { createAction, createReducer } from '@reduxjs/toolkit';
import { DogsDataType } from '../interface';

// Actions
export const GET_DOGS_DATA = 'GET_DOGS_DATA';
export const GET_DOGS_DATA_SUCCESS = 'GET_DOGS_DATA_SUCCESS';
export const GET_DOGS_DATA_FAILURE = 'GET_DOGS_DATA_FAILURE';

// Action 생성자
export const getDogsData = createAction(
  GET_DOGS_DATA,
  function prepare(DogsData: any) {
    return {
      payload: {
        DogsData
      }
    };
  }
);
export const getDogsDataSuccess = createAction(
  GET_DOGS_DATA_SUCCESS,
  function prepare(DogsData: any) {
    return {
      payload: {
        DogsData
      }
    };
  }
);
export const getDogsDataFailure = createAction(GET_DOGS_DATA_FAILURE);

// 초기값
const initialState: DogsDataType = {
  isLoading: false,
  dogsData: {}
};

// Reducer
const reducer = createReducer(initialState, {
  [getDogsData.type]: (state) => {
    state.isLoading = true;
  },
  [getDogsDataSuccess.type]: (state, action) => {
    (state.dogsData = action.payload.DogsData.data), (state.isLoading = false);
  },
  [getDogsDataFailure.type]: (state) => {
    state.isLoading = false;
  }
});

export default reducer;
