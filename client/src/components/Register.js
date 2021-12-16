import { useState } from "react"

// Component for displaying the Register page with client side functionality.
function Register({setJwt, jwt, setUser}) {
    const [formData, setFormData] = useState({})

    const submit = (e) => {
        e.preventDefault()

        // Makes a call to the backend api to make a new user account.
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
                // Displays the errors sent by the api.
                if (data.errors) {
                    document.getElementById("error").innerHTML =  data.errors[0].param + ": " + data.errors[0].msg
                }
                // Redirects to the login page.
                if (data.success) {
                    window.location.href = "/login";
                }
            })

    }

    // Updates the value when the user types the credentials.
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    // The register page elements with a form to provide credentials to register.
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