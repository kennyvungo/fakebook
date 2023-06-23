import React from 'react'
import "./commentitem.css"
import { useEffect } from 'react';
import { fetchComments } from '../../store/comments';
import { useDispatch } from 'react-redux';
import profile from '../../assets/profile.jpg'

const CommentItem = ({com}) => {
  const dispatch = useDispatch();
  
  return (
    <div className='commentitemwrapper'>
      <img className = "smallprofile" src={profile} />
      <div className="commentitem">
      
        <div className='comname'> {com.name}</div>
        <div>{com.body}</div>
      </div>
    </div>
  )
}

export default CommentItem