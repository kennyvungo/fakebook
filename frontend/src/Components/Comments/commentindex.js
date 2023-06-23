import React from 'react'
import { useState,useEffect } from 'react'
import { getComments } from '../../store/comments'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import CommentItem from './commentitem'
import { fetchPosts } from '../../store/posts'
import * as commentActions from "../../store/comments"
const CommentIndex = ({post}) => {
    const dispatch = useDispatch();
    let allComments = useSelector(commentActions.getPostComments(post.id))
    console.log("allcomments:",allComments)
    useEffect(() => {
        dispatch(commentActions.fetchComments())
    },[])
    // console.log(comments)
    return (
        <>
        {allComments.map((com) => <CommentItem com={com}/>)}
        </>
    )
}

export default CommentIndex