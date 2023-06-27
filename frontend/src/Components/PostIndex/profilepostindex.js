import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchPosts,getWallPosts } from '../../store/posts'
import PostItem from '../PostItem/postitem'
import * as commentActions from "../../store/comments"
import "./postindex.css"
import * as likeActions from "../../store/likes"

const ProfilePostIndex = ({userId}) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    console.log("THis is the idL",sessionUser.id)
    const posts = [...useSelector(getWallPosts(userId))].reverse()
    useEffect(() =>{
        dispatch(fetchPosts())
        dispatch(commentActions.fetchComments())
        dispatch(likeActions.fetchLikes())
    },[])

  return (
    <div className="postIndex">
        {posts.map((post) => (<PostItem key={post.id} post={post}/>))}
    </div>
  )
}

export default ProfilePostIndex