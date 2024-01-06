import { useState } from 'react'; 

const Home = () => {
    const [blogs,setBlogs] = useState(
        [
            {title:'Blog 1',body:'Blog1 body Blog1 body Blog1 Body',author:'blog1 author',id:1},
            {title:"Blog 2",body:"Blog2 body Blog2 body Blog2 body",author:'Blog2 author',id:2},
            {title:"Blog 3",body:"Blog3 body Blog3 body Blog3 body",author:'Blog3 author',id:3}
        ]
    )
    return ( 
        <div className="home">
           {blogs.map(blog=>(
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
            </div>
           ))}
        </div>
     );
}
 
export default Home;