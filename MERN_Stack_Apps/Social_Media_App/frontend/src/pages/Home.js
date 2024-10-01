import { useEffect } from "react"
import PostInDetail from "../components/PostInDetail";
import { usePostContext } from "../hooks/usePostContext";
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
    const {posts,dispatch} = usePostContext();
    const {user}           = useAuthContext();
    useEffect(()=>{
        const fetchPosts = async () => {
            const resp = await fetch('/api/posts',{headers:{"Authorization":`BearerToken ${user.token}`}});
            const json = await resp.json();
            if (resp.ok) {
                dispatch({type:"SET_POSTS",payload:json});
            }
        }
        if(user){
            fetchPosts();
        }
        
    },[dispatch,user])
    return (
        <div className="home_div">
            {posts && posts.map(
                p => (<PostInDetail post={p}/>)
            )}
            
        </div>
    )
}

export default Home;