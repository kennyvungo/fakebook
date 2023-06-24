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
    const {userId, likeableType,likeableId} = like



}