import axios from 'api/axios';
import querystring from 'querystring';

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
