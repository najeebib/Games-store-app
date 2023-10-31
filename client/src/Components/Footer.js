import React from 'react'
import {Link} from "react-router-dom"

function Footer() {
  return (
    <div>
      <div class="footer">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <p class="col-md-4 mb-0 text-body-secondary">&copy; 2023 Company, Inc</p>

            <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <svg class="bi me-2" width="40" height="32"></svg>
            </a>

            <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item"><Link to="/" class="nav-link px-2 text-body-secondary">Home</Link></li>
            <li class="nav-item"><Link to="/AboutUs" class="nav-link px-2 text-body-secondary">About Us</Link></li>
            <li class="nav-item"><Link to="/Games" class="nav-link px-2 text-body-secondary">Games</Link></li>
            </ul>
        </footer>
        </div>
    </div>
  )
}

export default Footer
