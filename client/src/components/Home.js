import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import PostsList from "./PostsList";

// Component for displaying the home page content.
const Home = ({user}) => {
    // Checks for the token in local storage to render the buttons on the app bar differently.
    // There is probably a better solution but this is only used for rendering the page and it works.
    if (localStorage.getItem("Token")) {
        return (
            <div>
                <h2>Welcome to CodeShare {user.username}</h2>
                <Button component={Link} to="/newpost" color="primary">Make a new post</Button>
                <h3>Posts</h3>
                <PostsList/>
            </div>
        )
    }
    return (
        <div>
            <h2>Welcome to CodeShare {user.username}</h2>
            <h3>Posts</h3>
            <PostsList/>
        </div>
    )
}

export default Home;