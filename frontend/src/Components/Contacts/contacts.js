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
    const [selectaa,setselectaa] = useState("");
    console.log(selectaa)
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
        <h1 className="contactheader"> <div onClick={() => setselectaa(false)} className={selectaa ? "conta" : "activ conta"}>Contacts </div> <h2 onClick={() => setselectaa(true)} className={selectaa ? "aa activ" : "aa"}>A/a</h2></h1> 
        {selectaa ? 
        friends.slice(17,40).map((friendid) => (
            <ContactItem key={friendid} friendid={friendid}/>
            ))

        : friends.slice(0,15).map((friendid) => (
            <ContactItem key={friendid} friendid={friendid}/>
            )) }
            </div>
      
    </> : null
  )
}

export default Contacts