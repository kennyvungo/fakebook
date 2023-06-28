import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchPosts,getPosts } from '../../store/posts'
import PostItem from '../PostItem/postitem'
import * as commentActions from "../../store/comments"
import * as userActions from "../../store/users"
import "./postindex.css"
import * as likeActions from "../../store/likes"
import * as pendingfriendActions from "../../store/pendingfriends"


const PostIndex = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const userId = sessionUser.id
    const posts = [...useSelector(getPosts)].reverse()

    useEffect(() =>{
        dispatch(fetchPosts())
        dispatch(userActions.fetchUsers())
        dispatch(commentActions.fetchComments())
        dispatch(likeActions.fetchLikes())
        dispatch(pendingfriendActions.fetchPendFriends())
    },[dispatch])

  return (
    <div className="postIndex">
        {posts.map((post) => (<PostItem key={post.id} post={post}/>))}
    </div>
  )
}

export default PostIndex