import csrfFetch from "./csrf";

export const RECEIVE_LIKES = 'likes/RECEIVE_LIKES'
export const RECEIVE_LIKE = 'likes/RECEIVE_LIKE'
export const REMOVE_LIKE = 'likes/REMOVE_LIKE'

const receiveLikes = (likes) => {
    return{
        type: RECEIVE_LIKES,
        likes
    }
}

const receiveLike = (like) => {
    return{
        type: RECEIVE_LIKE,
        like
    }
}

const removeLike = (likeId) => {
    return{
        type: REMOVE_LIKE,
        likeId
    }
}

export const getLikes = (state) => {
    return state.likes ? Object.values(state.likes) : []
}

export const getLike = (likeId) => (state) => {
    return state.likes ? state.likes[likeId] : null
}

export const fetchLikes = () => async(dispatch) => {
    const res = await csrfFetch('/api/likes')
    if(res.ok){
        const data = await res.json()
        dispatch(receiveLikes(data))
    }
}

export const fetchLike = (likeId) => async(dispatch) => {
    const res = await csrfFetch(`api/${likeId}`)
    if(res.ok){
        const data = await res.json()
        dispatch(receiveLike(data))
    }
}

export const createLike = (like) => async(dispatch) => {
    const {userId, likeableType,likeableId} = like;
    const res = await csrfFetch(`/api/likes`,{
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            like:{
                userId,
                likeableId,
                likeableType
            }
        })
    })
    if(res.ok){
        const data = await res.json();
        dispatch(receiveLike(data.like))
    }
}

export const deletePost = (likeId) => async(dispatch) => {
    const res = await csrfFetch(`api/likes/${likeId}`,{
        method: 'DELETE'
    })
    if(res.ok){
        dispatch(removeLike(likeId))
    }
}

const likesReducer = (state={},action) => {
    let newState = {...state};
    switch(action.type){
        case RECEIVE_LIKES:
            return {...action.likes}
        case RECEIVE_LIKE:
            newState[action.like.id] = action.like
            return newState;
        case REMOVE_LIKE:
            delete newState[action.likeId]
            return newState;
        default:
            return state
    }
}
export default likesReducer