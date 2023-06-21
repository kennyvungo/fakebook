import React from 'react'
import * as postActions from "../../store/posts"

const CommentLikeNumber = ({post}) => {
    const numberLikes = postActions.fetchCommentLength()
  return (
    <div>CommentLikeNumber</div>
  )
}

export default CommentLikeNumber