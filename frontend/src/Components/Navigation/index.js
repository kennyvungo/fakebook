import React from 'react';
import { NavLink } from 'react-router-dom';
import ProfileButton from './ProfileButton';
import { useDispatch, useSelector } from "react-redux";
// import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import * as sessionActions from "../../store/session";
import SignUpFormModal from '../SignupFormModal';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import FriendIndex from '../FriendIndex/friendindex';

function Navigation (){


const sessionUser = useSelector(state => state.session.user);
const [friendMenu, setFriendMenu] = useState(false);
const history = useHistory();
    let sessionLinks;
    const dispatch = useDispatch();
  
    useEffect(() => {
        if (!friendMenu) return;
        const closeMenu = () => {
          setFriendMenu(false);
        };
        document.addEventListener('click', closeMenu);
        return () => document.removeEventListener("click", closeMenu);
      }, [friendMenu]);
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
                <div>
                <i className="fa-brands fa-facebook-messenger" id='smallico'></i>
                {friendMenu && (
                        <FriendIndex/>
                )}
                </div>
                <i onClick={() => setFriendMenu(true)}className="fa-solid fa-bell" id='smallico'></i>
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