import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '@components/Loading';
import * as commentActions from '@store/modules/comment';
import useInput from '@hooks/useInput';
import { CommentWrap } from './styles';
import { v4 as uuidv4 } from 'uuid';

const Comments = () => {
  const dispatch = useDispatch();

  const { me } = useSelector((state) => state.user);
  const { comments } = useSelector((state) => state.comment);

  const [textareaValue, onChangeTextarea, setTextareaValue] = useInput('');

  const [order, setOrder] = useState('DESC');
  const [limit, setLimit] = useState(10);

  const [editDesc, onChangeEditDesc, setEditDesc] = useInput('');

  const onSubmit = useCallback(() => {
    dispatch(
      commentActions.postComment({
        id: uuidv4(),
        desc: textareaValue,
        author: me.data.name,
        userId: me.data.id,
        date: Date.now(),
      }),
    ).then((res) => {
      console.log(res);
      setTextareaValue('');
    });
  }, [textareaValue]);

  const onToggleEditMode = useCallback(
    (id) => () => {
      dispatch(commentActions.editModeComment(id));
      const index = comments.data.findIndex((comment) => comment.id === id);
      setEditDesc(comments.data[index].desc);
    },
    [comments],
  );

  const onEditComment = useCallback(
    (id) => () => {
      dispatch(commentActions.editComment({ id, desc: editDesc, date: Date.now() }));
      dispatch(commentActions.editModeComment(id));
    },
    [editDesc],
  );

  const onDeleteComment = useCallback(
    (id) => () => {
      dispatch(commentActions.deleteCommentReq(id)(id));
    },
    [],
  );

  const onChangeOrder = useCallback(
    (type) => (e) => {
      e.preventDefault();
      setOrder(type);
    },
    [],
  );

  useEffect(() => {
    const params = {
      _sort: 'date',
      _order: order,
    };
    dispatch(commentActions.getComments(params));
  }, [order]);

  useEffect(() => {
    setTextareaValue('');
  }, [comments]);

  return (
    <CommentWrap>
      <div className="filter">
        <a className={order === 'DESC' ? 'on' : null} href="#" onClick={onChangeOrder('DESC')}>
          최신순
        </a>
        <a className={order === 'ASC' ? 'on' : null} href="#" onClick={onChangeOrder('ASC')}>
          오래된 순
        </a>
      </div>
      <div className="comment-list">
        {!comments.data ? (
          <Loading text="LOADING COMMENTS" />
        ) : (
          <ul>
            {comments.data.map((comment, index) => (
              <li key={index}>
                {!comment.editMode ? (
                  <>
                    <span className="desc">- {comment.desc}</span>
                    <div className="right-area">
                      <span className="author">{comment.author}</span>
                      {comment.userId === me.data?.id && (
                        <div className="btns">
                          <button onClick={onToggleEditMode(comment.id)}>수정</button>
                          <button onClick={onDeleteComment(comment.id)}>삭제</button>
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <input type="text" value={editDesc} onChange={onChangeEditDesc} />
                    <div className="right-area">
                      <div className="btns">
                        <button onClick={onEditComment(comment.id)}>수정</button>
                        <button onClick={onToggleEditMode(comment.id)}>취소</button>
                      </div>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
      <textarea value={textareaValue} onChange={onChangeTextarea}></textarea>
      <button onClick={onSubmit}>전송</button>
    </CommentWrap>
  );
};

export default Comments;
