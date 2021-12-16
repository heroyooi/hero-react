import axios from 'axios';
import utils from '@utils';

export const getPosts = async () => {
  try {
    const res = await axios.get('/posts');
    await utils.delay(500);
    return res.data;
  } catch (err) {
    console.error(err.message);
  }
};

export const getPost = async (param) => {
  try {
    const res = await axios.get(`/posts/${param}`);
    await utils.delay(500);
    return res.data;
  } catch (err) {
    console.error(err.message);
  }
};
