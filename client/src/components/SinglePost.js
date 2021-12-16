import {useEffect, useState} from "react"
import Comment from "./Comment"
import Post from "./Post"
import NewComment from "./NewComment"

// A component to display a single post and its comments on a single page.
const SinglePost = () => {
    const [post, setPost] = useState([])
    const [comments, setComments] = useState([])

    useEffect(() => {
        // gets the post's id from the url.
        // There is most likely a better way to do this.
        const id = window.location.pathname.split("/")[2]

        // Makes an api call to get the post contents and its comments.
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

    // Checks if the user is logged in to display the form for making a new comment.
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