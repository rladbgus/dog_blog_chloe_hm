import { put, call, takeEvery, fork } from 'redux-saga/effects';
import * as actions from '../modules/dogsData';
import { getDogsDataApi } from '../api';
import { AxiosResponse } from 'axios';

function* getDogsData() {
  try {
    const response: AxiosResponse = yield call(getDogsDataApi);
    // console.log("🚀 ~ saga response", response)
    yield put(actions.getDogsDataSuccess(response));
  } catch (err) {
    console.error(err);
  }
}

function* watchGetDogsData() {
  yield takeEvery(actions.GET_DOGS_DATA, getDogsData);
}

export default function* watchSaga() {
  yield fork(watchGetDogsData);
}
