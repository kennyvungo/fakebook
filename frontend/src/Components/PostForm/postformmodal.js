import React from 'react'
import { useState } from 'react'
import { useDispatch,useSelector} from "react-redux";
import * as postActions from "../../store/post"

const PostFormModal = () => {
  const dispatch = useDispatch();
    const [body,setBody] = useState('')
    const [errors,setErrors] = useState([]);
    const userId = useSelector(state => state.session.user.id);

    const handleSubmit =(e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(postActions.createPost({userId: userId,body:body}))
    }
  return (
    <form onSubmit={handleSubmit}>

    <div className='postformhead'>Create Post</div>
    <input
        className='posttextbox'
        type='text'
        value={body}
        placeholder={`What's on your mind, Kenny?`}
        onChange={(e) => setBody(e.target.value)}
        required
        />
    <div onClick={handleSubmit} className='postformbutton'> Post</div>
    </form>
  )
}

export default PostFormModal