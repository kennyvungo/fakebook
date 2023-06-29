import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import profile from '../../assets/profile.jpg'
import {BsFillGearFill} from 'react-icons/bs'
import {RiLogoutBoxRFill} from 'react-icons/ri'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function ProfileButton({ user }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  }; 
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };
  // const handleClick = () => {
  //   <Navigate to='/profile'/>
  // }

  return (
    <div className='rightmenu'>
      <img className = "profile" src={user.avatar} onClick={openMenu} />
      {showMenu && (
        <ul className="profile-dropdown">
          <ul onClick={() => {history.push("/profile")}} className="profilebuttonhist">
            <img className = "buttonprofile" src={user.avatar}/>
            <div>
                 {user.firstName} {user.lastName}
            </div>
          </ul>
            <ul>{user.email}</ul>
            <ul> <BsFillGearFill/> Settings & Privacy</ul>
            <ul className = 'logout' onClick={logout}> <div className="dropdownico">
                <RiLogoutBoxRFill/> 
                </div>
                Log Out</ul>
        </ul>
      )}
    </div>
  );
}

export default ProfileButton;











// <div className = 'profbutton'>
// <i class="fa-brands fa-facebook"></i>
// </div>