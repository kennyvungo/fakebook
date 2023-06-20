import React from 'react'
import "./postitem.css"
import {useSelector } from 'react-redux';
import { BiLike} from 'react-icons/bi'
import {GoComment} from'react-icons/go'
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
        <div className ='postbar'>
            <div className='likeico'>
            <BiLike/>
            Like
            </div>
            <div className='commentico'>
                <GoComment/>
                Comment
            </div>
        </div>
        <div>
            <input
                className='commentinput'
                type="text"
                placeholder='Write a comment'
            
            />
        </div>
    </div>
  )
}

export default PostItem