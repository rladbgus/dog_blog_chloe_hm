import axios from 'api/axios';
import querystring from 'querystring';

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
