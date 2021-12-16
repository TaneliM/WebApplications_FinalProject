import {useEffect, useState} from "react"
import Post from "./Post"

const PostsList = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("/api/post/all")
            .then(response => response.json())
            .then(json => setData(json.posts))
    }, [])

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