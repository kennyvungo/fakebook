import React from 'react'
import Navigation from '../Navigation'
import { Redirect } from 'react-router-dom';
import { useState,useEffect } from 'react'
import { useDispatch,useSelector} from "react-redux";
import * as userActions from "../../store/users"
import * as sessionActions from "../../store/session"
import {AiFillCamera} from 'react-icons/ai'
import './profile.css'
const Profile = () => {
  const dispatch = useDispatch()
  const [photoFile, setPhotoFile] = useState (null);
  const [photoUrl,setPhotoUrl] = useState(null);
  const sessionUser = useSelector(state => state.session.user)
  if (!sessionUser) return <Redirect to="/login" />;
  let userId = sessionUser.id
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
   const handleClick = (e) => {
    e.preventDefault()
    const formData = new FormData();
    console.log(photoFile)
    formData.append('user[avatar]', photoFile);
    dispatch(userActions.createProf(userId,formData)).then(() =>{
      dispatch(userActions.fetchUser(userId))
    })
   }
  return (
    <>
    <Navigation/>
    <div className="profilewrapper">
      <div className="cover">Cover Photo</div>
      <div className="profileinfo">
      {sessionUser.avatar && (
        <img className="profileavatar" src={sessionUser.avatar}/>
        )
      }

      </div>
    </div>
    <div className='profilebottomhalf'>
    <label className="camera">
          <AiFillCamera/>
    <input
          type='file'
          className='reallyhidden'
          onChange={handleFile}
          placeholder='Upload Image'
          />
      </label>
    </div>

    <div>
      {sessionUser.firstName}
      {sessionUser.lastName}
    </div>
    <button onClick = {handleClick}>Change photo</button>
    </>
  )
}

export default Profile