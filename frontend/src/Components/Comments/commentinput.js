import React from 'react'
import { useState,useEffect } from 'react';
import {IoSend} from 'react-icons/io5';
import * as commentActions from "../../store/comments"
import { useDispatch, useSelector } from 'react-redux';
import * as postActions from "../../store/posts"
import "./commentitem.css"

const CommentInput = ({post}) => {
    const [isFocused,setIsFocused] = useState(false);
    const [commentBody,setcommentBody] = useState('');
    const dispatch = useDispatch();
    let isDisabled = commentBody;
    // let postId = post.id
    const userId = useSelector(state => state.session.user.id)
    const handleClick = () => {
        setIsFocused(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(commentActions.createComment({body: commentBody,user_id: userId,post_id: post.id}))
        setIsFocused(false);
        // dispatch(postActions.fetchPost(post.id))
        setcommentBody("");
    }
    return (
        <div className='sendcontainer'>
        <input
            className={!isFocused ? 'commentinput' : 'commentfocused'}
            type="text"
            value={commentBody}
            placeholder='Write a comment'
            onClick={handleClick}
            onChange={(e) => setcommentBody(e.target.value)}
            />
            {isFocused && (
                <div className={(!isDisabled) ? 'comdisabled commentsend' : 'commentsend'} onClick={handleSubmit}>
                    <IoSend/>
                </div>
            )}
        </div>
    )
}

export default CommentInput