import axios from 'axios';
import utils from '@utils';

export const getPosts = () => {
  return axios.get('/posts');
};

export const getPost = (params) => {
  return axios.get(`/posts/${params}`);
};
