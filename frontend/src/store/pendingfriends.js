import csrfFetch from "./csrf";

export const RECEIVE_PENDINGFRIENDS = 'pendingfriends/RECEIVE_PENDINGFRIENDS'
export const RECEIVE_PENDINGFRIEND = 'pendingfriends/RECEIVE_PENDINGFRIEND'
export const REMOVE_PENDINGFRIEND = 'pendingfriends/REMOVE_PENDINGFRIEND'

const receivePendingFriends = (pendfriends) => {
    return{
        type: RECEIVE_PENDINGFRIENDS,
        pendfriends
    }
}

const receivePendingFriend = (pendingfriend) => {
    return{
        type: RECEIVE_PENDINGFRIEND,
        pendingfriend
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

export const getUserPends = (userId) => (state) => {
    return state.pendingfriends ? Object.values(state.pendingfriends).filter(pend => pend.frienderId === userId) : null
}
export const getSentPends = (userId) => (state) => {
    return state.pendingfriends ? Object.values(state.pendingfriends).filter(pend => pend.friendeeId === userId) : null
}
export const fetchPendingfriend = (pendingfriendId) => async(dispatch) => {
    const res = await csrfFetch(`/api/pendingfriends/${pendingfriendId}`)
} 

export const fetchPendFriends = () => async(dispatch) =>{
    const res = await csrfFetch(`/api/pendingfriends`)
    if(res.ok){
        const data = await res.json()
        dispatch(receivePendingFriends(data))
    }
}


export const createPendingfriend = (pendfriend) => async(dispatch) =>{
    const{friender_id,friendee_id} = pendfriend;
    const res = await csrfFetch(`/api/pendingfriends`,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            pendingfriend:{
                friender_id,
                friendee_id
            }
        })
    })
    if(res.ok){
        const data = await res.json()
        dispatch(receivePendingFriend(data))
        return data;
    }
}

export const deletePendingfriend = (pendfriendId) => async(dispatch) =>{
    const res = await csrfFetch(`api/pendingfriends/${pendfriendId}`,{
        method: 'DELETE'
    })
    if(res.ok){
        dispatch(removePendfriend(pendfriendId))
    }
}

const pendingfriendsReducer = (state={},action) => {
    let newState = {...state};
    switch(action.type){
        case RECEIVE_PENDINGFRIENDS:
            return {...action.pendfriends}
        case RECEIVE_PENDINGFRIEND:
            newState[action.pendingfriend.id] = action.pendingfriend
            return newState
        case REMOVE_PENDINGFRIEND:
            delete newState[action.pendfriendId]
            return newState;
        default:
            return state;
    }
}

export default pendingfriendsReducer