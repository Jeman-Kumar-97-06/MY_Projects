import {useState} from 'react';
const Home = () => {
    const [blogs,setBlogs] = useState(
        [
            {title:"Blog 1",body:"Blog 1 body content",author:'doomGuy',id:1},
            {title:"Blog 2",body:"Blog 2 body content",author:'doomGuy',id:2},
            {title:"Blog 3",body:"Blog 3 body content",author:'necromorph',id:3}
        ]
    )
    return (
        <div className="home">
            <h2>Homepage</h2>
            <p></p>
            {blogs.map((blog)=>
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <h3>{blog.body}</h3>
                    <p>-Written by {blog.author}</p>
                </div>
            )}
        </div>
    )
}
export default Home;