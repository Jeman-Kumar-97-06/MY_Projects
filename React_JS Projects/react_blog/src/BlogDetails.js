import React from 'react';
import {useParams,redirect} from 'react-router-dom';
import useFetch from './customUseFetchHook';

const BlogDetails = () => {
    const {id} = useParams();
    const {data:blog, error,isPending} = useFetch('http://localhost:1234/blogs/'+id);
    const handleClick = () => {
        fetch('http://localhost:1234/blogs/'+blog.id,{
            method:"DELETE"
        }).then(()=>{
            return redirect('/')
        })
    }
    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                    <h4>Written by - {blog.author}</h4>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
        )
}
export default BlogDetails;