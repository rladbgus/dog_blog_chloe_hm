import axios from 'api/axios';
import Axios from 'axios';
import querystring from 'querystring';

// 이미지 등록
export function postImage(formData: object, options: object) {
  return axios.post(`/images/upload`, formData, options);
}

// 등록한 이미지 호출
export function getUploadImage() {
  const query = { limit: 50 };
  const queryData = querystring.stringify(query);
  return axios.get(`/images?${queryData}`);
}

// 이미지 삭제
export function deleteUploadImage(query: string) {
  return axios.delete(`/images/${query}`);
}

// 이미지 업로드 노티스
export function postNotice() {
  return Axios.post('/notice');
}
