import axios from 'axios';

const baseURL = `https://api.thedogapi.com/v1`;
//환경변수 처리하기 (브라우저와 노드 환경 다름)
// const DOG_DATA_API_KEY = process.env.NEXT_PUBLIC_DOG_DATA_API_KEY;
const DOG_DATA_API_KEY = 'b5b7f00c-d21d-4457-b750-857d73dd4410';

// Header 데이터
export default axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    'x-api-key': DOG_DATA_API_KEY
  }
});
