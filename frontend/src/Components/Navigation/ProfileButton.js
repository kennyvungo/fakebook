import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
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

  return (
    <div className='rightmenu'>
      <div className = "profbutton" onClick={openMenu} >
        <i className="fa-brands fa-facebook"></i>
      </div>
      {showMenu && (
        <ul className="profile-dropdown">
            <ul>{user.firstName}</ul>
            <ul>{user.lastName}</ul>
            <ul>{user.email}</ul>
            <ul>
            <button onClick={logout}>Log Out</button>
          </ul>
        </ul>
      )}
    </div>
  );
}

export default ProfileButton;











// <div className = 'profbutton'>
// <i class="fa-brands fa-facebook"></i>
// </div>