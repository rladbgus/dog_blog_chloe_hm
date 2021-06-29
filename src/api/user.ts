import axios from 'axios';

const BASE_URL = 'https://api.ipify.org?format=json';

// 유저 IP 호출
export function getUserIp() {
  return axios.get(BASE_URL);
}
