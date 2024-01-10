const BlogList = (props) => {
    const blogs = props.blogs;
    const title = props.title;
    return (
        <div className="blog-list">
            {blogs.map(blog=>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <button onClick={()=>props.handleD(blog.id)}>Delete Blog</button>
                </div>
            ))}
        </div>
    )
}
export default BlogList;
