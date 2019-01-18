import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-gp-burger.firebaseio.com/'
});

export default instance;