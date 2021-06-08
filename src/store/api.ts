import axios from 'axios';
import querystring from 'querystring';

// Header 데이터
const DOG_DATA_API_KEY = process.env.DOG_DATA_API_KEY
const headers  = {
  'x-api-key': DOG_DATA_API_KEY
}

// 메인 api 주소
const DOG_DATA_API = 'https://api.thedogapi.com/v1';

// 강아지 정보 호출
export function getDogsDataApi(query) {
    console.log("🚀 ~ api에서 받는 쿼리", query)
    const queryData = querystring.stringify(query);
  return axios.get(`${DOG_DATA_API}/breeds?${queryData}`, headers)
}

// 이미지 타입에 따른 정보 호출
export function getImage(query){
  let queryy = {limit : 50, mime_types: "gif" }
  const queryData = querystring.stringify(queryy);
  return axios.get(`${DOG_DATA_API}/images/search?${queryData}`, headers)
}

// 강아지 상세 정보 호출
export function searchDogDataApi(query){
  const queryData = querystring.stringify(query);
  console.log("🚀 ~ query", query)
  return axios.get(`${DOG_DATA_API}/breeds/search?${queryData}`, headers)
}