import React from 'react'
import * as postActions from "../../store/posts"
import "./commentlikenum.css"
import { useState } from 'react'
import likeico from "../../assets/likeico.png"

const CommentLikeNumber = ({post,setPostModal}) => {
    const [showBar, setshowBar] = useState(true)
    const numberComments = post.numComments
  return (
    <div className="commentlikenums">
    {showBar && (
    <>
        <div className={post.numLikes > 0 ? "likenum" : "likenum hidden" }>
          <img className='likeico' src={likeico}/>
          <div>
            {post.numLikes} 
          </div>
        </div>

        <div className='numComments' onClick={() => setPostModal(true)}>{numberComments} Comments</div>
    </>
    )}
    </div>
    
  )
}

export default CommentLikeNumber