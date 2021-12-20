import axios from 'axios';
import { delay } from '@utils/asyncUtils';

export const getPosts = async () => {
  try {
    const res = await axios.get('/posts');
    await delay(300);
    return res.data;
  } catch (err) {
    console.error(err.message);
  }
};

export const getPost = async (params) => {
  try {
    const res = await axios.get(`/posts/${params}`);
    await delay(300);
    return res.data;
  } catch (err) {
    console.error(err.message);
  }
};
