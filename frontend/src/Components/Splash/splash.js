import React from 'react'
import Navigation from '../Navigation'
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';



const Splash = () => {
    const sessionUser = useSelector(state => state.session.user)
    if (!sessionUser) return <Redirect to="/login" />;

    return (
        <>
        <Navigation/>
        </>
    )
}

export default Splash