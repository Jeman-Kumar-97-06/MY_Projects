
const BlogList = (props) => {
    const blogs = props.blogs;
    return (
        <div className="all-blogs">
            {blogs.map(blog=>(
                <div className="each-blog" key={blog.id}>
                    <h3>{blog.title}</h3>
                    <p className="blog-body">{blog.body}</p>
                    <h5 className="blog-author">-Writter by : {blog.author}</h5>
                </div>
            ))}
        </div>
        )
}
export default BlogList;