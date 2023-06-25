import React from 'react'
import "./commentitem.css"
import { useState,useEffect } from 'react';
import {useSelector } from 'react-redux';
import { fetchComments } from '../../store/comments';
import { useDispatch } from 'react-redux';
import profile from '../../assets/profile.jpg'
import * as likeActions from "../../store/likes"


const CommentItem = ({com}) => {
  const sessionUser = useSelector(state => state.session.user)
  const dispatch = useDispatch();
  const [isLiked,setisLiked] = useState(false);
  let comLikes = useSelector(likeActions.getCommentLikes(com.id,sessionUser.id))
  let likeId = comLikes.find((like) => like.userId === sessionUser.id)
  const handleLike = () => {
    if(isLiked){
      setisLiked(false)
      dispatch(likeActions.deleteLike(likeId.id))
      dispatch(fetchComments())
    }
    else{
      setisLiked(true)
      dispatch(likeActions.createLike({userId: sessionUser.id,likeableId: com.id, likeableType: "Comment"}))
    }
  }
  return (
    <div className='commentitemwrapwrapper'>
    <div className='commentitemwrapper'>
      <img className = "smallprofile" src={profile} />
      <div className="commentitem">
      
        <div className='comname'> {com.name}</div>
        <div>{com.body}</div>
      </div>
        <div onClick={handleLike}> Like</div>
        {com.numLikes}
    </div>
    {/* <div className='comlikebutton'>Like</div> */}
    </div>
  )
}

export default CommentItem