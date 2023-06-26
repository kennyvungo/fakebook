import React from 'react'
import "../PostItem/postitem.css"
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
import CommentLikeNumber from '../Comments/commentlikenumber';
import CommentItem from '../Comments/commentitem';
import profile from '../../assets/profile.jpg'

const PostShowModal = ({post}) => {
    const sessionUser = useSelector(state => state.session.user)
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const[postModal,setPostModal] = useState(true);
    const [isLiked,setisLiked] = useState(false);
    let allComments = post.comments
    allComments ||= [];

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
    }, [showMenu]);


    const handleDelete = () => {
        dispatch(postActions.deletePost(post.id))
    }
    const handleLike = () => {
        setisLiked(!isLiked);
    }
    return (
        <>
        <div className="postbox">
        <div className='postUser'>
        <img className = "profile" src={profile} />
        <div className="postnamewrapper">
            <div className="postname">
            {post.name}
            </div>
            <div className='posttime'>
            {post.time}
            </div>
        </div>
            {sessionUser.id === post.userId && (
            <div className='postdots' onClick={openMenu}>
                <BsThreeDots/>
            </div>
            )}
        </div>
        {showMenu &&(
            <ul className="postdropdown">
                    <ul onClick={() => helperFunc()}>Edit Post</ul>
                    <ul onClick={handleDelete}>Delete Post</ul>
                </ul>
            )}
        <div className='postbody'>
        <div className='posttext'>
            {post.body}
            </div>
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
            <div className='commentico'>
                <GoComment/>
                Comment
            </div>
        </div>
        <CommentInput post = {post}/>
        <div className="commentindex">
            <CommentIndex post={post}/>
        </div>
    </div>
</>
  )
}

export default PostShowModal