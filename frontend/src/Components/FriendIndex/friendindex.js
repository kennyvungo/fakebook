import React from 'react'
import FriendItem from './frienditem'
import * as pendingfriendActions from "../../store/pendingfriends"
import { useSelector } from 'react-redux'
import "./friend.css"
const FriendIndex = () => {
const sessionUser = useSelector(state => state.session.user)
const sentpends = useSelector(pendingfriendActions.getSentPends(sessionUser.id))
// console.log(sentpends)
// console.log(sessionUser)
  return (
    <ul className="friend-dropdown">
        <h1 className='friendheader'>Friend requests</h1>{
          sentpends.length > 0 ?
          Object.values(sentpends).map(friend => <FriendItem key={friend.id} friend={friend}/>) : 
          <div className='nofriends'> None! </div>
        }
        
    </ul>
  )
}

export default FriendIndex