import { React, useState } from 'react'

import "./Login.css"
import {Link} from "react-router-dom"
function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });

      const handleChange = (e) => {//change the values on change
    
      };
      
      const handleSubmit = (e) => {//login onclick
        e.preventDefault();
        
      };
      
  return (
    <div>
        <div className="login">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label>Email:</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            </div>
            <div className="form-group">
            <label>Password:</label>
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
            />
            </div>
            <button type="submit">Login</button>
            </form>
            <p>
                Don't have an account?{' '}
                <Link to="/Register">Register here</Link>
            </p>
        </div>
    </div>
  )
}

export default Login
