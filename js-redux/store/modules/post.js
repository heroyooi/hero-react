import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { createPromiseThunk, reducerUtils } from '@utils/asyncUtils';
import * as api from '@store/api/post';

const initialState = {
  post: reducerUtils.initial(),
  posts: reducerUtils.initial(),
};

const GET_POSTS = 'GET_POSTS';
const GET_POSTS_PENDING = 'GET_POSTS_PENDING';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

const INIT_POST = 'INIT_POST';

const GET_POST = 'GET_POST';
const GET_POST_PENDING = 'GET_POST_PENDING';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';

export const initPost = createAction(INIT_POST);
export const getPosts = createPromiseThunk(GET_POSTS, api.getPosts);
export const getPost = createPromiseThunk(GET_POST, api.getPost);

export default handleActions(
  {
    [INIT_POST]: (state, aciton) => {
      return produce(state, (draft) => {
        draft.post = reducerUtils.initial();
      });
    },
    [GET_POST_PENDING]: (state, action) => {
      return produce(state, (draft) => {
        draft.post = reducerUtils.loading();
      });
    },
    [GET_POST_SUCCESS]: (state, action) => {
      return produce(state, (draft) => {
        draft.post = reducerUtils.success(action.payload);
      });
    },
    [GET_POST_ERROR]: (state, action) => {
      return produce(state, (draft) => {
        draft.post = reducerUtils.error(action.error);
      });
    },

    [GET_POSTS_PENDING]: (state, action) => {
      return produce(state, (draft) => {
        draft.posts = reducerUtils.loading();
      });
    },
    [GET_POSTS_SUCCESS]: (state, action) => {
      return produce(state, (draft) => {
        draft.posts = reducerUtils.success(action.payload);
      });
    },
    [GET_POSTS_ERROR]: (state, action) => {
      return produce(state, (draft) => {
        draft.posts = reducerUtils.error(action.error);
      });
    },
  },
  initialState,
);
