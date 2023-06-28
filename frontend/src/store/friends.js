import csrfFetch from "./csrf";
import { receivePost } from "./posts";

export const RECEIVE_FRIENDS = 'friends/RECEIVE_FRIENDS'
export const RECEIVE_FRIEND = 'friends/RECEIVE_FRIEND'
export const REMOVE_FRIEND = 'friends/REMOVE_FRIEND'

const receiveFriends = (friends) => {
    return{
        type: RECEIVE_FRIENDS,
        friends
    }
}

const receiveFriend = (friend) => {
    return{
        type: RECEIVE_FRIEND,
        friend
    }
}

const removefriend = (friendId) => {
    return{
        type: REMOVE_FRIEND,
        friendId
    }
}

export const getFriends = (state) => {
    return state.friends ? Object.values(state.friends) : []
}

export const getFriend = (friendId) => (state) => {
    return state.friends ? state.friends[friendId] : null
}

export const getUsers = (userId) => (state) => {
    return state.friends ? Object.values(state.friends).filter( friend => friend.frienderId === userId) : null
}

export const fetchfriend = (friendId) => async(dispatch) => {
    const res = await csrfFetch(`/api/friends/${friendId}`)
} 

export const fetchFriends = () => async(dispatch) =>{
    const res = await csrfFetch(`/api/friends`)
    if(res.ok){
        const data = await res.json()
        dispatch(receiveFriends(data))
    }
}
export const getUserFriends = (userId) => (state) => {
    return state.friends ? Object.values(state.friends).filter(friend => friend.user_id == userId|| friend.friend_id == userId) : null
}


export const createfriend = (friend) => async(dispatch) =>{
    const{user_id,friend_id} = friend;
    const res = await csrfFetch(`/api/friends`,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            friend:{
                user_id,
                friend_id
            }
        })
    })
    if(res.ok){
        const data = await res.json()
        dispatch(receiveFriend(data))
        return data;
    }
}

const friendsReducer = (state={},action) => {
    let newState = {...state};
    switch(action.type){
        case RECEIVE_FRIENDS:
            return {...action.friends}
        case RECEIVE_FRIEND:
            newState[action.friend.id] = action.friend
            return newState
        case REMOVE_FRIEND:
            delete newState.friends[action.friendId]
            return newState;
        default:
            return state;
    }
}

export default friendsReducer