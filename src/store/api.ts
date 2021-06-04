import axios from 'axios';

// 강아지 정보
const DOG_DATA_API = 'https://api.thedogapi.com/v1/breeds';
const params = {limit : '50'}
const headers = {
  'x-api-key': 'b5b7f00c-d21d-4457-b750-857d73dd4410'
}

export function getDogsDataApi() {
  return axios.get(DOG_DATA_API,{params: params}, headers)
}