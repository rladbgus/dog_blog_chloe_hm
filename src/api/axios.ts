import axios from 'axios';

const baseURL = `https://api.thedogapi.com/v1`;
const DOG_DATA_API_KEY = process.env.NEXT_PUBLIC_DOG_DATA_API_KEY;

// Header Data
export default axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    'x-api-key': DOG_DATA_API_KEY
  }
});
