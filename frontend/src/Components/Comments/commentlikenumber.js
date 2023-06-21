import React from 'react'
import * as postActions from "../../store/posts"
import "./commentlikenum.css"
import { useState } from 'react'

const CommentLikeNumber = ({post}) => {
    const [showBar, setshowBar] = useState(true)
    const numberComments = post.numComments
  return (
    <div className="commentlikenums">
    {showBar && (
    <>
        <div>Likes</div>
        <div>{numberComments} Comments</div>
    </>
    )}
    </div>
    
  )
}

export default CommentLikeNumber