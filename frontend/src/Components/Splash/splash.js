import React from 'react'
import Navigation from '../Navigation'
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PostForm from '../PostForm/postform';
import PostIndex from '../PostIndex/postindex';
import "./splash.css"



const Splash = () => {
    const sessionUser = useSelector(state => state.session.user)
    if (!sessionUser) return <Redirect to="/login" />;

    return (
        <div className="splashwrapper">
            <Navigation/>
            <PostForm user={sessionUser}/>
            <PostIndex/>
        </div>
    )
}

export default Splash