import { AxiosResponse } from 'axios';
import { call, fork, put, takeEvery } from 'redux-saga/effects';
import { filterDogDataApi, getDogsDataApi } from 'api/api';
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

// 필터링된 강아지 데이터 호출
function* filterDogData(query) {
  const queryData = query.payload.queryData;

  try {
    const response: AxiosResponse = yield call(filterDogDataApi.bind(null, queryData));
    yield put(actions.filterDogsDataSuccess(response));
  } catch (err) {
    console.error(err);
  }
}

function* watchGetDogsData() {
  yield takeEvery(actions.GET_DOGS_DATA, getDogsData);
  yield takeEvery(actions.MORE_DOGS_DATA, moreDogsData);
  yield takeEvery(actions.SORTED_DOGS_DATA, getSortedDogsData);
  yield takeEvery(actions.FILTER_DOGS_DATA, filterDogData);
}

export default function* watchSaga() {
  yield fork(watchGetDogsData);
}
