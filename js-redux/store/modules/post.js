import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import utils from '@utils';
import * as api from '@store/api/post';

const initialState = {
  post: null,
  postLoading: false,
  postDone: false,
  postError: null,

  posts: [],
  postsLoading: false,
  postsDone: false,
  postsError: null,
};

const GET_POSTS = 'GET_POSTS';
const GET_POSTS_PENDING = 'GET_POSTS_PENDING';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';

const INIT_POST = 'INIT_POST';

const GET_POST = 'GET_POST';
const GET_POST_PENDING = 'GET_POST_PENDING';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_FAILURE = 'GET_POST_FAILURE';

export const initPost = createAction(INIT_POST);
export const getPosts = utils.createPromiseThunk(GET_POSTS, api.getPosts);
export const getPost = utils.createPromiseThunk(GET_POST, api.getPost);

export default handleActions(
  {
    [INIT_POST]: (state, aciton) => {
      return produce(state, (draft) => {
        draft.post = null;
        draft.postLoading = false;
        draft.postDone = false;
        draft.postError = null;
      });
    },
    [GET_POSTS_PENDING]: (state, action) => {
      return produce(state, (draft) => {
        draft.postsLoading = true;
        draft.postsDone = false;
        draft.postsError = null;
      });
    },
    [GET_POSTS_SUCCESS]: (state, action) => {
      return produce(state, (draft) => {
        draft.postsLoading = false;
        draft.postsDone = true;
        draft.posts = action.payload;
      });
    },
    [GET_POSTS_FAILURE]: (state, action) => {
      return produce(state, (draft) => {
        draft.postsLoading = false;
        draft.postsDone = false;
        draft.postsError = action.payload;
      });
    },

    [GET_POST_PENDING]: (state, action) => {
      return produce(state, (draft) => {
        draft.postLoading = true;
        draft.postDone = false;
        draft.postError = null;
      });
    },
    [GET_POST_SUCCESS]: (state, action) => {
      return produce(state, (draft) => {
        draft.postLoading = false;
        draft.postDone = true;
        draft.post = action.payload;
      });
    },
    [GET_POST_FAILURE]: (state, action) => {
      return produce(state, (draft) => {
        draft.postLoading = false;
        draft.postDone = false;
        draft.postError = action.payload;
      });
    },
  },
  initialState,
);
