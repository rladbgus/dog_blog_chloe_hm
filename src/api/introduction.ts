import axios from 'axios';

export function getIntroduction() {
  return axios.get(`/introduction`);
}
