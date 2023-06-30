import React from 'react'
import Navigation from '../Navigation'
import { Redirect } from 'react-router-dom';
import Modal from '../../context/Modal';
import { useState,useEffect } from 'react'
import { useDispatch,useSelector} from "react-redux";
import * as userActions from "../../store/users"
import * as sessionActions from "../../store/session"
import {AiFillCamera} from 'react-icons/ai'
import './profile.css'
import ProfilePostIndex from '../PostIndex/profilepostindex';
import PostForm from '../PostForm/postform';
import ProfilePhotoModal from '../PhotoModals/ProfilePhotoModal';
import CoverPhotoModal from '../PhotoModals/CoverPhotoModal';
import Bio from './bio';
const Profile = () => {
  const dispatch = useDispatch()
  const [photoFile, setPhotoFile] = useState (null);
  const [showProfileModal,setProfileModal] = useState(false);
  const [showCoverModal,setCoverModal] = useState(false)
  const [coverFile,setCoverFile] = useState(null);
  const [photoUrl,setPhotoUrl] = useState(null);
  const sessionUser = useSelector(state => state.session.user)
  const user = useSelector(userActions.getUser(sessionUser.id))
  const isProfile = true;
  if (!sessionUser) return <Redirect to="/login" />;
  if(sessionUser.id === null) return <Redirect to="/login" />;
  let userId = sessionUser.id
  // console.log("This is the userid",user.id)
  let file;
  const handleCoverFile = ({ currentTarget }) => {
    file = currentTarget.files[0];
    setPhotoFile(file);
    if (file) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => setPhotoUrl(fileReader.result);
      }
    else {
      setPhotoUrl(null); 
    }
  }
  const handleProfile =() => {
      setProfileModal(true);
  }
  const handleCover =() => {
    setCoverModal(true)
  }
  
  const handleClick = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('user[avatar]', photoFile);
    dispatch(userActions.createProf(userId,formData)).then(() =>{
      dispatch(userActions.fetchUser(userId))
    })
  }
  return (
    user ? 
    <>
    <Navigation/>
    {showProfileModal && (
            <Modal onClose={() => setProfileModal(false)}>
            <ProfilePhotoModal setProfileModal={setProfileModal} />
            </Modal>
        )}
    {showCoverModal && (
            <Modal onClose={() => setCoverModal(false)}>
            <CoverPhotoModal setCoverModal={setCoverModal} />
            </Modal>
        )}
    <div className='wholeprofile'>
        <div className='proftophalf'>
          <div className="cover">
            <img className='profilecover' src={sessionUser.cover} />
          <div onClick={handleCover} className='coverbutton' >
                <AiFillCamera/> Add cover photo
          </div>
          </div>
          <div className="profileinfo">
          {sessionUser.avatar && (
            <>
              <img className="profileavatar" src={sessionUser.avatar}/>
              <div className="camera" onClick={handleProfile}>
                <AiFillCamera/>
              </div>
            </>
          )
          }
            <div className='profilenamecolumn'>
              <div className='profilename'>
                {sessionUser.firstName} 
                {sessionUser.lastName}
              </div>
              <div className='profilenumfriends'>
                  {user.numFriends} friends
              </div>
            </div>
          </div>
        </div>



        <div className='profilebottomhalf'>
          <div className='profilebottomleft'>
            <Bio isShow={true}/>
              
          </div>
          <div className='profilebottomright'>
            <PostForm isProfile={isProfile}/>
            <ProfilePostIndex userId = {userId} isProfile={isProfile}/>
          <button onClick = {handleClick}>Change photo</button>
          </div>
        </div>
      
    </div>
    </> : null
  )
}

export default Profile