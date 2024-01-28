
const BlogList = (props) => {
    const blogs = props.blogs;
    const handleD = props.handleD;
    return (
        <div className="all-blogs">
            {blogs.map(blog=>(
                <div className="each-blog">
                    <h3>{blog.title}</h3>
                    <p className="blog-body">{blog.body}</p>
                    <h5 className="blog-author">-Writter by : {blog.author}</h5>
                    <button onClick={()=>handleD(blog.id)}>Delete Blog</button>
                </div>
            ))}
        </div>
        )
}
export default BlogList;