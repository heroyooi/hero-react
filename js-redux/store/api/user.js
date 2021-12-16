import axios from 'axios';
import { delay } from '@utils/asyncUtils';

export const getMe = async () => {
  try {
    const res = await axios.get('/me');
    await delay(300);
    return res.data;
  } catch (err) {
    console.error(err.message);
  }
};
