import { React } from 'react'
import "./Navbar.css"
import {useNavigate} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { setLogin } from '../Redux/auth'
import { setID } from '../Redux/userID';


function Navbar() {
    const isLogged = useSelector((state) => state.auth.isLoggedIn)
    const id = useSelector((state) => state.id.ID)
    const dispatch = useDispatch()

    const navigate = useNavigate();
    const LogOut = (e)=>{
        dispatch(setLogin(false));
        dispatch(setID(-1));
        navigate("/");
    }
    const LogIn = (e)=>{
        navigate("/Signin");
    }
  return (
    <div>
      <nav class="navbar navbar-expand navbar-dark bg-dark" aria-label="Second navbar example">
            <div class="container-fluid">
            <a class="text-primary navbar-brand mb-0 h1" href="#">Games Store</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarsExample02">
                <ul class="navbar-nav me-auto">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/AboutUs">About us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/Games">Games</a>
                </li>
                
                </ul>
                
            </div>
            </div>
            <div className='d-flex justify-content-center'>
                <button type="button" class="btn btn-primary">
                    Cart
                </button>
            </div>
            
            {isLogged ? (
            <div className='d-flex justify-content-center'>
                <button className='btn btn-danger' onClick={LogOut}>Logout</button>
            </div>
            
            ) : (
            <div className='d-flex justify-content-center'>
                <button className='btn btn-primary' onClick={LogIn}>Login</button>
            </div>
            )}
            
        </nav>
    </div>
  )
}

export default Navbar
