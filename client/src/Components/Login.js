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
        <div className="login template d-flex justify-content-center align-items-center vh-100 bg-primary">
            <div className='form_container p-5 rounded bg-white'>
                <form>
                    <h3 className='text-center'>Sign In</h3>
                    <div className='mb-2'>
                        <label class="form-label" htmlFor='email'>Email</label>
                        <input type='email' placeholder='Enter email' className='form-control'/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' placeholder='Enter Password' className='form-control'/>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-primary'>Sign In</button>
                    </div>
                    <p className='text-right ms-2'>
                        Forgot password?{' '}
                        <Link to="/Sigup">New pssword</Link>
                    </p>
                    <p className='text-right ms-2'>
                        Don't have an account?{' '}
                        <Link to="/Sigup">Register here</Link>
                    </p>
                </form>
            </div>
        </div>
  )
}

/*
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
*/
export default Login
