const Comment = ({user, text}) => {
    return (
        // I know this is weird
        <div className="comment">
            <p>user: {user}</p>
            <pre>
                <p>{text}</p>
            </pre>
        </div>
    )
}

export default Comment;