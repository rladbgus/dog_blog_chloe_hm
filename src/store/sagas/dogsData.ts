import { AxiosResponse } from 'axios';
import { call, fork, put, takeEvery } from 'redux-saga/effects';
import { getDogsDataApi } from 'store/api';
import * as actions from 'store/modules/dogsData';

// 강아지 데이터 호출
function* getDogsData(query) {
  const queryData = query.payload;

  try {
    const response: AxiosResponse = yield call(getDogsDataApi.bind(null, queryData));
    yield put(actions.getDogsDataSuccess(response));
  } catch (err) {
    console.error(err);
  }
}

// 인피니트 스크롤 데이터 호출
function* moreDogsData(query) {
  const queryData = query.payload.queryData;

  try {
    const response: AxiosResponse = yield call(getDogsDataApi.bind(null, queryData));
    yield put(actions.getDogsDataSuccess(response));
  } catch (err) {
    console.error(err);
  }
}

// 정렬된 강아지 데이터 호출
function* getSortedDogsData(query) {
  const queryData = query.payload.queryData;

  try {
    const response: AxiosResponse = yield call(getDogsDataApi.bind(null, queryData));
    yield put(actions.sortedDogsDataSuccess(response));
  } catch (err) {
    console.error(err);
  }
}

function* watchGetDogsData() {
  yield takeEvery(actions.GET_DOGS_DATA, getDogsData);
  yield takeEvery(actions.MORE_DOGS_DATA, moreDogsData);
  yield takeEvery(actions.SORTED_DOGS_DATA, getSortedDogsData);
}

export default function* watchSaga() {
  yield fork(watchGetDogsData);
}
