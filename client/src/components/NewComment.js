import { useState } from "react"

const NewPost = (user) => {
    const [formData, setFormData] = useState({})

    if (!localStorage.getItem("Token")) {
        window.location.href = "/";
    }

    const submit = (e) => {
        e.preventDefault()
        formData.id = window.location.pathname.split("/")[2]

        fetch("/api/post/comment/new", {
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
                window.location.reload();
            })
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

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