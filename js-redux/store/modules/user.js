import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import utils from '@utils';
import * as api from '@store/api/user';

const initialState = {
  meLoading: false,
  meDone: false,
  meError: false,
  me: null,
};

const GET_ME = 'GET_ME';
const GET_ME_PENDING = 'GET_ME_PENDING';
const GET_ME_SUCCESS = 'GET_ME_SUCCESS';
const GET_ME_FAILURE = 'GET_ME_FAILURE';

export const getMe = utils.createPromiseThunk(GET_ME, api.getMe);

export default handleActions(
  {
    [GET_ME_PENDING]: (state, action) => {
      return produce(state, (draft) => {
        draft.meLoading = true;
        draft.meDone = false;
        draft.meError = null;
      });
    },
    [GET_ME_SUCCESS]: (state, action) => {
      return produce(state, (draft) => {
        draft.meLoading = false;
        draft.meDone = true;
        draft.me = action.payload;
      });
    },
    [GET_ME_FAILURE]: (state, action) => {
      return produce(state, (draft) => {
        draft.meLoading = false;
        draft.meDone = false;
        draft.meError = action.payload;
      });
    },
  },
  initialState,
);
