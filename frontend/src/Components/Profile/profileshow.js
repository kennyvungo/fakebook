import React from 'react'
import Navigation from '../Navigation'
import { Redirect } from 'react-router-dom';
import { useState,useEffect } from 'react'
import { useDispatch,useSelector} from "react-redux";
import * as userActions from "../../store/users"
import * as likeActions from "../../store/likes"
import {AiFillCamera} from 'react-icons/ai'
import { useMemo } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import './profile.css'
import ProfilePostIndex from '../PostIndex/profilepostindex';
import Bio from './bio';
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

  const [photoFile, setPhotoFile] = useState (null);
  const [coverFile,setCoverFile] = useState(null);
  const [photoUrl,setPhotoUrl] = useState(null);

  if (!sessionUser) return <Redirect to="/login" />;
  if (sessionUser.id === user.id) return <Redirect to="/profile" />;
  
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
            </>
            )
          }
            <div className='profilenamecolumn'>
              <div className='profilename'>
                {user.firstName} 
                {user.lastName}
              </div>
              <div className='profilenumfriends'>
                  0 friends
              </div>
            </div>
          </div>
        </div>
        <div className='profilebottomhalf'>
          <div className='profilebottomleft'>
            <Bio isShow={false}/>
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