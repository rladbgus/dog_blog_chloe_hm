// import axios from 'axios';
// import querystring from 'querystring';

// // Header 데이터

// //환경변수 처리하기 (브라우저와 노드 환경 다름)
// // const DOG_DATA_API_KEY = process.env.NEXT_PUBLIC_DOG_DATA_API_KEY;
// const DOG_DATA_API_KEY = 'b5b7f00c-d21d-4457-b750-857d73dd4410';
// const headers = {
//   headers: {
//     'x-api-key': DOG_DATA_API_KEY
//   }
// };

// // 메인 api 주소
// const DOG_DATA_API = 'https://api.thedogapi.com/v1/images';

// // 이미지 등록
// export function postImage(formData: any) {
//   return axios.post(`${DOG_DATA_API}/upload`, formData, headers);
// }

// // 등록한 이미지 호출
// export function getUploadImage() {
//   const query = { limit: 50 };
//   const queryData = querystring.stringify(query);
//   return axios.get(`${DOG_DATA_API}?${queryData}`, headers);
// }

// // 이미지 삭제
// export function deleteUploadImage(query: any) {
//   return axios.delete(`${DOG_DATA_API}/${query}`, headers);
// }

// // 이미지 분석
// export function analysisImage(query: any) {
//   return axios.get(`${DOG_DATA_API}/${query}/analysis`);
// }
