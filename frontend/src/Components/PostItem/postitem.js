import React from 'react'
import "./postitem.css"
import {useSelector } from 'react-redux';
const PostItem = ({post}) => {
    const sessionUser = useSelector(state => state.session.user)
  return (
    <div className="postbox">
        <div className='postUser'>
        {sessionUser.firstName}
        <div>
        {sessionUser.lastName}
        </div>
        </div>
        <div className='postbody'>
        {post.body}
        </div>
    </div>
  )
}

export default PostItem