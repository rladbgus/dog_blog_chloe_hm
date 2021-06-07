import { put, call, takeEvery, fork } from 'redux-saga/effects';
import * as actions from 'store/modules/dogsData';
import { getDogsDataApi } from 'store/api';
import { AxiosResponse } from 'axios';

// 강아지 데이터 호출
function* getDogsData(query) {
  const queryData = query.payload.queryData

  try {
    const response: AxiosResponse = yield call(getDogsDataApi.bind(null,queryData));
    console.log("🚀 ~ response", response)
    yield put(actions.getDogsDataSuccess(response));
  } catch (err) {
    console.error(err);
  }
}

// 인피니트 스크롤 데이터 호출
function* moreDogsData(query) {
  console.log("🚀 ~ 인피니트인피니트인피니트", query)
  const queryData = query.payload.queryDataq

  try {
    const response: AxiosResponse = yield call(getDogsDataApi.bind(null,queryData));
    yield put(actions.getDogsDataSuccess(response));
  } catch (err) {
    console.error(err);
  }
}

function* watchGetDogsData() {
  yield takeEvery(actions.GET_DOGS_DATA, getDogsData);
  yield takeEvery(actions.MORE_DOGS_DATA, moreDogsData);
}

export default function* watchSaga() {
  yield fork(watchGetDogsData);
}
