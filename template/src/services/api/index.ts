import axios from 'axios';
import {API_URL} from 'react-native-dotenv';

const client = axios.create({
  baseURL: API_URL,
  responseType: 'json',
});

export default client;
