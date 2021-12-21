import axios from 'axios';
import utils from '@utils';

export const getMe = async () => {
  try {
    const res = await axios.get('/me');
    // await utils.delay(300);
    return res.data;
  } catch (err) {
    console.error(err.message);
  }
};
