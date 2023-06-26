import React from 'react'
import { useState } from 'react'
import { useDispatch,useSelector} from "react-redux";
import * as postActions from "../../store/posts"

const PostFormModal = ({setShowModal}) => {
  const dispatch = useDispatch();
    const [body,setBody] = useState('')
    const [errors,setErrors] = useState([]);
    const [photoFile, setPhotoFile] = useState (null);
    const [photoUrl,setPhotoUrl] = useState(null);
    const user = useSelector(state => state.session.user);
    const userId = user.id
    let isDisabled = body;
  
    const handleSubmit =(e) => {
        e.preventDefault();
        setErrors([]);
        const formData = new FormData();
        formData.append('post[body]', body);
        formData.append('post[userId]', userId);
        console.log("photofile",photoFile)
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
    let preview = null;
    if (photoUrl) preview = <img  className="previewimg" src={photoUrl} alt="" />
  return (
    <form className = "formwrapper" onSubmit={handleSubmit}>

    <div className='postformhead'>Create Post</div>
    <input
        className='posttextbox'
        type='text'
        value={body}
        placeholder={`What's on your mind, ${user.firstName}?`}
        onChange={(e) => setBody(e.target.value)}
        required
        />
          {preview}
         <label className='uploadimg'>
            Upload an Image
        <input
          className='hidden'
          type='file'
          onChange={handleFile}
          placeholder='Upload Image'
          />
        </label>
    <div onClick={handleSubmit} className={(!isDisabled) ? 'is-disabled postformbutton' : 'postformbutton'}> Post</div>
    </form>
  )
}

export default PostFormModal