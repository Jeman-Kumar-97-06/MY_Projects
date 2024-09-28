const PostDetails = ({post}) => {
    return (
        <div className="each_post">
            <p>{post.post_body}</p>
            <p>{post.post_img}</p>
            <p>{post.post_likes}</p>
            <p>{post.post_usr}</p>
            <hr/>
        </div>
    )
};

export default PostDetails;