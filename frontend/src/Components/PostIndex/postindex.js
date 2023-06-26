import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchPosts,getPosts } from '../../store/posts'
import PostItem from '../PostItem/postitem'
import * as commentActions from "../../store/comments"
import "./postindex.css"
import * as likeActions from "../../store/likes"

const PostIndex = () => {
    const dispatch = useDispatch();
    const posts = [...useSelector(getPosts)].reverse()

    useEffect(() =>{
        dispatch(fetchPosts())
        dispatch(commentActions.fetchComments())
        dispatch(likeActions.fetchLikes())
    },[dispatch])

  return (
    <div className="postIndex">
        {posts.map((post) => (<PostItem key={post.id} post={post}/>))}
    </div>
  )
}

export default PostIndex