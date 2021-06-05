import { put, call, takeEvery, fork } from 'redux-saga/effects';
import * as actions from 'store/modules/dogsData';
import { getDogsDataApi } from 'store/api';
import { AxiosResponse } from 'axios';

function* getDogsData(queryData) {
  const query = queryData.payload.query

  try {
    const response: AxiosResponse = yield call(getDogsDataApi.bind(null,query));
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
