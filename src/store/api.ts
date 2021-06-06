import axios from 'axios';
import querystring from 'querystring';

// 강아지 정보 호출
const DOG_DATA_API_KEY = process.env.DOG_DATA_API_KEY
const DOG_DATA_API = 'https://api.thedogapi.com/v1/breeds';
const headers  = {
  'x-api-key': DOG_DATA_API_KEY
}


export function getDogsDataApi(query) {
  const queryData = querystring.stringify(query);
  return axios.get(`${DOG_DATA_API}?${queryData}`, headers)
}
