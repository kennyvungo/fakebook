import React from 'react'
import "./commentitem.css"
import { useState,useEffect } from 'react';
import {useSelector } from 'react-redux';
import { fetchComments } from '../../store/comments';
import { useDispatch } from 'react-redux';
import profile from '../../assets/profile.jpg'
import * as likeActions from "../../store/likes"
import likeico from "../../assets/likeico.png"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const CommentItem = ({com}) => {
  const sessionUser = useSelector(state => state.session.user)
  const dispatch = useDispatch();
  let comLikes = useSelector(likeActions.getCommentLikes(com.id,sessionUser.id))
  let likeId = comLikes.find((like) => like.userId === sessionUser.id)
  const [isLiked,setisLiked] = useState(likeId);
  const history = useHistory();
  const handleShow = () => {
    history.push(`/users/${com.userId}`)
}
  const handleLike = () => {
    if(isLiked){
      setisLiked(false)
      dispatch(likeActions.deleteLike(likeId.id))
      dispatch(fetchComments())
    }
    else{
      setisLiked(true)
      dispatch(likeActions.createLike({userId: sessionUser.id,likeableId: com.id, likeableType: "Comment"}))
      // dispatch(fetchComments())
    }
  }
  return (
    <div className='commentitemwrapwrapper'>
    <div className='commentitemwrapper'>
      <img  onClick={handleShow} className = "smallprofile" src={com.avatarUrl} />
      <div className="commwrapper">

      <div className="commentitem">
      
        <div onClick={handleShow} className='comname'> {com.name}</div>
        <div>{com.body}</div>
      </div>
      <div className={isLiked ? "comlikebutton comlikeblue" : "comlikebutton" }onClick={handleLike}> <div className='likeword'>
        
        Like
        </div>
        
        <div className={com.numLikes > 0 ? 'comlikeico' : 'comlikeico hidden'}>
        <img className='bluelikeico' src={likeico}/>
        {com.numLikes}
        </div>
      </div>
      </div>
    </div>
        {/* <div className={isLiked ? "comlikebutton comlikeblue" : "comlikebutton" }onClick={handleLike}> Like
        
          <div className={com.numLikes > 0 ? 'comlikeico' : 'comlikeico hidden'}>
          <img className='bluelikeico' src={likeico}/>
          {com.numLikes}
          </div>
        </div> */}
    

    </div>
  )
}

export default CommentItem