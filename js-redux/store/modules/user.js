import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { createPromiseThunk, reducerUtils } from '@utils/asyncUtils';
import * as api from '@store/api/user';

const initialState = {
  me: reducerUtils.initial(),
};

const GET_ME = 'GET_ME';
const GET_ME_PENDING = 'GET_ME_PENDING';
const GET_ME_SUCCESS = 'GET_ME_SUCCESS';
const GET_ME_ERROR = 'GET_ME_ERROR';

export const getMe = createPromiseThunk(GET_ME, api.getMe);

export default handleActions(
  {
    [GET_ME_PENDING]: (state, action) => {
      return produce(state, (draft) => {
        draft.me = reducerUtils.loading();
      });
    },
    [GET_ME_SUCCESS]: (state, action) => {
      return produce(state, (draft) => {
        draft.me = reducerUtils.success(action.payload);
      });
    },
    [GET_ME_ERROR]: (state, action) => {
      return produce(state, (draft) => {
        draft.me = reducerUtils.error(action.error);
      });
    },
  },
  initialState,
);
