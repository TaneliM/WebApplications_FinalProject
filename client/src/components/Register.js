import { useState } from "react"

function Register({setJwt, jwt, setUser}) {
    const [formData, setFormData] = useState({})

    const submit = (e) => {
        e.preventDefault()

        fetch("/api/user/register", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(formData),
            mode: "cors"
        })
            .then(response => response.json())
            .then(data => {
                if (data.errors) {
                    document.getElementById("error").innerHTML =  data.errors[0].param + ": " + data.errors[0].msg
                }
                if (data.success) {
                    window.location.href = "/login";
                }
            })

    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <h1>Register</h1>
            <div id="error" className="card-panel"></div>
            <form onSubmit={submit} onChange={handleChange}>
                <label>Username</label>
                <input type="text" name="username" />
                <label>Password</label>
                <input type="password" name="password" />
                <input type="submit" value="Register"/>
            </form>
        </div>
    )
}

export default Register;