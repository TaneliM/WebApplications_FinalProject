const Post = ({id, user, title, text}) => {

    // Component for displaying a post.
    const openPost = (e) => {
        // id is not provided when the post has already been opened.
        if (id) {
        window.location.href = "/post/" + id;
        }
    }

    return (
        <div className="post" onClick={openPost}>
            <p>user: {user}</p>
            <h4>{title}</h4>
            <pre>
                <p>{text}</p>
            </pre>
        </div>
    )
}

export default Post;