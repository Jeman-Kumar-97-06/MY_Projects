import { useEffect, useState } from "react";

const Home = () => {
    const [prompt,setPrompt] = useState('');
    const [prompts,setPrompts] = useState([]);

    useEffect(()=>{
        fetchRecentPrompts = async () => {
            const resp = await fetch('/api/prompts',{headers:{"Authorization":`BearerToken ${user.token}`}});
            const json = await resp.json();
            if (resp.ok){
                setPrompts(json)
            }
        };
        fetchRecentPrompts();
    },[])

    const handlePrompt = () => {

    }

    return (
        <div className='home_page'>
            <input type='text' placeholder='Type in your prompt' value={prompt} onChange={e=>{setPrompt(e.target.value)}}/>
            <button>Send Prompt</button>
        </div>
    )
}

export default Home;