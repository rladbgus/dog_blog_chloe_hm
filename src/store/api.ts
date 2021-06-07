import axios from 'axios';
import querystring from 'querystring';

// Header 데이터
const DOG_DATA_API_KEY = process.env.DOG_DATA_API_KEY
const headers  = {
  'x-api-key': DOG_DATA_API_KEY
}

// 강아지 정보 호출
const DOG_DATA_API = 'https://api.thedogapi.com/v1/breeds';

export function getDogsDataApi(query) {
    const queryData = querystring.stringify(query);
  return axios.get(`${DOG_DATA_API}?${queryData}`, headers)
}

// 이미지 타입에 따른 정보 호출
//  const TYPE_DOG_DATA_API = "https://api.thedogapi.com/images/search"

// export function getImage(query){
//   let queryy = {limit : 50, mime_types: "gif" }
//   const queryData = querystring.stringify(queryy);
//   return axios.get(`${TYPE_DOG_DATA_API}?${queryData}`, headers)
// }