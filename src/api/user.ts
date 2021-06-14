import axios from 'axios';

const USER_IP_API = 'https://api.ipify.org?format=json';

export function getUserIp() {
  return axios.get(USER_IP_API);
}
