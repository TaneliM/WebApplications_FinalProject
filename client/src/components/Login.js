import { useState } from "react"

function Login(props) {
    const [formData, setFormData] = useState({})

    const submit = (e) => {
        e.preventDefault()

        fetch("/api/user/login", {
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
                    document.getElementById("error").innerHTML =  data.errors
                }
                if (data.token) {
                    props.setJwt(data.token)
                    props.setUser(JSON.parse(Buffer.from(data.token.split(".")[1], "base64").toString()))
                    localStorage.setItem('Token', data.token);
                    window.location.href = "/";
                }
            })
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <h1>Login</h1>
            <div id="error" className="card-panel"></div>
            <form onChange={handleChange}>
                <label>Username</label>
                <input type="text" name="username" />
                <label>Password</label>
                <input type="password" name="password" />
                <input type="button" onClick={submit} value="Login"/>
            </form>
        </div>
    )
}

export default Login;