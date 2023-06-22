import React from 'react'
import "./commentitem.css"

const CommentItem = ({com}) => {
  let author = com.author;
  
  return (
    <div className="commentitem">
    {/* <div>{author}</div> */}
    <div>{com.body}</div>
    </div>
  )
}

export default CommentItem