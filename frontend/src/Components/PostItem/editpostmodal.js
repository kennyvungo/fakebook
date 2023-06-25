import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch,useSelector} from "react-redux";
import * as postActions from "../../store/posts"

const EditPostModal = ({setShowModal,post}) => {
  const dispatch = useDispatch();
    const [body,setBody] = useState(post.body)
    const [errors,setErrors] = useState([]);
    const user = useSelector(state => state.session.user);
    const userId = user.id
    let isDisabled = body;
    useEffect(() => {
        dispatch(postActions.fetchPosts())
    },[dispatch])
    const handleSubmit =(e) => {
        e.preventDefault();
        setErrors([]);
        dispatch(postActions.updatePost({id: post.id,userId: userId,body:body})).then(() =>{
            setShowModal(false)
            dispatch(postActions.fetchPosts())
        })
    }
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
    <div onClick={handleSubmit} className={(!isDisabled) ? 'is-disabled postformbutton' : 'postformbutton'}> Save</div>
    </form>
  )
}

export default EditPostModal