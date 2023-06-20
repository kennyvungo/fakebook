import React from 'react'

const PostItem = ({post}) => {
  return (
    <div className="postbox">
        <div>Post</div>
        <div>Kenny</div>
        {post.body}
    </div>
  )
}

export default PostItem