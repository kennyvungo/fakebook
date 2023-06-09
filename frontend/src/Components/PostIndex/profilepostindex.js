import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchPosts,getWallPosts } from '../../store/posts'
import PostItem from '../PostItem/postitem'
import * as commentActions from "../../store/comments"
import "./postindex.css"
import * as likeActions from "../../store/likes"

const ProfilePostIndex = ({userId,isProfile}) => {
    const dispatch = useDispatch();
    // const sessionUser = useSelector(state => state.session.user)
    const posts = [...useSelector(getWallPosts(userId))].reverse()
    useEffect(() =>{
        dispatch(fetchPosts())
        dispatch(commentActions.fetchComments())
        dispatch(likeActions.fetchLikes())
    },[dispatch])
    console.log("isProfile?",isProfile)
  return (
    <div className= {isProfile ? "profileIndex" : "postIndex"}>
        {posts.map((post) => (<PostItem key={post.id} post={post} isProfile={isProfile}/>))}
    </div>
  )
}

export default ProfilePostIndex