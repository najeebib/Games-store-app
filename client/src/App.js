import Register from './Components/Register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {useState,React,useEffect} from 'react';
import Login from "./Components/Login"
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import Checkout from "./Components/Checkout";
import MainPage from "./Components/MainPage";
import Games from './Components/Games';
import AboutUs from './Components/AboutUs'
import Cart from './Components/Cart'
function App() {
  
  return (
    <div>
      <div className="App">
      <Router>
        <Routes>
          <Route
            path="/Signin"
            element={<Login />} // Pass setIsLoggedIn to Login
          />
          <Route
            path="/Signup"
            element={<Register />} 
          />
          <Route
            path="/"
            element={<MainPage/>}
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
