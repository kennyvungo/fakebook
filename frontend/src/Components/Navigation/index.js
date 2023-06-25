import React from 'react';
import { NavLink } from 'react-router-dom';
import ProfileButton from './ProfileButton';
import { useDispatch, useSelector } from "react-redux";
// import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import * as sessionActions from "../../store/session";
import SignUpFormModal from '../SignupFormModal';
import { useHistory } from 'react-router-dom';

function Navigation (){


const sessionUser = useSelector(state => state.session.user);
const history = useHistory();
    let sessionLinks;
    const dispatch = useDispatch();
    // const handleClick= (e) =>{
    //     e.preventDefault();
    //     dispatch(sessionActions.logout())
    //     // console.log("LOGGED OUT")
    // }
    if (sessionUser) {
    sessionLinks = (
        <div className='navbar'>
            <i className="fa-brands fa-facebook profbutton" onClick={()=> history.push("/")}></i>
            <input
                className='searchbar'
                type= 'text'
                placeholder=' Search Fakebook'
            />
            <div className='rightnav'>
                <i className="fa-brands fa-facebook-messenger" id='smallico'></i>
                <i className="fa-solid fa-bell" id='smallico'></i>
                <ProfileButton user={sessionUser} />
            </div>
        </div>
    );
    } else {
    sessionLinks = (
        <>
        </>
    );
    }
    return (
    <ul>
        <li>
            {sessionLinks}
        </li>
    </ul>
    );
}

export default Navigation