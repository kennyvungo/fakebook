import React, { useState } from 'react';
import Modal from '../../context/Modal';
import SignUpFormPage from "./SignUpForm";



function SignUpFormModal() {
    const [showModal, setShowModal] = useState(false);
    const helperFunc = () => {
        setShowModal(true)
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