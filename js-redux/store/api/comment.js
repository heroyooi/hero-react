import axios from 'axios';
import utils from '@utils';

export const getComments = (params) => {
  return axios.get('/comments', { params });
};

export const postComment = (params) => {
  return axios.post('/comments', params);
};

export const deleteComment = (param) => {
  return axios.delete(`/comments/${param}`);
};

export const editComment = (params) => {
  return axios.patch(`/comments/${params.id}`, {
    id: params.id,
    desc: params.desc,
    date: params.date,
  });
};
