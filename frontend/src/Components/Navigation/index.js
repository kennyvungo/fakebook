import React from 'react';
import { NavLink } from 'react-router-dom';
import ProfileButton from './ProfileButton';
import { useDispatch, useSelector } from "react-redux";
// import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import * as sessionActions from "../../store/session";
import SignUpFormModal from '../SignupFormModal';

function Navigation (){


const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    const dispatch = useDispatch();
    const handleClick= (e) =>{
        e.preventDefault();
        dispatch(sessionActions.logout())
        // console.log("LOGGED OUT")
    }
    if (sessionUser) {
    sessionLinks = (
        <>
        <ProfileButton user={sessionUser} />
            <button onClick={handleClick}>Log Out</button>
        </>
    );
    } else {
    sessionLinks = (
        <>
        {/* <LoginFormModal /> */}
        <NavLink to="/login">Log In</NavLink>
        {/* <NavLink to="/signup">Sign Up</NavLink> */}
        <SignUpFormModal/>
        </>
    );
    }
    return (
    <ul>
        <li>
            <NavLink exact to="/">Home</NavLink>
            {sessionLinks}
        </li>
    </ul>
    );
}

export default Navigation