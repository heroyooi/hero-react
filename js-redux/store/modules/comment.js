import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { createPromiseThunk, reducerUtils } from '@utils/asyncUtils';
import * as api from '@store/api/comment';

const initialState = {
  comments: reducerUtils.initial(),
  comment: reducerUtils.initial(),
};

const GET_COMMENTS = 'GET_COMMENTS';
const GET_COMMENTS_PENDING = 'GET_COMMENTS_PENDING';
const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS';
const GET_COMMENTS_ERROR = 'GET_COMMENTS_ERROR';

const POST_COMMENT = 'POST_COMMENT';
const POST_COMMENT_PENDING = 'POST_COMMENT_PENDING';
const POST_COMMENT_SUCCESS = 'POST_COMMENT_SUCCESS';
const POST_COMMENT_ERROR = 'POST_COMMENT_ERROR';

export const getComments = createPromiseThunk(GET_COMMENTS, api.getComments);
export const postComment = createPromiseThunk(POST_COMMENT, api.postComment);

export default handleActions(
  {
    [GET_COMMENTS_PENDING]: (state, action) => {
      return produce(state, (draft) => {
        draft.comments = reducerUtils.loading();
      });
    },
    [GET_COMMENTS_SUCCESS]: (state, action) => {
      return produce(state, (draft) => {
        draft.comments = reducerUtils.success(action.payload);
      });
    },
    [GET_COMMENTS_ERROR]: (state, action) => {
      return produce(state, (draft) => {
        draft.comments = reducerUtils.error(action.error);
      });
    },

    [POST_COMMENT_PENDING]: (state, action) => {
      return produce(state, (draft) => {
        draft.comment = reducerUtils.loading();
      });
    },
    [POST_COMMENT_SUCCESS]: (state, action) => {
      return produce(state, (draft) => {
        draft.comment = reducerUtils.success(action.payload);
        draft.comments.data.unshift(action.payload);
      });
    },
    [POST_COMMENT_ERROR]: (state, action) => {
      return produce(state, (draft) => {
        draft.comment = reducerUtils.error(action.error);
      });
    },
  },
  initialState,
);
