const Home = (user) => {
    localStorage.removeItem("Token");
    window.location.href = "/";

    return (
        <p>Logging out...</p>
    )
}

export default Home;