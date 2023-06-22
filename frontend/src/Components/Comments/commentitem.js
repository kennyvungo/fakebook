import React from 'react'

const CommentItem = ({com}) => {
  let author = com.user;
  return (
    <>
    <div>{author}</div>
    <div>{com.body}</div>
    </>
  )
}

export default CommentItem