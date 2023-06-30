import React from 'react'
import { useSelector } from 'react-redux'
import { getUser } from '../../store/users'
import "./contacts.css"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const ContactItem = ({friendid}) => {
  const history = useHistory()
    const user = useSelector(getUser(friendid))
    const handleClick = (e) => {
      history.push(`/users/${friendid}`)
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