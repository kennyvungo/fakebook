import React from 'react'
import "./contacts.css"
import { useSelector } from 'react-redux'
import { getUserFriends } from '../../store/friends'
import { getUser } from '../../store/users'
import ContactItem from './contactitem'
const Contacts = () => {
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

    console.log(userFriends)
    console.log(friends)
  return (
    <div className='contactwrapper'>
        <h1 className="contactheader"> Contacts</h1>

        {friends.map((friendid) => (
            <ContactItem key={friendid} friendid={friendid}/>
        ))}
        </div>
  )
}

export default Contacts