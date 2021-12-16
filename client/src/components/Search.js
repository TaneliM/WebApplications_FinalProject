import {useState} from "react"
import PostsList from "./PostsList"

// Unfinished, unused component to search for posts
const Search = () => {
    const [formData, setFormData] = useState({})

    const submit = (e) => {
        e.preventDefault()

        fetch("/api/post/all", {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(formData),
            mode: "cors"
        })
            .then(response => response.json())
            .then(data => {
                console.log(data) 
            })
    }
    
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <p>Search is not currently implemented</p>
            <form onSubmit={submit} onChange={handleChange}>
                <input type="text" name="search"></input>
                <input type="submit" value="Search"/>
            </form>
            <PostsList/>
        </div>
    )
}

export default Search;