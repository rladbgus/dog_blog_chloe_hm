import { combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import dogsData from 'store/modules/dogsData';

function rootReducer(state, action) {
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
