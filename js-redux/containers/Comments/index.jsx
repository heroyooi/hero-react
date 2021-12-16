import React, { useCallback, useEffect } from 'react';
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

  const onSubmit = useCallback(() => {
    dispatch(
      commentActions.postComment({
        id: uuidv4(),
        desc: textareaValue,
        author: me.data.name,
        date: Date.now(),
      }),
    );
    // .then((res) => {
    //   console.log(res);
    //   setTextareaValue('');
    // });
  }, [textareaValue]);

  useEffect(() => {
    dispatch(commentActions.getComments());
  }, []);

  useEffect(() => {
    console.log('comments ::: ', comments);
  }, [comments]);

  return (
    <CommentWrap>
      {!comments.data ? (
        <Loading text="LOADING COMMENTS" />
      ) : (
        <ul>
          {comments.data.map((comment, index) => (
            <li key={index}>
              <span className="desc">- {comment.desc}</span>
              <span className="author">{comment.author}</span>
            </li>
          ))}
        </ul>
      )}
      <textarea value={textareaValue} onChange={onChangeTextarea}></textarea>
      <button onClick={onSubmit}>전송</button>
    </CommentWrap>
  );
};

export default Comments;
