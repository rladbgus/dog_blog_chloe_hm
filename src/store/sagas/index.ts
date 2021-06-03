import { all, fork } from 'redux-saga/effects';
import dogsData from './dogsData';

export default function* rootSaga() {
  yield all([fork(dogsData)]);
}
