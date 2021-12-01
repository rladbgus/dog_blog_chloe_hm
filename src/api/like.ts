import axios from 'api/axios';
import * as T from 'api/type';
import querystring from 'querystring';

// 좋아요
export function postLike(query: object) {
  return axios.post(`/votes`, query);
}

// 좋아요취소
export function deleteLike(query: string) {
  return axios.delete(`/votes/${query}`);
}

// 좋이요한 목록 호출
export function getLikeList(query: T.LikeQuery) {
  const queryData = querystring.stringify(query);
  return axios.get(`/votes?${queryData}`);
}