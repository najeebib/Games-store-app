import Register from './Pages/Register';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useState,React,useEffect} from 'react';
import Login from "./Pages/Login"
import Navbar from "./Components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
function App() {
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    
  },[])
  const [isLoggedIn, setIsLoggedIn] = useState(true); // State to track login status
  return (
    <div>
      <Navbar/>
      <div className="App">
      <Router>
      
        <Routes>
          <Route
            path="/Signin"
            element={<Login setIsLoggedIn={setIsLoggedIn}/>} // Pass setIsLoggedIn to Login
          />
          <Route
            path="/Signup"
            element={<Register />} // Pass setIsLoggedIn to Login
          />
        </Routes>
      
      
      </Router>
      </div>
    </div>
  )
}

export default App
