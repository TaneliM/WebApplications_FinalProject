const Post = ({id, user, title, text}) => {

    
    const openPost = (e) => {
        if (id) {
        window.location.href = "/post/" + id;
        }
    }

    return (
        // I know this is weird
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