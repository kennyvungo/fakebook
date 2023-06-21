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
        // return () =>{
                //close Modal?   
        // }
    },[dispatch])
  return (
    <div className="postIndex">
        {posts.map((post) => (<PostItem key={post.id} post={post}/>))}
    </div>
  )
}

export default PostIndex