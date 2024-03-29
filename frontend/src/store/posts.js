import csrfFetch from "./csrf";

export const RECEIVE_POSTS = 'posts/RECEIVE_POSTS'
export const RECEIVE_POST = 'posts/RECEIVE_POST'
export const REMOVE_POST = 'posts/REMOVE_POST'

const receivePosts = (posts) => {
    return{
        type:RECEIVE_POSTS,
        posts
    }
}
export const receivePost = (post) => {
    return {
        type: RECEIVE_POST,
        post
    }
}
const removePost = (postId) => {
    return {
        type: REMOVE_POST,
        postId
    }
}

export const getPosts =(state) => {
    return state.posts ? Object.values(state.posts) : []
}

export const getWallPosts =(userId) => (state) => {
    return state.posts ? Object.values(state.posts).filter((post) => post.userId === userId) : []
}

export const getPost =(postId) => (state) => {
    return state.posts ? state.posts[postId] :null
}

export const fetchPosts = () => async(dispatch) =>{
    const res = await csrfFetch('/api/posts')
    if(res.ok){
        const data = await res.json()
        dispatch(receivePosts(data))
    }
}
export const fetchPost = (postId) => async(dispatch) =>{
    const res = await csrfFetch(`/api/posts/${postId}`)
    if(res.ok){
        const data = await res.json()
        dispatch(receivePost(data))
    }
}

export const fetchCommentNumber = (postId) => async(dispatch) => {
    const res = await csrfFetch(`/api/posts/${postId}`)
    if(res.ok){
        const data = await res.json()
        return data;
    }
}

export const createPost = (formData) => async(dispatch) =>{
    const res = await csrfFetch(`/api/posts`,{
        method: 'POST',
        body: formData
        })
    if(res.ok){
        const post = await res.json()
        dispatch(receivePost(post))
        return post;
    }
}

export const updatePost = (formData,postId) => async(dispatch) =>{
    // const {userId,body} = post;
    const res = await csrfFetch(`/api/posts/${postId}`,{
        method: 'PATCH',
        body: formData
    })
    if(res.ok){
        const post = await res.json()
        dispatch(receivePost(post))
        return post;
    }
}

export const deletePost = (postId) => async(dispatch) => {
    const res = await csrfFetch(`/api/posts/${postId}`,{
        method: 'DELETE',
    })
    if(res.ok){
        dispatch(removePost(postId))
    }
}

const postsReducer = (state={},action) => {
    let newState = {...state};
    switch(action.type){
        case RECEIVE_POSTS:
            return {...action.posts}
        case RECEIVE_POST:
            if(action.post.updateLikes){
                newState[action.post.id].numLikes = action.post.numLikes
            }
            else if(action.post.updateComments){
                newState[action.post.id].numComments = action.post.numComments
            }
            else{
                newState[action.post.id] = action.post
            }
            return newState;
        case REMOVE_POST:
            delete newState[action.postId]
            return newState;
        default:
            return state
    }
}
export default postsReducer