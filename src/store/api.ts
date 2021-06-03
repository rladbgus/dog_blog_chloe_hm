import axios from 'axios';

// 강아지 정보
const DOG_DATA_API = 'https://api.thedogapi.com/v1/breeds';

export function getDogsDataApi() {
  return axios.get(
    DOG_DATA_API
  );
}

// const API = {
//       key: '062f94b6879d4a4a64755999bee3a513',
//       base: 'https://api.openweathermap.org/data/2.5/'
//     };
    
//     export function getWeatherApi() {
//           return axios.get(`${API.base}weather?q=Seoul&units=metric&APPID=${API.key}`);
//         }
    
