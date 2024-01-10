import { useState,useEffect } from 'react'; 
import BlogList from './BlogList';
const Home = () => {
    const [blogs,setBlogs] = useState(
        [
            {title:'Blog 1',body:'Blog1 body Blog1 body Blog1 Body',author:'blog1 author',id:1},
            {title:"Blog 2",body:"Blog2 body Blog2 body Blog2 body",author:'Blog2 author',id:2},
            {title:"Blog 3",body:"Blog3 body Blog3 body Blog3 body",author:'Blog3 author',id:3}
        ]
    )
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id!=id);
        setBlogs(newBlogs)
    }
    useEffect(()=>{
        console.log(blogs);
    })
    return ( 
        <div className="home">
           <BlogList title='All Blogs' blogs={blogs} handleD = {handleDelete}/>
        </div>
     );
}
 
export default Home;