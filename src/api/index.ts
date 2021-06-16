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
export function getDogsData(query: any) {
  const queryData = querystring.stringify(query);
  return axios.get(`${DOG_DATA_API}/breeds?${queryData}`);
}

// 강아지 상세 데이터 호출
export function searchDogData(query: any) {
  return axios.get(`${DOG_DATA_API}/images/${query}`);
}

// 필터링된 데이터 호출
export function filterDogData(query: any) {
  const queryData = querystring.stringify(query);
  return axios.get(`${DOG_DATA_API}/images/search?${queryData}`);
}

// 좋아요
export function postLike(query: any) {
  return axios.post(`${DOG_DATA_API}/votes`, query, headers);
}

// 좋아요 취소
export function deleteLike(query: any) {
  return axios.delete(`${DOG_DATA_API}/votes/${query}`, headers);
}

// 좋이요한 목록 호출
export function getLikeList(query: any) {
  const queryData = querystring.stringify(query);
  return axios.get(`${DOG_DATA_API}/votes?${queryData}`, headers);
}

// 즐겨찾기
export function postBookmark(query: any) {
  return axios.post(`${DOG_DATA_API}/favourites`, query, headers);
}

// 즐겨찾기 취소
export function deleteBookmark(query: any) {
  return axios.delete(`${DOG_DATA_API}/favourites/${query}`, headers);
}

// 즐겨찾기한 목록 호출
export function getBookmarkList(query: any) {
  const queryData = querystring.stringify(query);
  return axios.get(`${DOG_DATA_API}/favourites?${queryData}`, headers);
}

// 이미지 등록
export function postImage(formData: any) {
  console.log('🚀 ~ formData', formData);
  console.log('🚀 ~ headers', headers);
  const queryData = querystring.stringify({ sub_id: 'chloe' });
  return axios.post(
    `${DOG_DATA_API}/images/upload?${queryData}`,
    formData,
    headers
  );
}

// 이미지 분석
export function analysisImage(query: any) {
  return axios.get(`${DOG_DATA_API}/images/${query}/analysis`);
}
