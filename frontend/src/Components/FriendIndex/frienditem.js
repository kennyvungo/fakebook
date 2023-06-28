import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../store/users'
import "./friend.css"
import * as pendingfriendActions from "../../store/pendingfriends"
import * as friendActions from "../../store/friends"
const FriendItem = ({friend}) => {  
    const dispatch = useDispatch();
    const user = useSelector(getUser(friend.frienderId))
    const handleConfirm = (e) => {
        dispatch(friendActions.createfriend({user_id: friend.frienderId,friend_id: friend.friendeeId}))
        dispatch(pendingfriendActions.deletePendingfriend(friend.id))
    }

    const handleDelete = (e) => {
        dispatch(pendingfriendActions.deletePendingfriend(friend.id))
    }
  return user ? (
    <div className='frienditemwrapper'>
        <img className="smallprofile" src={user.avatar} />
        <div className='frienditemright'>
            <div className='friendname'>{user.firstName}{user.lastName}</div>
            <div className='friendbuttonrow'>
                <div onClick={handleConfirm} className='confirmfriend'> Confirm</div>
                <div onClick={handleDelete} className='deletereq'>Delete</div>
            </div>
        </div>
    </div>
  ) : null
}

export default FriendItem