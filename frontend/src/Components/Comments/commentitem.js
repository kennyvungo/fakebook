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
import {BsThreeDots} from 'react-icons/bs'
import { deleteComment } from '../../store/comments';
import { fetchPosts, receivePost } from '../../store/posts';
import EditCommentModal from './editcommentmodal';
import Modal from '../../context/Modal';
const CommentItem = ({com}) => {
  const sessionUser = useSelector(state => state.session.user)
  const dispatch = useDispatch();
  let comLikes = useSelector(likeActions.getCommentLikes(com.id,sessionUser.id))
  let likeId = comLikes.find((like) => like.userId === sessionUser.id)
  const [isLiked,setisLiked] = useState(likeId);
  const [showDots,setshowDots] = useState(com.userId === sessionUser.id)
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();
  const handleShow = () => {
    history.push(`/users/${com.userId}`)
}
useEffect(() => {
  if (!showMenu) return;
  
  const closeMenu = () => {
      setShowMenu(false);
  };
  document.addEventListener('click', closeMenu);
  return () => document.removeEventListener("click", closeMenu);
}, [showMenu]);
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
  const handleDelete = () => {
    let postId = com.postId
    dispatch(deleteComment(com.id))
    dispatch(fetchPosts())
  }
  const helperFunc = () => {
    console.log("kennnnnnny")
    setShowModal(true)
}

const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
}; 
  return (
    <>
    {showModal && (
      <Modal onClose={() => setShowModal(false)}>
          <EditCommentModal setShowModal={setShowModal} com={com}/>
      </Modal>
      )}
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
    {showDots &&
      <div onClick={openMenu}>
      <BsThreeDots />
      </div>
      }
    </div>
        {/* <div className={isLiked ? "comlikebutton comlikeblue" : "comlikebutton" }onClick={handleLike}> Like
        
        <div className={com.numLikes > 0 ? 'comlikeico' : 'comlikeico hidden'}>
        <img className='bluelikeico' src={likeico}/>
        {com.numLikes}
        </div>
      </div> */}
    
      {showMenu &&(
        <ul className="comdropdown">
                    <ul onClick={() => helperFunc()}>Edit Comment </ul>
                    <ul onClick={handleDelete}>Delete Comment</ul>
                </ul>
            )}
    </div>
    </>
  )
}

export default CommentItem