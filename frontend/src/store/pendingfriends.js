import csrfFetch from "./csrf";
import { receivePost } from "./posts";

export const RECEIVE_PENDINGFRIENDS = 'pendingfriends/RECEIVE_PENDINGFRIENDS'
export const RECEIVE_PENDINGFRIEND = 'pendingfriends/RECEIVE_PENDINGFRIEND'
export const REMOVE_PENDINGFRIEND = 'pendingfriends/REMOVE_PENDINGFRIEND'

const receivePendingFriends = (pendfriends) => {
    return{
        type: RECEIVE_PENDINGFRIENDS,
        pendfriends
    }
}

const receivePendingFriend = (pendfriend) => {
    return{
        type: RECEIVE_PENDINGFRIEND,
        pendfriend
    }
}

const removePendfriend = (pendfriendId) => {
    return{
        type: REMOVE_PENDINGFRIEND,
        pendfriendId
    }
}

export const getPendFriends = (state) => {
    return state.pendfriends ? Object.values(state.pendfriends) : []
}

export const getPendFriend = (pendfriendId) => (state) => {
    return state.pendfriends ? state.pendfriends[pendfriendId] : null
}

export const fetchPendingfriend = (pendingfriendId) => async(dispatch) => {
    const res = await csrfFetch(`/api/pendingfriends/${pendingfriendId}`)
} 

export const createPendingfriend = ({friender_id,friendee_id}) => async(dispatch) =>{
    // const{friender_id,friendee_id} = pendingFriend;
    const res = await csrfFetch(`/api/pendingfriends`,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            pendingFriend:{
                friender_id,
                friendee_id
            }
        })
    })
    if(res.ok){
        const data = await res.json()
        dispatch(receivePendingFriend(data.comment))
        dispatch(receivePost(data.post))
        return data;
    }
}

const pendingfriendsReducer = (state={},action) => {
    let newState = {...state};
    switch(action.type){
        case RECEIVE_PENDINGFRIENDS:
            return {...action.pendfriends}
        case RECEIVE_PENDINGFRIEND:
            return newState[action.pendfriend.id] = action.pendfriend
        case REMOVE_PENDINGFRIEND:
            delete newState.pendingfriends[action.pendfriendId]
            return newState;
        default:
            return state;
    }
}

export default pendingfriendsReducer