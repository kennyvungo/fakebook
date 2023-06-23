import React from 'react'
import "./postitem.css"
import {useSelector } from 'react-redux';
import { BiLike} from 'react-icons/bi'
import {GoComment} from'react-icons/go'
import {BsThreeDots} from 'react-icons/bs'
import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Modal from '../../context/Modal';
import CommentIndex from '../Comments/commentindex';
import CommentInput from '../Comments/commentinput';
import * as postActions from "../../store/posts"
import EditPostModal from './editpostmodal';
import CommentLikeNumber from '../Comments/commentlikenumber';
import CommentItem from '../Comments/commentitem';
import PostShowModal from '../PostShow/postshowmodal';
import * as commentActions from "../../store/comments"

const PostItem = ({post}) => {
    const sessionUser = useSelector(state => state.session.user)
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [isLiked,setisLiked] = useState(false);
    const [postModal,setPostModal] = useState(false);
    let allComments = useSelector(commentActions.getPostComments(post.id))
    let firstCom = allComments[0]

    const helperFunc = () => {
        setShowModal(true)
    }
    
    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    }; 

    useEffect(() => {
        if (!showMenu) return;
        
        const closeMenu = () => {
            setShowMenu(false);
        };
        document.addEventListener('click', closeMenu);
        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu,allComments]);


    const handleDelete = () => {
        dispatch(postActions.deletePost(post.id))
    }
    const handleLike = () => {
        setisLiked(!isLiked);
    }
    const handleComment = () => {
        setPostModal(true)
    }
    return (
        <>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <EditPostModal setShowModal={setShowModal} post={post}/>
            </Modal>
            )}
            {postModal &&(
                <Modal onClose={() => setPostModal(false)}>
                    <div className='postshowmodal'>
                    <PostShowModal post={post}/>
                    </div>
                </Modal>
            )}
            <div className="postbox">
        <div className='postUser'>
            {sessionUser.firstName}
            {sessionUser.lastName}
            <div className='postdots' onClick={openMenu}>
                <BsThreeDots/>
            </div>
        </div>
        {showMenu &&(
            <ul className="postdropdown">
                    <ul onClick={() => helperFunc()}>Edit Post</ul>
                    <ul onClick={handleDelete}>Delete Post</ul>
                </ul>
            )}
        <div className='postbody'>
        {post.body}
        {post.photoUrl && (
            <img className='postphoto' src={post.photoUrl} alt=""/>
        )}
        </div>
        <div>
            <CommentLikeNumber post={post} setPostModal={setPostModal}/>
        </div>
        <div className ='postbar'>
            <div onClick = {handleLike} className={isLiked ? 'likedico' : 'likeico'}>
            <BiLike/>
            Like
            </div>
            <div className='commentico' onClick={handleComment}>
                <GoComment/>
                Comment
            </div>
        </div>
        <CommentInput post = {post}/>
        <div>
            {(allComments.length > 0) &&
            <CommentItem com ={firstCom}/> }
            {}
        </div>
    </div>
</>
  )
}

export default PostItem