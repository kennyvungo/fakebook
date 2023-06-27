import React from 'react'
import Navigation from '../Navigation'
import { Redirect } from 'react-router-dom';
import { useState,useEffect } from 'react'
import { useDispatch,useSelector} from "react-redux";
import * as userActions from "../../store/users"
import * as sessionActions from "../../store/session"
import * as commentActions from "../../store/comments"
import { fetchPosts } from '../../store/posts';
import * as likeActions from "../../store/likes"
import {AiFillCamera} from 'react-icons/ai'
import { useMemo } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import './profile.css'
import ProfilePostIndex from '../PostIndex/profilepostindex';
import PostForm from '../PostForm/postform';
const ProfileShow = () => {
  const dispatch = useDispatch()
  // dispatch(userActions.fetchUsers());
  const sessionUser = useSelector(state => state.session.user)
  const {userId} = useParams()
  // useMemo(() => {
  //   dispatch(userActions.fetchUsers())
  //   // dispatch(userActions.fetchUser(userId))
  // },[userId])
  const user = useSelector(userActions.getUser(userId))
  console.log("This is the userid",userId)
  console.log("this is different",user.id)

  const [photoFile, setPhotoFile] = useState (null);
  const [coverFile,setCoverFile] = useState(null);
  const [photoUrl,setPhotoUrl] = useState(null);
  console.warn("user",user)
console.log("userid:",user.id)
  if (!sessionUser) return <Redirect to="/login" />;
  
  return (
    <>
    <Navigation/>
    <div className='wholeprofile'>
        <div className='proftophalf'>
          <div className="cover">
          </div>
          <div className="profileinfo">
          {sessionUser.avatar && (
            <>
              <img className="profileavatar" src={user.avatar}/>
              <label className="camera">
                <AiFillCamera/>
                <input
                  type='file'
                  className='reallyhidden'
                  placeholder='Upload Image'
                />
              </label>
            </>
            )
          }
            <div className='profilename'>
              {user.firstName} 
              {user.lastName}
            </div>
          </div>
        </div>



        <div className='profilebottomhalf'>
     
          <div className='profilebottomleft'>

          </div>
          <div className='profilebottomright'>
           <ProfilePostIndex userId = {user.id}/>
          </div>
        </div>
      
    </div>
    </>
  )
}

export default ProfileShow