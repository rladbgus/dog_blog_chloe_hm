import { combineReducers } from '@reduxjs/toolkit';
import dogsData from './dogsData';

const rootReducer = combineReducers({
  dogsData,
});

export type RootState = ReturnType<typeof rootReducer>; //이게 모지?!
export default rootReducer;
