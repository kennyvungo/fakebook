import React, { useState } from 'react';
import Modal from '../../context/Modal';
import SignUpFormPage from "./SignUpForm";



function SignUpFormModal() {
    const [showModal, setShowModal] = useState(false);
    const helperFunc = () => {
        console.log(showModal)
        setShowModal(true)
        console.log(showModal)
    }
return (
    <>
    <button className="createbutton" onClick={() => helperFunc()}>Create New Account</button>
    {showModal && (
    <Modal onClose={() => setShowModal(false)}>
        <SignUpFormPage/>
    </Modal>
    )}
    </>
);
}

export default SignUpFormModal;