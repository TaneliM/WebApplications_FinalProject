import {useEffect, useState} from "react"
import Comment from "./Comment"
import Post from "./Post"
import NewComment from "./NewComment"

const SinglePost = () => {
    const [post, setPost] = useState([])
    const [comments, setComments] = useState([])

    useEffect(() => {
        const id = window.location.pathname.split("/")[2]

        fetch("/api/post/" + id, {
            method: "GET"
        })
            .then(response => response.json())
            .then(json => {
                setPost(json.post)
                setComments(json.comments)
            })
            console.log();
    }, [])

    if (localStorage.getItem("Token")) {
        return (
            <div>
                {<Post user={post.user} title={post.title} text={post.text}/>}
                <NewComment />
                <ul>
                    {comments.map((comment) => (
                        <Comment key={comment._id} user={comment.user} text={comment.text}/>
                    ))}
                </ul>
            </div>
        )
    }
    return (
        <div>
            {<Post user={post.user} title={post.title} text={post.text}/>}
            <ul>
                {comments.map((comment) => (
                    <Comment key={comment._id} user={comment.user} text={comment.text}/>
                ))}
            </ul>
        </div>
    )
}

export default SinglePost;