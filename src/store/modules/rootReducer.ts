import { combineReducers } from '@reduxjs/toolkit';
import dogsData from 'store/modules/dogsData';
import { HYDRATE } from 'next-redux-wrapper';

const rootReducer = (state = {tick:'init'}, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log('HYDRATE', action);
      return {...state, ...action.payload}
    default: {
      const combineReducer = combineReducers({
        dogsData
      });
      return combineReducer(state, action);
    }
  }
};

export type RootState = ReturnType<typeof rootReducer>; //이게 모지?!
export default rootReducer;
