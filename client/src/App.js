import Register from './Components/Register';
import {
  BrowserRouter as Router, 
  Routes, 
  Route,
} from "react-router-dom";
import {useState,React,useEffect} from 'react';
import Login from "./Components/Login"
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  return (
    <div>
      <div className="App">
      <Router>
      {!isLoggedIn &&(
               <Routes>
                <Route
                 path="/Sigin"
                 element={<Login setIsLoggedIn={setIsLoggedIn}/>} // Pass setIsLoggedIn to Login
               />
               <Route
                 path="/Sigup"
                 element={<Register />} // Pass setIsLoggedIn to Login
               />
             </Routes>
      )}
      {isLoggedIn 
      }
      </Router>
      </div>
    </div>
  )
}

export default App
