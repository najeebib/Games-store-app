import { React, useState } from 'react'
import "./Register.css"
import { useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom"


function Register() {
    const navigate = useNavigate();
    
    const [name,setName] = useState(''); 
    const [email,setEmail] = useState(''); 
    const [password,setPass] = useState(''); 
    const [birthdate,setDate] = useState(''); 

      const handleSubmit = (e) => {
        e.preventDefault();
        if(password === "" || email === "" || name === "" || birthdate === "")
          alert("Enter your details")
        else
        {
          const user = {
            email: email,
            password: password,
            name: name,
            birthdate: birthdate, 
          };
            const registerUser = async () => {
              try {
                const response = await fetch('http://localhost:5000/user', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(user), // Convert user object to JSON
                });
                if (response.ok) {
                  const data = await response.json();
                  console.log(data);
                } else {
                  console.error('GET Error - Response Status:', response.status);
                }
              } catch (err) {
                console.error('GET Error:', err);
              }
          };
      
          registerUser();
    
        }

        
      };
  return (
    <div className="signup template d-flex justify-content-center align-items-center vh-100 bg-primary">
            <div className='form_container p-5 rounded bg-white'>
                <form>
                    <h3 className='text-center'>Sign Up</h3>
                    <div className='mb-2'>
                        <label class="form-label" htmlFor='name'>Full Name</label>
                        <input type='text' placeholder='Enter name'
                        className='form-control'
                        value={name}
                        onChange={(e)=> setName(e.target.value)}
                        required/>
                    </div>
                    <div className='mb-2'>
                      <label class="form-label" htmlFor='email'>Email</label>
                      <input className='form-control'
                      type='email' 
                      placeholder='Enter email' 
                      value={email}
                      onChange={(e)=> setEmail(e.target.value)}
                      required/>
                    </div>
                    <div className='mb-2'>
                        <label class="form-label" htmlFor='password'>Password</label>
                        <input type='password' className='form-control' 
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e)=> setPass(e.target.value)}
                        required />
                    </div>
                    <div className='mb-2' >
                        <label htmlFor='password'>Birthdate</label>
                        <input type='date' placeholder='Enter Birthdate' className='form-control'
                        value={birthdate}
                        onChange={(e)=> setDate(e.target.value)}
                        required/>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-primary' onClick={handleSubmit}>Sign Up</button>
                    </div>
                    <p className='text-right ms-2'>
                        Already have an account?{' '}
                        <Link to="/Signin">Signin here</Link>
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