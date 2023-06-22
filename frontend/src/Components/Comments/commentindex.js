import React from 'react'
import { useState,useEffect } from 'react'
import { getPostComments } from '../../store/comments'
import { getComments } from '../../store/comments'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import CommentItem from './commentitem'
const CommentIndex = ({post}) => {
    const dispatch = useDispatch();
    let allComments = post.comments
    allComments ||= [];
    // const comments = useSelector(getComments)

    // useEffect(() => {
    //     dispatch(fetchPosts())
    // },[dispatch])
    // console.log(comments)
    return (
        <>
        {allComments.map((com) => <CommentItem com={com}/>)}
        </>
    )
}

export default CommentIndex