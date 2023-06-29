import React from 'react'
import { useSelector } from 'react-redux'
import { getUser } from '../../store/users'
import "./contacts.css"

const ContactItem = ({friendid}) => {
    const user = useSelector(getUser(friendid))
    const handleClick = (e) => {
        
    }
  return (
    user ?
    <div onClick={handleClick} className='contactitemwrapper'>
        <img className='smallprofile' src={user.avatar}/>
        <div className='contactname'>{user.firstName} {user.lastName}</div>
    </div> : null
  )
}

export default ContactItem