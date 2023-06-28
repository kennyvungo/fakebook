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


const ProfileShow = () => {
  const {userId} = useParams()
  const dispatch = useDispatch()
  // dispatch(userActions.fetchUsers());
  const sessionUser = useSelector(state => state.session.user)
  const user = useSelector(userActions.getUser(userId))
  const pends = useSelector(pendingfriendActions.getUserPends(sessionUser.id))
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
      dispatch(pendingfriendActions.fetchPendFriends())
      setRequestSent(pends.some(pend => pend.friendeeId == userId))
    },[dispatch,requestSent])

    if (!sessionUser) return <Redirect to="/login" />;
    if (sessionUser.id === userId) return <Redirect to="/profile" />;
    // let requestSent = false;
  const handleFriend = (e) => {
    e.preventDefault();
    // setErrors([]);
    dispatch(pendingfriendActions.createPendingfriend({friender_id: sessionUser.id, friendee_id: userId}))
    console.log("sent friend request!")
    setRequestSent(true);
  }
  console.log("userId",userId)
  console.log("pends",pends)
console.log("requestSent",requestSent)
console.log(pends.some((pend) => pend.friendeeId == userId))
  return user ?  ( 
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
            {/* {requestSent} */}
          {(pends.some(pend => pend.friendeeId == userId)) ?  <div className='friendsent'> Friend Request Sent! </div> :
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
              <ProfilePostIndex userId = {user.id}/>
            )
            }
          </div>
        </div>
    </div>
    </>
  ) : null
}

export default ProfileShow