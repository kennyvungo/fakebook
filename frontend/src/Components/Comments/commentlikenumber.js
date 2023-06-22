import React from 'react'
import * as postActions from "../../store/posts"
import "./commentlikenum.css"
import { useState } from 'react'

const CommentLikeNumber = ({post,setPostModal}) => {
    const [showBar, setshowBar] = useState(true)
    const numberComments = post.numComments
  return (
    <div className="commentlikenums">
    {showBar && (
    <>
        <div>Likes</div>
        <div className='numComments' onClick={() => setPostModal(true)}>{numberComments} Comments</div>
    </>
    )}
    </div>
    
  )
}

export default CommentLikeNumber