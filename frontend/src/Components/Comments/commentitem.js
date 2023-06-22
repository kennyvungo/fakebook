import React from 'react'
import "./commentitem.css"
import { useEffect } from 'react';
import { fetchComments } from '../../store/comments';
import { useDispatch } from 'react-redux';

const CommentItem = ({com}) => {
  const dispatch = useDispatch();
  let writer = com.author;
  useEffect(() =>{
    dispatch(fetchComments())
  },[dispatch,com])
  
  return (
    <div className="commentitem">
    {/* <div>{writer.first_name}</div> */}
    <div>{com.body}</div>
    </div>
  )
}

export default CommentItem