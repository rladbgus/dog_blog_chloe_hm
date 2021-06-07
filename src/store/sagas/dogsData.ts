import { put, call, takeEvery, fork } from 'redux-saga/effects';
import * as actions from 'store/modules/dogsData';
import { getDogsDataApi } from 'store/api';
import { AxiosResponse } from 'axios';

function* getDogsData(query) {
  const queryData = query.payload.queryData

  try {
    const response: AxiosResponse = yield call(getDogsDataApi.bind(null,queryData));
    yield put(actions.getDogsDataSuccess(response));
  } catch (err) {
    console.error(err);
  }
}


// function* moreDogsData(query) {
//   const queryData = query.payload.queryDataq

//   try {
//     const response: AxiosResponse = yield call(getDogsDataApi.bind(null,queryData));
//     yield put(actions.getDogsDataSuccess(response));
//   } catch (err) {
//     console.error(err);
//   }
// }

function* watchGetDogsData() {
  yield takeEvery(actions.GET_DOGS_DATA, getDogsData);
  // yield takeEvery(actions.MORE_DOGS_DATA, moreDogsData);
}

export default function* watchSaga() {
  yield fork(watchGetDogsData);
}
