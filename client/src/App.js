import Register from './Components/Register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {useState,React,useEffect} from 'react';
import Login from "./Components/Login"
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import Checkout from "./Components/Checkout";
import MainPage from "./Components/MainPage";
import Game from "./Components/Game";
import Games from './Components/Games';
import AboutUs from './Components/AboutUs'
import Cart from './Components/Cart'
function App() {
  useEffect(()=>{
    
  },[])
  const [isLoggedIn, setIsLoggedIn] = useState(true); // State to track login status
  return (
    <div>
      <div className="App">
      <Router>
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
            path="/AboutUs"
            element={<AboutUs />}
          />
          <Route
            path="/Cart"
            element={<Cart />}
          />
          <Route
            path="/Game/:id"
            element={<Game />}
          />
          <Route
            path="/Games"
            element={<Games  />}
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
