import React from 'react'
import { useState } from 'react'
import { useDispatch,useSelector} from "react-redux";
import * as postActions from "../../store/posts"
import * as userActions from "../../store/users"
import Dropzone from 'react-dropzone'
import {MdAddPhotoAlternate} from "react-icons/md"
import "./photomodal.css"

const ProfilePhotoModal = ({setProfileModal}) => {
  const dispatch = useDispatch();
    const [body,setBody] = useState('')
    const [errors,setErrors] = useState([]);
    const [addPhoto,setaddPhoto] = useState(false);
    const [photoFile, setPhotoFile] = useState (null);
    const [photoUrl,setPhotoUrl] = useState(null);
    const user = useSelector(state => state.session.user);
    const userId = user.id
    let isDisabled = false;
    let file = false;
  
    const handleSubmit =(e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('user[avatar]', photoFile);
        dispatch(userActions.createProf(userId,formData)).then(() =>{
          dispatch(userActions.fetchUser(userId))
        })
        setProfileModal(false)
    }
    const handleFile = ({ currentTarget }) => {
      const file = currentTarget.files[0];
      setPhotoFile(file);
      if (file) {
        isDisabled = true;
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => setPhotoUrl(fileReader.result);
        }
      else {
        setPhotoUrl(null);
      }
    }
    let preview = null;
    if (photoUrl) preview = <img  className="profilepreview" src={photoUrl} alt="" />
  return (
    <form className = "formwrapper" onSubmit={handleSubmit}>

    <div className='postformhead'>Add Profile Picture</div>
          {preview}
        <label className='uploadimg'>
            <MdAddPhotoAlternate/>
        <input
          className='reallyhidden'
          type='file'
          onChange={handleFile}
          placeholder='Upload Image'
          />
        </label>
      
    <div onClick={handleSubmit} className={(isDisabled) ? 'postformbutton' : 'is-disabled postformbutton'}> Add Photo</div>
    </form>
  )
}

export default ProfilePhotoModal