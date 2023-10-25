import { React, useState } from 'react'
import "./Navbar.css"
function Navbar() {
    const [loggedIn, setLoggedIn] = useState(true);
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
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">About us</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle active" href="#" data-bs-toggle="dropdown" aria-expanded="false">Products</a>
                    <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Games</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>
                
                </ul>
                
            </div>
            </div>
            <div className='d-flex justify-content-center'>
                <button type="button" class="btn btn-primary">
                    Cart
                </button>
            </div>
            
            {loggedIn ? (
            <div className='d-flex justify-content-center'>
                <button className='btn btn-danger'>Logout</button>
            </div>
            
            ) : (
            <div className='d-flex justify-content-center'>
                <button className='btn btn-primary'>Login</button>
            </div>
            )}
            
        </nav>
    </div>
  )
}

export default Navbar
