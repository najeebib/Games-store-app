import { React, useState } from 'react'
import "./Login.css"
import {Link,useNavigate} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { setLogin } from '../Redux/auth'
import { setID } from '../Redux/userID';
function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const isLogged = useSelector((state) => state.auth.isLoggedIn)
    const id = useSelector((state) => state.id.ID)
    const dispatch = useDispatch()



    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();//login onclick
        if(password === "" || email === "")
            alert("Enter account details")
        else
        {
            const queryParams = {
                email: email,
                password: password,
            };
            const queryString = new URLSearchParams(queryParams).toString();
            const apiURL = `https://www.store-server.shop/user?${queryString}`
            const fetchAllUsers = async () => {
                try {
                  const response = await fetch(apiURL);
                  if (response.ok) {
                    const data = await response.json();
                    if(data.length === 1)
                    {
                        dispatch(setLogin(true));
                        dispatch(setID(data[0].UserID));
                        navigate("/");

                    }
                    else
                        console.log("error");
                    //console.log(data);
                  } else {
                    console.error('GET Error - Response Status:', response.status);
                  }
                } catch (err) {
                  console.error('GET Error:', err);
                }
            };
        
            fetchAllUsers();

              
        }
        
        
    };
      
  return (
        <div className="login template d-flex justify-content-center align-items-center vh-100 bg-primary">
            <div className='form_container p-5 rounded bg-white'>
                <form>
                    <h3 className='text-center'>Sign In</h3>
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
                        <label htmlFor='password'>Password</label>
                        <input type='password'
                        className='form-control'
                        placeholder='Enter Password' 
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        required/>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-primary' onClick={handleSubmit}>Sign In</button>
                    </div>
                    <p className='text-right ms-2'>
                        Don't have an account?{' '}
                        <Link to="/Signup">Register here</Link>
                    </p>
                </form>
            </div>
        </div>
  )
}

export default Login
