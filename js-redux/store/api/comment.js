import axios from 'axios';
import { delay } from '@utils/asyncUtils';

export const getComments = async () => {
  try {
    const res = await axios.get('/comments?_sort=date&_order=DESC');
    await delay(300);
    return res.data;
  } catch (err) {
    console.error(err.message);
  }
};

export const postComment = async (param) => {
  try {
    const res = await axios.post('/comments', param);
    return res.data;
  } catch (err) {
    console.error(err.message);
  }
};
