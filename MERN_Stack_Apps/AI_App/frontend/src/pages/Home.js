import { useEffect, useState } from "react";
import { useAuthContext } from '../hooks/useAuthContext';
import {usePromptsContext} from '../hooks/usePromptsContext';

const Home = () => {
    const [error,setError] = useState(null)
    const [promptRes,setPromptRes] = useState(null);
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

    const handlePrompt = async (p) => {
        const resp = await fetch('/api/prompts',{method:"POST",
                                                 body:JSON.stringify({prompt:p}),
                                                 headers:{'Content-Type':'application/json',"Authorization":`BearerToken ${user.token}`}});
        const json = await resp.json();
        if (resp.ok){
            setError(null)
            setPromptRes(json);
        }
        if (!resp.ok){
            setError(json.error);
            setPromptRes(null);
        }
    }

    return (
        <div className='home_page'>
            <div className="form_button">
                <input type='text' placeholder='Type in your prompt' value={prompt} onChange={e=>{setPrompt(e.target.value)}}/>
                <button onClick={e=>handlePrompt(prompt)}><span class="material-symbols-outlined">send</span></button>
            </div>
            
            <fieldset className="recent_prompts">
                <legend>Your Recent Prompts:</legend>
                {prompts && prompts.map(
                    p => (<button className="recents" key={p._id} onClick={e=>{setPrompt(e.target.value);handlePrompt(e.target.innerText)}}>{p.prompt}</button>)
                )}
            </fieldset>
            <fieldset className="prompt_res">
                <legend>Prompt Response</legend>
                {promptRes ? <div className='prompt_response'>{promptRes.result}</div> : <div className="error">{error}</div>}
            </fieldset>
        </div>
    )
}

export default Home;