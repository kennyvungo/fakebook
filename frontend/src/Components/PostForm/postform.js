import React from 'react'
import {useSelector } from 'react-redux';
import { useState } from 'react';
import Modal from '../../context/Modal';
import PostFormModal from './postformmodal';
import './postform.css'

const PostForm = () => {
    const sessionUser = useSelector(state => state.session.user)
    const [showModal, setShowModal] = useState(false);
    const helperFunc = () => {
        setShowModal(true)
    }
    return (
    <div className='postbuttoncontainer'>
        <div onClick={() => helperFunc()} className='postbutton'> 
            Whats on your mind, {sessionUser.firstName}?
        </div>
        {showModal && (
        <Modal onClose={() => setShowModal(false)}>
            <PostFormModal setShowModal={setShowModal}/>
        </Modal>
        )}
    </div>
    )
}

export default PostForm