import React from 'react'
import "./postitem.css"
import {useSelector } from 'react-redux';
import { BiLike} from 'react-icons/bi'
import {GoComment} from'react-icons/go'
import {BsThreeDots} from 'react-icons/bs'
import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
const PostItem = ({post}) => {
    const sessionUser = useSelector(state => state.session.user)
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
      }; 

    useEffect(() => {
        if (!showMenu) return;
    
        const closeMenu = () => {
          setShowMenu(false);
        };
    
        document.addEventListener('click', closeMenu);
      
        return () => document.removeEventListener("click", closeMenu);
      }, [showMenu]);

  return (
    <div className="postbox">
        <div className='postUser'>
            {sessionUser.firstName}
            {sessionUser.lastName}
            <div className='postdots' onClick={openMenu}>
                <BsThreeDots/>
            </div>
        </div>
        {showMenu &&(
                <ul className="postdropdown">
                    <ul>Edit Post</ul>
                    <ul>Delete Post</ul>
                </ul>
            )}
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