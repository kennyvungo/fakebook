import React from 'react'
import Navigation from '../Navigation'
import { useState } from 'react'
import { useDispatch,useSelector} from "react-redux";
import * as userActions from "../../store/users"
import './profile.css'
const Profile = () => {
  const dispatch = useDispatch()
  const [photoFile, setPhotoFile] = useState (null);
  const [photoUrl,setPhotoUrl] = useState(null);
  const sessionUser = useSelector(state => state.session.user)
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
    formData.append('user[prof]', photoFile);
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

      </div>
    </div>
    <div className='profilebottomhalf'>
    <input
          type='file'
          onChange={handleFile}
          placeholder='Upload Image'
          />
      <button onClick = {handleClick}>
            Upload photo
          </button>
    </div>
    </>
  )
}

export default Profile