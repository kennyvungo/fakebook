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
import {IoPersonAddSharp} from 'react-icons/io5'
import Bio from './bio';
import * as pendingfriendActions from "../../store/pendingfriends"
import { getPendFriend } from '../../store/pendingfriends';
import * as friendActions from "../../store/friends"
import {FiUserCheck} from "react-icons/fi"
const ProfileShow = () => {
  const {userId} = useParams()
  const dispatch = useDispatch()
  // dispatch(userActions.fetchUsers());
  const sessionUser = useSelector(state => state.session.user)
  const user = useSelector(userActions.getUser(userId))
  const pends = useSelector(pendingfriendActions.getUserPends(sessionUser.id))
  const sentpends = useSelector(pendingfriendActions.getUserPends(sessionUser.id))
  const myFriends = useSelector(friendActions.getUserFriends(sessionUser.id))
  let isProfile = true;
  // if(user === undefined){
    //   return null
    // }
    const [photoFile, setPhotoFile] = useState (null);
    const [coverFile,setCoverFile] = useState(null);
    const [photoUrl,setPhotoUrl] = useState(null);
    const [requestSent,setRequestSent] = useState(false)
    // const pending = useSelector(getPendFriend())
    // const [requestSent,setRequestSent] = useState(false)
    useEffect(() => {
      // dispatch(userActions.fetchUsers())
      dispatch(userActions.fetchUser(userId))
      dispatch(pendingfriendActions.fetchPendFriends(userId))
      dispatch(friendActions.fetchFriends())
    },[dispatch,requestSent])

    if (!sessionUser) return <Redirect to="/login" />;
    if (sessionUser.id === userId) return <Redirect to="/profile" />;
    // let requestSent = false;
  const handleFriend = (e) => {
    e.preventDefault();
    // setErrors([]);
    dispatch(pendingfriendActions.createPendingfriend({friender_id: sessionUser.id, friendee_id: userId}))
    setRequestSent(true);
  }

  return user ?  ( 
    <>
    <Navigation/>
    <div className='wholeprofile'>
        <div className='proftophalf'>
          <div className="cover">
            <img className='profilecover' src={user.cover}/>
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
                  {user.numFriends} friends
              </div>
            </div>
            {/* {requestSent} */}
          { myFriends.some(friend => friend.user_id == userId || friend.friend_id == userId) ? <div className='currentfriend'>  <FiUserCheck/> Friends </div> :
          (pends.some(pend => pend.friendeeId == userId)) ?  <div className='friendsent'> Friend Request Sent! </div> :
            
            (sentpends.some(pend => pend.friendeeId == sessionUser.id)) ?  <div className='friendsent'> Accept Friend Request? </div> :
            <div className='friendbutton' onClick={handleFriend}>
            <IoPersonAddSharp/>
                Add friend
            </div>
            }
            
          </div>
        </div>
        <div className='profilebottomhalf'>
          <div className='profilebottomleft'>
            <Bio isShow={false}/>
          </div>
          <div className='profilebottomright'>
            {user && (
              <ProfilePostIndex userId = {user.id} isProfile={isProfile}/>
            )
            }
          </div>
        </div>
    </div>
    </>
  ) : null
}

export default ProfileShow