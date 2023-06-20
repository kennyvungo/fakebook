import React from 'react'
import Navigation from '../Navigation'
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PostForm from '../PostForm/postform';



const Splash = () => {
    const sessionUser = useSelector(state => state.session.user)
    if (!sessionUser) return <Redirect to="/login" />;

    return (
        <>
            <Navigation/>
            <PostForm user={sessionUser}/>
        </>
    )
}

export default Splash