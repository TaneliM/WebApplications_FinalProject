import {Link} from "react-router-dom"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Suspense} from "react";

const Header = () => {
    if (localStorage.getItem("Token")) {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Button className="Left-header-button" component={Link} to="/" color="inherit">Home</Button>
                            {/*<Button className="Left-header-button" component={Link} to="/search" color="inherit">Search</Button>*/}
                        </Typography>
                        <Button component={Link} to="/logout" color="inherit">Logout</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        );
    } else {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Button className="Left-header-button" component={Link} to="/" color="inherit">Home</Button>
                            {/*<Button className="Left-header-button" component={Link} to="/search" color="inherit">Search</Button>*/}
                        </Typography>
                        <Button component={Link} to="/login" color="inherit">Login</Button>
                        <Button component={Link} to="/register" color="inherit">Register</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        );
    }
}

export default function App() {
    return (
        <Suspense fallback="loading">
            <Header />
        </Suspense>
    )
}