import csrfFetch from "./csrf";
import { REMOVE_POST } from "./posts";

export const RECEIVE_COMMENTS = 'comments/RECEIVE_COMMENTS'
export const RECEIVE_COMMENT = 'comments/RECEIVE_COMMENT'
export const REMOVE_COMMENT = 'comments/REMOVE_COMMENT'

const receiveComments = (comments) => {
    return{
        type: RECEIVE_COMMENTS,
        post
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

export const getComments = (state) => {
    return state.comments ? Object.values(state.comments) : []
}

export const getComment = (postId) => (state) => {
    return state.coments ? state.comments[postId] : null;
}

export const fetchComments = () => async(dispatch) => {
    const res = await csrfFetch(`/api/posts`)
    if(res.ok){
        const data = await res.json()
        dispatch(receiveComments(data))
    }
}

export const createComment = (comment) => async(dispatch) => {
    const{userId,postId,body} = comment;
    const res = await csrfFetch(`/api/comments`,{
        method: 'POST',
        body: JSON.stringify({
            comment:{
                userId,
                postId,
                body
            }
        })
    })
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