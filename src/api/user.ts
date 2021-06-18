import axios from 'axios';

const USER_BASE_URL = 'https://api.ipify.org?format=json';

export function getUserIp() {
  return axios.get(USER_BASE_URL);
}
