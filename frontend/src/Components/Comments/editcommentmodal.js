import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch,useSelector} from "react-redux";
import * as postActions from "../../store/posts"
import { updateComment } from '../../store/comments';
import "../PostItem/postitem.css"
import "../PostForm/postform.css"


const EditCommentModal = ({setShowModal,com}) => {
  const dispatch = useDispatch();
    const [body,setBody] = useState(com.body)
    const [errors,setErrors] = useState([]);
    const user = useSelector(state => state.session.user);

    const userId = user.id
    let isDisabled = body;
    useEffect(() => {
        // dispatch(postActions.fetchPosts())
    },[dispatch])
    const handleSubmit =(e) => {
        e.preventDefault();
        setErrors([]);
        com.body = body;
        com.updateLikes = false;
        dispatch(updateComment(com)).then(() =>{
            setShowModal(false)
            // dispatch(postActions.fetchPosts())
        })
    }
    
    return (
    <form onSubmit={handleSubmit}>
    <div className='postformhead'>Edit Comment</div>
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

export default EditCommentModal