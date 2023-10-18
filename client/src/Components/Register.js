import { React, useState } from 'react'
import "./Register.css"
import { useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom"


function Register() {
    const navigate = useNavigate();
    
      const [name,setName] = useState(''); 
      const [email,setEmail] = useState(''); 
      const [password,setPass] = useState(''); 

      const handleSubmit = (e) => {
        e.preventDefault();
        

        
      };
  return (
    <div className="signup template d-flex justify-content-center align-items-center vh-100 bg-primary">
            <div className='form_container p-5 rounded bg-white'>
                <form>
                    <h3 className='text-center'>Sign Up</h3>
                    <div className='mb-2'>
                        <label class="form-label" htmlFor='name'>Full Name</label>
                        <input type='text' placeholder='Enter name' className='form-control'/>
                    </div>
                    <div className='mb-2'>
                        <label class="form-label" htmlFor='name'>Email</label>
                        <input type='text' placeholder='Enter Email' className='form-control'/>
                    </div>
                    <div className='mb-2'>
                        <label class="form-label" htmlFor='name'>Password</label>
                        <input type='text' placeholder='Enter Password' className='form-control'/>
                    </div>
                    <div className='mb-2' >
                        <label htmlFor='password'>Birthdate</label>
                        <input type='date' placeholder='Enter Birthdate' className='form-control'/>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-primary'>Sign Up</button>
                    </div>
                    <p className='text-right ms-2'>
                        Already have an account?{' '}
                        <Link to="/Sigin">Signin here</Link>
                    </p>
                </form>
            </div>
        </div>
  )
}

export default Register


/*
  <div className="register">
        <h2>Register an account</h2>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="name"
            name="name"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e)=> setPass(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
        </form>
    </div>
*/