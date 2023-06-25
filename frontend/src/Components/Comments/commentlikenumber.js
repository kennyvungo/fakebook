import React from 'react'
import * as postActions from "../../store/posts"
import "./commentlikenum.css"
import { useState } from 'react'
import likeico from "../../assets/likeico.png"

const CommentLikeNumber = ({post,setPostModal}) => {
    const [showBar, setshowBar] = useState(true)
    const numComments = post.numComments
  return (
    <div className="commentlikenums">
    {showBar && (
    <>
        <div className={post.numLikes > 0 ? "likenum" : "likenum hidden" }>
          <img className='bluelikeico' src={likeico}/>
          <div>
            {post.numLikes} 
          </div>
        </div>
        <div className={post.numComments > 0 ? "numComments" : "numComments hidden" } onClick={() => setPostModal(true)}>{numComments} Comments</div>
    </>
    )}
    </div>
    
  )
}

export default CommentLikeNumber