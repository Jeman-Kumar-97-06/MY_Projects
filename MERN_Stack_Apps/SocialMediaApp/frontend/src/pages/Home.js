import { useEffect, useState } from "react";
import PostDetails from "../components/postDetails";

const Home = () => {
    const [posts,setPosts] = useState(null);
    useEffect(()=>{
        const fetchPosts = async () => {
            const posts = await fetch('/api/posts');
            const json  = await posts.json();
            if (posts.ok) {
                setPosts([...json])
            }
        }
        fetchPosts();
    },[])
    return (
        <div className="home_page">
            <h1>Hi World!</h1>
            {posts && posts.map((p)=>(
               <PostDetails post={p}/>
            ))}
        </div>
    )
}

export default Home;