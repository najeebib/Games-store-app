import { React, useState } from 'react'
import "./Register.css"
import { useNavigate } from 'react-router-dom';


function Register() {
    const navigate = useNavigate();
    
      const [name,setName] = useState(''); 
      const [email,setEmail] = useState(''); 
      const [password,setPass] = useState(''); 

      const handleSubmit = (e) => {
        e.preventDefault();
        

        
      };
  return (
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
  )
}

export default Register
