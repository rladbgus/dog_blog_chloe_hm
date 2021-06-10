import axios from 'axios';
import querystring from 'querystring';

// Header 데이터

//환경변수 처리하기 (브라우저와 노드 환경 다름)
// const DOG_DATA_API_KEY = process.env.NEXT_PUBLIC_DOG_DATA_API_KEY;
const DOG_DATA_API_KEY = 'b5b7f00c-d21d-4457-b750-857d73dd4410';
const headers = {
  headers: {
    'x-api-key': DOG_DATA_API_KEY
  }
};

// 메인 api 주소
const DOG_DATA_API = 'https://api.thedogapi.com/v1';

// 강아지들의 데이터 호출
export function getDogsDataApi(query) {
  const queryData = querystring.stringify(query);
  return axios.get(`${DOG_DATA_API}/breeds?${queryData}`);
}

// 강아지 상세 데이터 호출
export function searchDogDataApi(query) {
  return axios.get(`${DOG_DATA_API}/images/${query}`);
}

// 필터링된 데이터 호출
export function filterDogDataApi(query) {
  const queryData = querystring.stringify(query);
  return axios.get(`${DOG_DATA_API}/images/search?${queryData}`);
}

// 좋아오 기능
export function postLikeApi(query) {
  return axios.post(`${DOG_DATA_API}/favourites`, query, headers);
}

// 좋아요한 목록 호출
export function getLikeList() {
  return axios.get(`${DOG_DATA_API}`);
}
