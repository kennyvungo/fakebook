import React from 'react'
import { useState } from 'react'
import { useDispatch,useSelector} from "react-redux";
import * as postActions from "../../store/posts"
import Dropzone from 'react-dropzone'
import {MdAddPhotoAlternate} from "react-icons/md"
import "./profile.css"
import { deleteFriend } from '../../store/friends';
import { fetchUser } from '../../store/users';
const DeleteModal = ({setShowModal,name,fid,userId}) => {
  const dispatch = useDispatch();
    const [body,setBody] = useState('')
    const [errors,setErrors] = useState([]);
    const [addPhoto,setaddPhoto] = useState(false);
    const [photoFile, setPhotoFile] = useState (null);
    const [photoUrl,setPhotoUrl] = useState(null);
    // const user = useSelector(state => state.session.user);
    // const userId = user.id
    let isDisabled = body;
  
    const handleSubmit =(e) => {
        e.preventDefault();
        setErrors([]);
        const formData = new FormData();
        formData.append('post[body]', body);
        formData.append('post[userId]', userId);
        if (photoFile) {
          formData.append('post[photo]', photoFile);
        }
          dispatch(postActions.createPost(formData)).then(() =>{
          dispatch(postActions.fetchPosts())
          setShowModal(false)
        })
    }
    const handleFile = ({ currentTarget }) => {
      const file = currentTarget.files[0];
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
    const handleDelete= () => {
        dispatch(deleteFriend(fid))
        setShowModal(false);
        dispatch(fetchUser(userId))
    }
    let preview = null;
    if (photoUrl) preview = <img  className="previewimg" src={photoUrl} alt="" />
  return (
    <form className = "formwrapper" onSubmit={handleSubmit}>

    <div className='postformhead'>Unfriend {name} </div>

    <div className='deletetext'>
        Are you sure you want to remove {name} as your friend?
    </div>
    <div className='buttonrow'>
        <div className='cancel' onClick={()=>setShowModal(false)}> Cancel </div>
        <div className='confbutton' onClick={handleDelete}>Confirm</div>
    </div>
    </form>
  )
}

export default DeleteModal