import Register from './Components/Register';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useState,React,useEffect} from 'react';
import Login from "./Components/Login"
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import Checkout from "./Components/Checkout"
import Navbar from "./Components/Navbar"
import MainPage from "./Components/MainPage"
function App() {
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    
  },[])
  const [isLoggedIn, setIsLoggedIn] = useState(true); // State to track login status
  return (
    <div>
      <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route
            path="/Signin"
            element={<Login setIsLoggedIn={setIsLoggedIn}/>} // Pass setIsLoggedIn to Login
          />
          <Route
            path="/Signup"
            element={<Register />} 
          />
          <Route
            path="/Home"
            element={<MainPage />}
          />
          <Route
            path="/Checkout"
            element={<Checkout />}
          />
        </Routes>
      
      
      </Router>
      </div>
    </div>
  )
}

export default App
