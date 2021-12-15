const Post = ({user, title, text}) => {
    return (
        // I know this is weird
        <div className="post">
            <p>user: {user}</p>
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    )
}

export default Post;