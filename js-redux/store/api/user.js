import axios from 'axios';

export const getMe = () => {
  return axios.get('/me');
};
