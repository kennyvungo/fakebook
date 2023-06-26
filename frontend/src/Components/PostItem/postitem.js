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
import profile from '../../assets/profile.jpg'
import * as likeActions from "../../store/likes"
import { getUser } from '../../store/users';

const PostItem = ({post}) => {
    const sessionUser = useSelector(state => state.session.user)
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [postModal,setPostModal] = useState(false);
    let allComments = useSelector(commentActions.getPostComments(post.id))
    let postLikes = useSelector(likeActions.getPostLikes(post.id,sessionUser.id))
    let likeId = postLikes.find((like) => like.userId === sessionUser.id)

    const [isLiked,setisLiked] = useState(likeId);
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
        if(isLiked){
            setisLiked(false);
            dispatch(likeActions.deleteLike(likeId.id))
            dispatch(postActions.fetchPosts())
        }
        else{
            setisLiked(true)
            dispatch(likeActions.createLike({userId: sessionUser.id,likeableId: post.id, likeableType: "Post"}))
        }
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
                    <PostShowModal post={post} isLiked={isLiked}/>
                    </div>
                </Modal>
            )}
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
            <div className='commentico' onClick={handleComment}>
                <GoComment/>
                Comment
            </div>
        </div>
        <CommentInput post = {post}/>
        <div>
            {(allComments.length > 0) &&
            <CommentItem com ={firstCom}/> }
             {(allComments.length > 1) &&
            <div className='viewmore' onClick={() => setPostModal(true)}> View more comments </div>}
        </div>
    </div>
</>
  )
}

export default PostItem