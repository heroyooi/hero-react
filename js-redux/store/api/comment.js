import axios from 'axios';
import { delay } from '@utils/asyncUtils';

export const getComments = async (params) => {
  try {
    const res = await axios.get('/comments', { params });
    await delay(300);
    return res.data;
  } catch (err) {
    console.error(err.message);
  }
};

export const postComment = async (params) => {
  try {
    const res = await axios.post('/comments', params);
    return res.data;
  } catch (err) {
    console.error(err.message);
  }
};

export const deleteComment = async (param) => {
  try {
    await axios.delete(`/comments/${param}`);
    return param;
  } catch (err) {
    console.error(err.message);
  }
};

export const editComment = async (params) => {
  try {
    await axios.patch(`/comments/${params.id}`, {
      id: params.id,
      desc: params.desc,
      date: params.date,
    });
    return params;
  } catch (err) {
    console.error(err.message);
  }
};
