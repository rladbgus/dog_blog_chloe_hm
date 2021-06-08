import { createAction, createReducer } from '@reduxjs/toolkit';
import { DogsDataType } from 'store/interface';

// Actions
export const GET_DOGS_DATA = 'GET_DOGS_DATA';
export const GET_DOGS_DATA_SUCCESS = 'GET_DOGS_DATA_SUCCESS';
export const GET_DOGS_DATA_FAILURE = 'GET_DOGS_DATA_FAILURE';
export const MORE_DOGS_DATA = 'MORE_DOGS_DATA';

// Action 생성자
export const getDogsData = createAction(GET_DOGS_DATA, function prepare(queryData) {
  console.log('🚀 ~ 액션에서 받는 쿼리 getDogsData 액션쿼리 ', queryData);
  return {
    payload: {
      page: 1,
      limit: 25,
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
export const getDogsDataFailure = createAction(GET_DOGS_DATA_FAILURE);

export const moreDogsData = createAction(MORE_DOGS_DATA, function prepare(queryData) {
  console.log('🚀 ~  액션에서 받는 쿼리 moreDogsData 액션쿼리', queryData);
  return {
    payload: {
      queryData
    }
  };
});

// 초기값
const initialState: DogsDataType = {
  isLoading: false,
  dogsData: [],
};

// Reducer
const reducer = createReducer(initialState, {
  [getDogsData.type]: (state) => {
    state.isLoading = true;
  },
  [getDogsDataSuccess.type]: (state, action) => {
    console.log("🚀 ~ 이건가?!!!!!!!!!!!!!!!", state.dogsData)
    state.dogsData = state.dogsData.concat(action.payload.DogsData.data),
    state.isLoading = false
  },
  [getDogsDataFailure.type]: (state) => {
    state.isLoading = false;
  },
});

export default reducer;
