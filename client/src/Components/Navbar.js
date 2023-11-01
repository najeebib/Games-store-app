import { React } from 'react'
import "./Navbar.css"
import {useNavigate,Link} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { setLogin } from '../Redux/auth'
import { setID } from '../Redux/userID';
import cartIMG from '../Images/cart.svg';


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
    const Cart = (e)=>{
        navigate("/Cart");
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
                    <Link class="nav-link active"  to="/">Home</Link>

                </li>
                <li class="nav-item">
                    <Link class="nav-link active" to="/AboutUs">About Us</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link active" to="/Games">Games</Link>
                </li>
                
                </ul>
                
            </div>
            </div>
            <div className='d-flex justify-content-center'>
                <button type="button" class="btn btn-primary" onClick={Cart}>
                <img src={cartIMG} style={{ width: '40px', height: '25px' }}></img>
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
