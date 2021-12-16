import {useEffect, useState} from "react"
import Post from "./Post"

// Component for displaying a list of all posts.
const PostsList = () => {
    const [data, setData] = useState([])

    // Call to the backend api to provide all posts.
    useEffect(() => {
        fetch("/api/post/all")
            .then(response => response.json())
            .then(json => setData(json.posts))
    }, [])

    // If no posts are provided.
    if (data.length == 0) {
        return (
        <div>
            <h6 >No posts yet...</h6>
        </div>
        )
    }
    return (
        <div>
            <ul>
                {data.map((post) => (
                    <Post key={post._id} id={post._id} user={post.user} title={post.title} text={post.text}/>
                ))}
            </ul>
        </div>
    )
}

export default PostsList;