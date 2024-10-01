const PostInDetail = ({post}) => {
    return (
        <div className="post_detail_div">
            <p>{post.body}</p>
            <p>{post.img}</p>
            <p>{post.likes}</p>
            <button>Update</button>
            <button>Delete</button>
            <button>Like</button>
        </div>
    )
};

export default PostInDetail;