import { React, useState,useEffect } from 'react'
import './Checkout.css'
import Navbar from "./Navbar";
import Footer from './Footer'
import { useSelector ,useDispatch} from 'react-redux'
import { setTotal } from '../Redux/total'
import {useNavigate} from "react-router-dom"

function Checkout() {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const id = useSelector((state) => state.id.ID)  
    const total = useSelector((state) => state.Total.value)
    const isLogged = useSelector((state) => state.auth.isLoggedIn)  
    const [name,setName] = useState("");
    const [card,setCard] = useState("");
    const [expire,setExpire] = useState("");
    const [csv,setCsv] = useState("");
    useEffect(() => {
      if(!isLogged) 
        navigate("/Signin");      
    }, []);
    const Pay = ()=>{
      //send request to the server to remove all the user's items from the cart after the checkout is done
        const removeAll = async () => {
            try {
              const userID = {
                userID: id,
              };
              const response = await fetch('http://15.160.211.183/cartAllGames', {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(userID),
              });
        
              if (response.ok) {
                const data = await response.json();
                console.log(data); 
              } else {
                console.error('DELETE Error - Status:', response.status);
              }
            } catch (err) {
              console.error('DELETE Error:', err);
            }
          };
          removeAll();
          dispatch(setTotal(0));
          navigate('/');
    }
  return (
    <div>
      <Navbar/>
      <section class="Back">
        <div class="container p-0" id='container'>
        
            <div class="card px-4" id='checkout'> 
                <p class="h8 py-3">Payment Details</p>
                <div class="row gx-3">
                    <div class="col-12">
                        <div class="d-flex flex-column">
                            <p class="text mb-1">Person Name</p>
                            <input class="form-control mb-3" type="text" placeholder="Name" value={name} onChange={(e)=> setName(e.target.value)}/>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="d-flex flex-column">
                            <p class="text mb-1">Card Number</p>
                            <input class="form-control mb-3" type="text" placeholder="1234 5678 435678" value={card} onChange={(e)=> setCard(e.target.value)}/>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="d-flex flex-column">
                            <p class="text mb-1">Expiry</p>
                            <input class="form-control mb-3" type="text" placeholder="MM/YYYY" value={expire} onChange={(e)=> setExpire(e.target.value)}/>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="d-flex flex-column">
                            <p class="text mb-1">CVV/CVC</p>
                            <input class="form-control mb-3 pt-2 " type="password" placeholder="***" value={csv} onChange={(e)=> setCsv(e.target.value)}/>
                        </div>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-primary mb-3" onClick={() => Pay()}>
                            <span class="ps-3">Pay ${total}</span>
                            <span class="fas fa-arrow-right"></span>
                        </button>
                    </div>
                </div>
            </div>
      
        </div>
    </section>
    <Footer/>
    </div>
      
  )
}

export default Checkout
