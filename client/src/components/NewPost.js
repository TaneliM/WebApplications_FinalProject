import { useState } from "react"

// Component for making a new post.
const NewPost = (user) => {
    const [formData, setFormData] = useState({})

    // Checks if the user is logged in and redirects them off of the page if not.
    // There is most likely a better way to do this but the api blocks making posts without a valid JWT anyway.
    if (!localStorage.getItem("Token")) {
        window.location.href = "/";
    }

    const submit = (e) => {
        e.preventDefault()

        // Makes a call to the backend api to make the new post.
        fetch("/api/post/new", {
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
                window.location.href = "/";
            })
    }

    // Updates the value when the user types the post.
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    // Form for writing and sending the post.
    return (
        <div>
            <h2>New post</h2>
            <form onSubmit={submit} onChange={handleChange}>
                <label>Title</label>
                <textarea type="text" name="title" />
                <label>Post</label>
                <textarea type="text" name="text" />
                <input type="submit" value="Post"/>
            </form>
        </div>
    )
}

export default NewPost;