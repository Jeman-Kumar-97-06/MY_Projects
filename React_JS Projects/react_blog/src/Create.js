import React from 'react';
import {useState} from 'react';
import {redirect} from 'react-router-dom';
const Create = () => {
    const [title,setTitle] = useState('');
    const [body,setBody]   = useState('');
    const [author,setAuthor] = useState('mario');
    const [isPending,setIsPending] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("dnoe");
        const blog = {title,body,author};
        setIsPending(true);
        
        fetch('http://localhost:1234/blogs',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            setIsPending(false);
            redirect('/');
        })
    }
    return (
        <div className="createBlog">
            <h2>Add a new blog:-</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <label>Blog Body:</label>
                <textarea required value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
                <label>Blog Author:</label>
                <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
                    <option value="Doom_Guy_26">Doom_Guy_26</option>
                    <option value="Vaga_Bond">Vaga_Bond</option>
                    <option value="Surekha">Surekha</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog ...</button>}
            </form>
        </div>
    )
}

export default Create;