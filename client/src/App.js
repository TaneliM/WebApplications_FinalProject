import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
//import Search from './components/Search'
import Login from './components/Login'
import Register from './components/Register'
import NewPost from './components/NewPost'
import Logout from './components/Logout'
import SinglePost from './components/SinglePost'

function App() {
  // Mostly unused
  const [jwt, setJwt] = useState("");
  const [user, setUser] = useState({});

  // Frontend routing
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<><Header /><Home user={user}/></>}></Route>
          <Route path="/login" element={<><Header /><Login setJwt={setJwt} setUser={setUser} jwt={jwt} /></>}></Route>
          <Route path="/register" element={<><Header /><Register /></>}></Route>
          {/*<Route path="/search" element={<><Header /><Search /></>}></Route>*/}
          <Route path="/newpost" element={<><Header /><NewPost /></>}></Route>
          <Route path="/post/:id" element={<><Header /><SinglePost /></>}></Route>
          <Route path="/logout" element={<><Logout /></>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;