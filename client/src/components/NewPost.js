import { useState } from "react"

const NewPost = (user) => {
    const [formData, setFormData] = useState({})

    if (!localStorage.getItem("Token")) {
        window.location.href = "/";
    }

    const submit = (e) => {
        e.preventDefault()

        fetch("/api/post/new", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
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

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    
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