import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch,useSelector} from "react-redux";
import * as postActions from "../../store/posts"
import {MdAddPhotoAlternate} from "react-icons/md"
import "./postitem.css"
import "../PostForm/postform.css"


const EditPostModal = ({setShowModal,post}) => {
  const dispatch = useDispatch();
    const [body,setBody] = useState(post.body)
    const [errors,setErrors] = useState([]);
    const [photoUrl,setPhotoUrl] = useState(post.photoUrl);
    const [photoFile, setPhotoFile] = useState (null);
    const user = useSelector(state => state.session.user);

    const userId = user.id
    let isDisabled = body;
    useEffect(() => {
        dispatch(postActions.fetchPosts())
    },[dispatch])
    const handleSubmit =(e) => {
        e.preventDefault();
        setErrors([]);
        const formData = new FormData();
        formData.append('post[body]', body);
        formData.append('post[userId]', userId);
        if (photoFile) {
          formData.append('post[photo]', photoFile);
        }
        dispatch(postActions.updatePost(formData,post.id)).then(() =>{
            setShowModal(false)
            dispatch(postActions.fetchPosts())
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
    let preview = null;

    if (photoUrl) preview = <img  className="previewimg" src={photoUrl} alt="" />
    return (
    <form onSubmit={handleSubmit}>
    <div className='postformhead'>Edit Post</div>
    <input
        className='posttextbox'
        type='text'
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
        />
        <div className='imgwrapper'>
        {preview}
        </div>
        <label className='uploadimg'>
            <MdAddPhotoAlternate/>
        <input
          className='reallyhidden'
          type='file'
          onChange={handleFile}
          placeholder='Upload Image'
          />
        </label>
    <div onClick={handleSubmit} className={(!isDisabled) ? 'is-disabled postformbutton' : 'postformbutton'}> Save</div>
    </form>
  )
}

export default EditPostModal