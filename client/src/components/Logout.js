// Component for handling logging out.
// Being logged in in this case means having a JWT that the api can verify as valid.
const Home = (user) => {
    localStorage.removeItem("Token");
    window.location.href = "/";

    return (
        <p>Logging out...</p>
    )
}

export default Home;