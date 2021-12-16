// Component for displaying a single comment for a post
const Comment = ({user, text}) => {
    return (
        <div className="comment">
            <p>user: {user}</p>
            <pre>
                <p>{text}</p>
            </pre>
        </div>
    )
}

export default Comment;