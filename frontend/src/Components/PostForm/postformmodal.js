import React from 'react'
import { useState } from 'react'

const PostFormModal = () => {
    const [body,setBody] = useState('')
    const handleSubmit =(e) => {
        e.preventDefault();
        console.log("kenny")
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