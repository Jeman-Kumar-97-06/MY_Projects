import {createContext,useReducer} from 'react';

export const PostContext = createContext();

export const postReducer = (state,action) => {
    switch (action.type) {
        case "SET_POSTS":
            return {posts:action.payload}
        case "CREATE_POST":
            return {posts:[action.payload,...state.posts]}
        case "DELETE_POST":
            return {posts:state.posts.filter(p=>p._id !== action.payload._id)}
        case "UPDATE_POST":
            const post_upd = state.posts.filter(p=>p._id === action.payload._id);
            const post_idx = state.posts.indexOf(post_upd[0]);
            state.posts.splice(post_idx,1,action.payload);
            return {
                posts : state.posts
            }
        default:
            return state;
    }
}

export const PostContextProvider = ({children})  => {
    const [state,dispatch] = useReducer(postReducer,{posts:null});
    return (
        <PostContext.Provider value={{...state,dispatch}}>
            {children}
        </PostContext.Provider>
    )
}