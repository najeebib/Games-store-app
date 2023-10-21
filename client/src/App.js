import Register from './Components/Register';
import {
  BrowserRouter as Router, 
  Routes, 
  Route,
} from "react-router-dom";
import {useState,React,useEffect} from 'react';
import Login from "./Components/Login"
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios"
function App() {
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    const fetchAllUsers  = async ()=>{
      try{
        const res = await axios.get("http://localhost:5000/users");
        console.log(res.data);
      }
      catch(err)
      {
        console.log(err);
      }
    }
    fetchAllUsers();
  },[])
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  return (
    <div>
      <div className="App">
      <Router>
      {!isLoggedIn &&(
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
      )}
      {isLoggedIn 
      }
      </Router>
      </div>
    </div>
  )
}

export default App
