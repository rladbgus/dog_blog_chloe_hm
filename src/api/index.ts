import axios from 'api/axios';
import querystring from 'querystring';

// 강아지들의 데이터 호출
export function getDogsData(query: any) {
  const queryData = querystring.stringify(query);
  return axios.get(`/breeds?${queryData}`);
}

// 강아지 상세 데이터 호출
export function searchDogData(query: any) {
  return axios.get(`/images/${query}`);
}

// 필터링된 데이터 호출
export function filterDogData(query: any) {
  const queryData = querystring.stringify(query);
  return axios.get(`/images/search?${queryData}`);
}

// 좋아요
export function postLike(query: any) {
  return axios.post(`/votes`, query);
}

// 좋아요 취소
export function deleteLike(query: any) {
  return axios.delete(`/votes/${query}`);
}

// 좋이요한 목록 호출
export function getLikeList(query: any) {
  const queryData = querystring.stringify(query);
  return axios.get(`/votes?${queryData}`);
}

// 즐겨찾기
export function postBookmark(query: any) {
  return axios.post(`/favourites`, query);
}

// 즐겨찾기 취소
export function deleteBookmark(query: any) {
  return axios.delete(`/favourites/${query}`);
}

// 즐겨찾기한 목록 호출
export function getBookmarkList(query: any) {
  const queryData = querystring.stringify(query);
  return axios.get(`/favourites?${queryData}`);
}

// 이미지 등록
export function postImage(formData: any, options: any) {
  return axios.post(`/images/upload`, formData, options);
}

// 등록한 이미지 호출
export function getUploadImage() {
  const query = { limit: 50 };
  const queryData = querystring.stringify(query);
  return axios.get(`/images?${queryData}`);
}

// 이미지 삭제
export function deleteUploadImage(query: any) {
  return axios.delete(`/images/${query}`);
}

// 이미지 분석
export function analysisImage(query: any) {
  return axios.get(`/images/${query}/analysis`);
}
