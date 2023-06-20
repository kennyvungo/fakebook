import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchPosts,getPosts } from '../../store/posts'
import PostItem from '../PostItem/postitem'
import "./postindex.css"

const PostIndex = () => {
    const dispatch = useDispatch();
    const posts = useSelector(getPosts)

    useEffect(() =>{
        dispatch(fetchPosts())
    },[dispatch])
    console.log(posts)
  return (
    <div className="postIndex">
        <div>Start of Post Index</div>
        {posts.map((post) => (<PostItem post={post}/>))}
    </div>
  )
}

export default PostIndex