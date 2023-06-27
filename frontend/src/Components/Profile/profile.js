import React from 'react'
import Navigation from '../Navigation'
import { Redirect } from 'react-router-dom';
import { useState,useEffect } from 'react'
import { useDispatch,useSelector} from "react-redux";
import * as userActions from "../../store/users"
import * as sessionActions from "../../store/session"
import {AiFillCamera} from 'react-icons/ai'
import './profile.css'
import ProfilePostIndex from '../PostIndex/profilepostindex';
import PostForm from '../PostForm/postform';
const Profile = () => {
  const dispatch = useDispatch()
  const [photoFile, setPhotoFile] = useState (null);
  const [coverFile,setCoverFile] = useState(null);
  const [photoUrl,setPhotoUrl] = useState(null);
  const sessionUser = useSelector(state => state.session.user)
  const user = useSelector(userActions.getUser(sessionUser.id))

  if (!sessionUser) return <Redirect to="/login" />;
  let userId = sessionUser.id
  // console.log("This is the userid",user.id)
  let file;
  const handleFile = ({ currentTarget }) => {
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
  
  const handleClick = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('user[avatar]', photoFile);
    dispatch(userActions.createProf(userId,formData)).then(() =>{
      dispatch(userActions.fetchUser(userId))
    })
  }
  const handleCover = (e) => {
    e.preventDefault()
    const coverData = new FormData();
    coverData.append('user[cover]',coverFile);
    dispatch(userActions.createProf(userId,coverData)).then(() =>{
      dispatch(userActions.fetchUser(userId))
    })
  }
  return (
    <>
    <Navigation/>
    <div className='wholeprofile'>
        <div className='proftophalf'>
          <div className="cover">
          <label >
                <AiFillCamera/>
                <input
                  type='file'
                  className='reallyhidden'
                  onChange={handleCover}
                  placeholder='Upload Image'
                />
              </label>
          </div>
          <div className="profileinfo">
          {sessionUser.avatar && (
            <>
              <img className="profileavatar" src={sessionUser.avatar}/>
              <label className="camera">
                <AiFillCamera/>
                <input
                  type='file'
                  className='reallyhidden'
                  onChange={handleFile}
                  placeholder='Upload Image'
                />
              </label>
            </>
            )
          }
            <div className='profilename'>
              {sessionUser.firstName} 
              {sessionUser.lastName}
            </div>
          </div>
        </div>



        <div className='profilebottomhalf'>
     
          <div className='profilebottomleft'>

          </div>
          <div className='profilebottomright'>
            <PostForm/>
           <ProfilePostIndex userId = {userId}/>
          <button onClick = {handleClick}>Change photo</button>
          </div>
        </div>
      
    </div>
    </>
  )
}

export default Profile