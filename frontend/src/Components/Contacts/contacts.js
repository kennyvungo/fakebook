import React from 'react'
import "./contacts.css"
import { useSelector } from 'react-redux'
import { getUserFriends } from '../../store/friends'
import { getUser } from '../../store/users'
import { useState } from 'react'
import ContactItem from './contactitem'

const Contacts = () => {
    const [chatNum,setChatnum] = useState(0);
    const sessionUser = useSelector(state => state.session.user)
    const userFriends = useSelector(getUserFriends(sessionUser.id))
    const friends = userFriends.map((friendship) => {
        if(friendship.user_id !== sessionUser.id){
            return friendship.user_id
        }
        else{
            return friendship.friend_id
        }
    })
  return (
    friends ? 
    <>
    <div className='contactwrapper'>
        <h1 className="contactheader"> Contacts</h1>

        {friends.slice(0,15).map((friendid) => (
            <ContactItem key={friendid} friendid={friendid}/>
            ))}
        </div>
      
    </> : null
  )
}

export default Contacts