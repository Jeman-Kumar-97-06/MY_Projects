import { useEffect,useState } from "react"
import PostInDetail from "../components/PostInDetail";
import { usePostContext } from "../hooks/usePostContext";
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
    const [error,setError] = useState('');
    const [body,setBody]   = useState('');
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


    const createPost = async (e) => {
        e.preventDefault();
        if (!user){
            setError("You must be logged in!")
        }
        if (user)
        {const new_Post = {body:body,img:null,likes:null};
        const resp     = await fetch('/api/posts',{method:"POST",body:JSON.stringify(new_Post),headers:{"Content-Type":"application/json",'Authorization':`Bearer ${user.token}`}})
        console.log(user.token)
        const json     = await resp.json();
        if(!resp.ok){
            setError(json.error);
        }
        if(resp.ok){
            setError(null);
            setBody('');
            dispatch({type:'CREATE_POST',payload:json});
        }}
    }

    return (
        <div className="home_div" onSubmit={createPost}>
            <form className='new_post_div'>
                <textarea className='new_post_body_div' cols="30" rows="10" onChange={e=>{setBody(e.target.value)}} value={body}/>
                <button type="submit">Post</button>
                {error && <div className="error">{error}</div>}
            </form>
            {posts && posts.map(
                p => (<PostInDetail post={p}/>)
            )}
            
        </div>
    )
}

export default Home;