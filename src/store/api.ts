import axios from 'axios';

// 강아지 정보
const DOG_DATA_API_KEY = process.env.DOG_DATA_API_KEY
const DOG_DATA_API = 'https://api.thedogapi.com/v1/breeds';
const params = {limit : '50'}
const headers = {
  'x-api-key': DOG_DATA_API_KEY
}

export function getDogsDataApi() {
  return axios.get(DOG_DATA_API,{params: params}, headers)
}