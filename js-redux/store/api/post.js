import axios from 'axios';
import utils from '@utils';

export const getPosts = async () => {
  try {
    const res = await axios.get('/posts');
    await utils.delay(300);
    return res.data;
  } catch (err) {
    console.error(err.message);
  }
};

export const getPost = async (params) => {
  try {
    const res = await axios.get(`/posts/${params}`);
    await utils.delay(300);
    return res.data;
  } catch (err) {
    console.error(err.message);
  }
};
