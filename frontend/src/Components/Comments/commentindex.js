import React from 'react'
import { useState,useEffect } from 'react'
import { getPostComments } from '../../store/comments'
import { getComments } from '../../store/comments'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
const CommentIndex = ({post}) => {
    const dispatch = useDispatch();
    // const comments = useSelector(getComments)

    // useEffect(() => {
    //     dispatch(fetchPosts())
    // },[dispatch])
    // console.log(comments)
    return (
        <>
        {/* <div>{comments}</div> */}
        </>
    )
}

export default CommentIndex