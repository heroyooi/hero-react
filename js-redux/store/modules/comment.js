import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import utils from '@utils';
import * as api from '@store/api/comment';

const { createPromiseThunk, reducerUtils } = utils;

const initialState = {
  comments: reducerUtils.initial(),
  postComment: reducerUtils.initial(),
  deleteComment: reducerUtils.initial(),
  editComment: reducerUtils.initial(),
};

const GET_COMMENTS = 'GET_COMMENTS';
const GET_COMMENTS_PENDING = 'GET_COMMENTS_PENDING';
const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS';
const GET_COMMENTS_ERROR = 'GET_COMMENTS_ERROR';

const POST_COMMENT = 'POST_COMMENT';
const POST_COMMENT_PENDING = 'POST_COMMENT_PENDING';
const POST_COMMENT_SUCCESS = 'POST_COMMENT_SUCCESS';
const POST_COMMENT_ERROR = 'POST_COMMENT_ERROR';

const DELETE_COMMENT = 'DELETE_COMMENT';
const DELETE_COMMENT_PENDING = 'DELETE_COMMENT_PENDING';
const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS';
const DELETE_COMMENT_ERROR = 'DELETE_COMMENT_ERROR';

const EDIT_COMMENT = 'EDIT_COMMENT';
const EDIT_COMMENT_PENDING = 'EDIT_COMMENT_PENDING';
const EDIT_COMMENT_SUCCESS = 'EDIT_COMMENT_SUCCESS';
const EDIT_COMMENT_ERROR = 'EDIT_COMMENT_ERROR';

const EDIT_MODE_COMMENT = 'EDIT_MODE_COMMENT';

export const getComments = createPromiseThunk(GET_COMMENTS, api.getComments);
export const postComment = createPromiseThunk(POST_COMMENT, api.postComment);
export const deleteComment = createPromiseThunk(DELETE_COMMENT, api.deleteComment);
export const editComment = createPromiseThunk(EDIT_COMMENT, api.editComment);

export const deleteCommentReq = (id) => createPromiseThunk(DELETE_COMMENT, api.deleteComment, { id });

export const editModeComment = createAction(EDIT_MODE_COMMENT);

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
        draft.comments.data.map((comment) => {
          comment['editMode'] = false;
        });
      });
    },
    [GET_COMMENTS_ERROR]: (state, action) => {
      return produce(state, (draft) => {
        draft.comments = reducerUtils.error(action.error);
      });
    },

    [POST_COMMENT_PENDING]: (state, action) => {
      return produce(state, (draft) => {
        draft.postComment = reducerUtils.loading();
      });
    },
    [POST_COMMENT_SUCCESS]: (state, action) => {
      return produce(state, (draft) => {
        draft.postComment = reducerUtils.success(action.payload);
        draft.comments.data.unshift(action.payload);
      });
    },
    [POST_COMMENT_ERROR]: (state, action) => {
      return produce(state, (draft) => {
        draft.postComment = reducerUtils.error(action.error);
      });
    },

    [DELETE_COMMENT_PENDING]: (state, action) => {
      return produce(state, (draft) => {
        draft.deleteComment = reducerUtils.loading();
      });
    },
    [DELETE_COMMENT_SUCCESS]: (state, action) => {
      return produce(state, (draft) => {
        // draft.comments.data = draft.comments.data.filter((item) => item.id !== action.reqInfo.id);
        const index = draft.comments.data.findIndex((item) => item.id === action.reqInfo.id);
        draft.comments.data.splice(index, 1);
      });
    },
    [DELETE_COMMENT_ERROR]: (state, action) => {
      return produce(state, (draft) => {
        draft.deleteComment = reducerUtils.error(action.error);
      });
    },

    [EDIT_MODE_COMMENT]: (state, action) => {
      return produce(state, (draft) => {
        const id = draft.comments.data.findIndex((item) => item.id === action.payload);
        draft.comments.data.forEach((comment, index) => {
          draft.comments.data[index].editMode = index === id;
        });
      });
    },

    [EDIT_COMMENT_PENDING]: (state, action) => {
      return produce(state, (draft) => {
        draft.editComment = reducerUtils.loading();
      });
    },
    [EDIT_COMMENT_SUCCESS]: (state, action) => {
      return produce(state, (draft) => {
        const index = draft.comments.data.findIndex((item) => item.id === action.payload.id);
        draft.comments.data[index].desc = action.payload.desc;
        draft.comments.data[index].date = action.payload.date;
      });
    },
    [EDIT_COMMENT_ERROR]: (state, action) => {
      return produce(state, (draft) => {
        draft.editComment = reducerUtils.error(action.error);
      });
    },
  },
  initialState,
);
