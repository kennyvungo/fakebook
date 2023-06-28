import csrfFetch from "./csrf";
import { receivePost } from "./posts";

export const RECEIVE_FRIENDS = 'friends/RECEIVE_FRIENDS'
export const RECEIVE_FRIEND = 'friends/RECEIVE_FRIEND'
export const REMOVE_FRIEND = 'friends/REMOVE_FRIEND'

const receiveFriends = (pendfriends) => {
    return{
        type: RECEIVE_FRIENDS,
        pendfriends
    }
}

const receiveFriend = (friend) => {
    return{
        type: RECEIVE_FRIEND,
        friend
    }
}

const removePendfriend = (pendfriendId) => {
    return{
        type: REMOVE_FRIEND,
        pendfriendId
    }
}

export const getPendFriends = (state) => {
    return state.pendfriends ? Object.values(state.pendfriends) : []
}

export const getPendFriend = (pendfriendId) => (state) => {
    return state.pendfriends ? state.pendfriends[pendfriendId] : null
}

export const getUserPends = (userId) => (state) => {
    return state.friends ? Object.values(state.friends).filter(pend => pend.frienderId === userId) : null
}

export const fetchfriend = (friendId) => async(dispatch) => {
    const res = await csrfFetch(`/api/friends/${friendId}`)
} 

export const fetchPendFriends = () => async(dispatch) =>{
    const res = await csrfFetch(`/api/friends`)
    if(res.ok){
        const data = await res.json()
        dispatch(receiveFriends(data))
    }
}


export const createfriend = (pendfriend) => async(dispatch) =>{
    const{friender_id,friendee_id} = pendfriend;
    const res = await csrfFetch(`/api/friends`,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            friend:{
                friender_id,
                friendee_id
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
            return {...action.pendfriends}
        case RECEIVE_FRIEND:
             newState[action.friend.id] = action.friend
             return newState
        case REMOVE_FRIEND:
            delete newState.friends[action.pendfriendId]
            return newState;
        default:
            return state;
    }
}

export default friendsReducer