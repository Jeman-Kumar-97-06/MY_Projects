const PostInDetail = ({post}) => {
    return (
        <div className="post_detail_div">
            <p>{post.body}</p>
            <p>{post.img}</p>
            <p>{post.likes}</p>
        </div>
    )
};

export default PostInDetail;