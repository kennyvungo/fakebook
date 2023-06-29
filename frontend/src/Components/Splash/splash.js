import React from 'react'
import Navigation from '../Navigation'
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PostForm from '../PostForm/postform';
import PostIndex from '../PostIndex/postindex';
import Contacts from '../Contacts/contacts';
import Links from '../Links/links';
import "./splash.css"



const Splash = () => {
    const sessionUser = useSelector(state => state.session.user)
    if (!sessionUser) return <Redirect to="/login" />;

    return (
        <div className="splashwrapper">
            <Navigation/>
            <div className='splashbottomhalf'>
                <Links/>
            <div>
            <PostForm user={sessionUser}/>
            <PostIndex/>
            </div>
            <Contacts/>

            </div>
        </div>
    )
}

export default Splash