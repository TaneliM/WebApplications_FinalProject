import {useEffect, useState} from "react"
import Post from "./Post"

const PostsList = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("/api/post/all")
            .then(response => response.json())
            .then(json => setData(json.posts))
    }, [])
    return (
        <div>
            <ul>
                {data.map((post) => (
                    <Post key={post._id} user={post.user} title={post.title} text={post.text}/>
                    ))}
            </ul>
        </div>
    )
}

export default PostsList;