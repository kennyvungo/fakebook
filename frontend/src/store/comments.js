import csrfFetch from "./csrf";
import {receivePost} from "./posts"

export const RECEIVE_COMMENTS = 'comments/RECEIVE_COMMENTS'
export const RECEIVE_COMMENT = 'comments/RECEIVE_COMMENT'
export const REMOVE_COMMENT = 'comments/REMOVE_COMMENT'

const receiveComments = (comments) => {
    return{
        type: RECEIVE_COMMENTS,
        comments
    }
} 

const receiveComment = (comment) => {
    return {
        type: RECEIVE_COMMENT,
        comment
    }
}

const removeComment = (commentId) => {
    return{
        type: REMOVE_COMMENT,
        commentId
    }
}

export const getComments = (store) => {
    return store.comments ? Object.values(store.comments) : []
}

export const getComment = (commentId) => (store) => {
    return store.comments ? store.comments[commentId] : null;
}

export const getPostComments = (postId) => (store) => {
    return Object.values(store.comments).filter((com) => com.id === postId)
}
export const fetchComments = () => async(dispatch) => {
    const res = await csrfFetch(`/api/comments`)
    if(res.ok){
        const data = await res.json()
        dispatch(receiveComments(data))
    }
}

export const createComment = (comment) => async(dispatch) => {
    const{user_id,post_id,body} = comment;
    const res = await csrfFetch(`/api/comments`,{
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            comment:{
                user_id,
                post_id,
                body
            }
        })
    })
    if(res.ok){
        const data = await res.json()
        dispatch(receiveComment(data.comment))
        dispatch(receivePost(data.post))
    }
}


const commentsReducer = (state={},action) => {
    let newState = {...state};
    switch(action.type){
        case RECEIVE_COMMENTS:
            return {...action.comments}
        case RECEIVE_COMMENT:
            newState[action.comment.id] = action.comment
            return newState;
        case REMOVE_COMMENT:
            delete newState.comments[action.commentId]
            return newState;
        default:
            return state;
    }
}

export default commentsReducer