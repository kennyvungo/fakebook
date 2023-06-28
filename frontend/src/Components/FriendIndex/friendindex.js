import React from 'react'
import FriendItem from './frienditem'
import * as pendingfriendActions from "../../store/pendingfriends"
import { useSelector } from 'react-redux'
const FriendIndex = () => {
const sessionUser = useSelector(state => state.session.user)
const sentpends = useSelector(pendingfriendActions.getSentPends(sessionUser.id))
console.log(sentpends)
console.log(sessionUser)
  return (
    <ul className="friend-dropdown">
        {Object.values(sentpends).map(friend => <FriendItem key={friend.id} friend={friend}/>)}
    </ul>
  )
}

export default FriendIndex