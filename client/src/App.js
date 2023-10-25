import Register from './Components/Register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {useState,React,useEffect} from 'react';
import Login from "./Components/Login"
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import Checkout from "./Components/Checkout";
import MainPage from "./Components/MainPage";
import Item from "./Components/Item";
import ProductsList from './Components/ProductsList';
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
            path="/Item/Game/:id"
            element={<Item category={"Game"} />}
          />
          <Route
            path="/Products/Console/:id"
            element={<Item category={"Console"} />}
          />
          <Route
            path="/Products/Game/:id"
            element={<ProductsList category={"Game"} />}
          />
          <Route
            path="/Item/Console/:id"
            element={<ProductsList category={"Console"} />}
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
