import { useEffect, useState } from "react";
import { useAuthContext } from '../hooks/useAuthContext';
import {usePromptsContext} from '../hooks/usePromptsContext';

const Home = () => {
    const [prompt,setPrompt] = useState('');
    const {user} = useAuthContext();
    const {prompts,dispatch} = usePromptsContext();

    useEffect(()=>{
        const fetchRecentPrompts = async () => {
            const resp = await fetch('/api/prompts',{headers:{"Authorization":`BearerToken ${user.token}`}});
            const json = await resp.json();
            if (resp.ok){
                dispatch({type:"SET_PROMPTS",payload:json})
            }
        };
        if (user){
            fetchRecentPrompts();
        }
        
    },[dispatch,user])

    const handlePrompt = async () => {
        const resp = await fetch('/api/prompts',{method:"POST",
                                                 body:JSON.stringify({prompt}),
                                                 headers:{'Content-Type':'application/json',"Authorization":`BearerToken ${user.token}`}});
        const json = await resp.json();
        console.log(json)
    }

    return (
        <div className='home_page'>
            <input type='text' placeholder='Type in your prompt' value={prompt} onChange={e=>{setPrompt(e.target.value)}}/>
            <button onClick={handlePrompt}>Send Prompt</button>
            <h4>Your Recent Prompts:</h4>
            <div className="recent_prompts">
                {prompts && prompts.map(
                    p => (<button key={p._id} onClick={e=>{setPrompt(e.target.value)}}>{p.prompt}</button>)
                )}
                
            </div>
        </div>
    )
}

export default Home;