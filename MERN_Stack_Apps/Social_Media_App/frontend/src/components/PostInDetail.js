import { useState } from "react";
import { usePostContext } from "../hooks/usePostContext";
import { useAuthContext } from "../hooks/useAuthContext";

const PostInDetail = ({post}) => {

    const [body,setBody]   = useState(post.body);
    const [error,setError] = useState(null);

    const {user}           = useAuthContext();
    const {dispatch}       = usePostContext();

    const handleDel    = async () => {
        if (!user) {
            setError("You must be logged in")
            return;
        }
        if (user.user._id !== post.usr){
            alert("You can't delete other users' posts");
            return;
        }
        const resp = await fetch('/api/posts/'+post._id,{method:'DELETE',headers:{'Authorization':`Bearer ${user.token}`}});
        const json = await resp.json();
        if(resp.ok){
            dispatch({type:"DELETE_POST",payload:json})
        }
    }

    const handleUpdate = async () => {
        if (!user) {
            setError("You must be Logged In!");
            return;
        }
        const upd_post = {_id:post._id,body:body};
        const resp     = await fetch('/api/posts/'+post._id,{method:"PATCH",body:JSON.stringify(upd_post),headers:{"Content-Type":"application/json","Authorization":`BearerToken ${user.token}`}});
        const json     = await resp.json();
        if (!resp.ok) {
            setError(json.error);
        }
        if (resp.ok) {
            setError(null);
            console.log("Post Updated!")
            dispatch({type:"UPDATE_POST",payload:json});
            document.querySelector('#updateBtn'+post._id).style.dispay='none'
        }
    }

    return (
        <div className="post_detail_div">
            <textarea onChange={e=>{document.querySelector('#updateBtn'+post._id).style.display='inline-block';setBody(e.target.value)}} value={body}/><br/>
            <p>{post.img}</p>
            
            <div className="fav_del_upd_post">
                <div className="likes">
                    <span>{post.likes}</span>
                    <span class="material-symbols-outlined">favorite</span>
                </div>
                <span onClick={handleDel} className="del_note_btn" class="material-symbols-outlined">delete</span>
                <span id={`updateBtn${post._id}`} style={{display:'none'}} onClick={handleUpdate} class="material-symbols-outlined">upload</span>
            </div>
            
            {error && <div className="error">{error}</div>}
            
            <hr/>
            {/* <p>{post.body}</p>
            
            
            <button>Update</button>
            <button>Delete</button>
            <button>Like</button> */}
        </div>
    )
};

export default PostInDetail;