import axios from 'axios';
import querystring from 'querystring';

// Header 데이터
const DOG_DATA_API_KEY = process.env.DOG_DATA_API_KEY;
const headers = {
  'x-api-key': DOG_DATA_API_KEY
};

// 메인 api 주소
const DOG_DATA_API = 'https://api.thedogapi.com/v1';

// 강아지들의 데이터 호출
export function getDogsDataApi(query) {
  const queryData = querystring.stringify(query);
  return axios.get(`${DOG_DATA_API}/breeds?${queryData}`, headers);
}

// 강아지 상세 데이터 호출
export function searchDogDataApi(query) {
  return axios.get(`${DOG_DATA_API}/images/${query}`, headers);
}

// 필터링된 데이터 호출
export function filterDogDataApi(query) {
  const queryData = querystring.stringify(query);
  return axios.get(`${DOG_DATA_API}/images/search?${queryData}`, headers);
}
