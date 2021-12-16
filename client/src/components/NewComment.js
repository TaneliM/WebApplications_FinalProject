import { useState } from "react"

// Component for leaving a comment to a post.
const NewPost = (user) => {
    const [formData, setFormData] = useState({})

    if (!localStorage.getItem("Token")) {
        window.location.href = "/";
    }

    const submit = (e) => {
        e.preventDefault()
        formData.id = window.location.pathname.split("/")[2]

        // Makes a call to the backend api to post the comment.
        fetch("/api/post/comment/new", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                // The token is provided to verify that the user is logged in.
                "Authorization": "Auth " + localStorage.getItem("Token") 
            },
            body: JSON.stringify(formData),
            mode: "cors"
        })
            .then(response => response.json())
            .then(data => {
                window.location.reload();
            })
    }

    // Updates the value when the user types the comment.
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    // Form for writing and sending the comment.
    return (
        <div>
            <form onSubmit={submit} onChange={handleChange}>
                <label>New comment</label>
                <textarea type="text" name="text" />
                <input type="submit" value="Comment"/>
            </form>
        </div>
    )
}

export default NewPost;