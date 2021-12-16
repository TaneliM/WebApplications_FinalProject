import { useState } from "react"

// Component for displaying the login page with client side functionality.
function Login(props) {
    const [formData, setFormData] = useState({})

    const submit = (e) => {
        e.preventDefault()

        // Makes a call to the backend api to login the user.
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
                // Displays the errors sent by the api.
                if (data.errors) {
                    console.log(data.errors)
                    document.getElementById("error").innerHTML =  data.errors
                }
                // Stores JWT in local storage and redirects to the home page.
                if (data.token) {
                    props.setJwt(data.token)
                    props.setUser(JSON.parse(Buffer.from(data.token.split(".")[1], "base64").toString()))
                    localStorage.setItem('Token', data.token);
                    window.location.href = "/";
                }
            })
    }

    // Updates the value when the user types the credentials.
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    // The login page elements with a form to provide credentials to login.
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