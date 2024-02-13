import {React,useEffect, useState} from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import Navbar from "./Navbar";
import Footer from './Footer'
import x from '../Images/x.svg';
import { setTotal } from '../Redux/total'
import {useNavigate} from "react-router-dom"
import './Cart.css'
function Cart() {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const [games,setGames] = useState([]);
  const isLogged = useSelector((state) => state.auth.isLoggedIn)
  const id = useSelector((state) => state.id.ID)
  useEffect(() => {
    if(!isLogged) 
      navigate("/Signin");
    //send a get request to the server to retrieve the users items in the cart
    const fetchAllGames  = async ()=>{
      try{
        const response = await fetch(`http://15.160.211.183/cart/${id}`);
        const cart = await response.json();
        setGames(cart);
        console.log(cart);
      }
      catch(err)
      {
        console.log(err);
      }
    };
    
    fetchAllGames();    
  }, []);
  const Remove = (CartId,GameID) => {
    
    const removeFromCart = async () => {
      //remove one item from  the cart when user clickes the remove button
      //send http request to do so
      try {
        const gameID = {
          cartID: CartId,
        };
        const response = await fetch('http://15.160.211.183/cart', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(gameID),
        });
  
        if (response.ok) {
          let removed = false;
        const updatedGames = games.filter(game => {
          if (!removed && game.GameID === GameID) {
            removed = true;
            return false;
          }
          return true;
        });
        setGames(updatedGames);
          const data = await response.json();
          console.log(data); 
        } else {
          console.error('DELETE Error - Status:', response.status);
        }
      } catch (err) {
        console.error('DELETE Error:', err);
      }
    };
  
    removeFromCart();
    
  }
  const Checkout = ()=>{
    //update the total sum state and redirect the suer to the checkout page
    let sum = 0;
    games.map((game) =>(
      sum +=game.Price
    ))
    console.log(sum);
    dispatch(setTotal(sum));
    navigate('/Checkout')
  }
  return (
    <div>
      <Navbar/>
      <section class="h-100">
        <div class="container h-100 py-5">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-10">

              <div class="d-flex justify-content-between align-items-center mb-4">
                <h3 class="fw-normal mb-0 text-black">Shopping Cart</h3>
                
              </div>
              {games.map((game) =>(
                <div class="card rounded-3 mb-4">
                  <div class="card-body p-4">
                    <div class="row d-flex justify-content-between align-items-center">
                      <div class="col-md-2 col-lg-2 col-xl-2">
                        <img
                          src={`http://15.160.211.183/Images/${game.ImageName}`}
                          class="img-fluid rounded-3" alt="Cotton T-shirt"
                          style={{ width: '150px', height: '150px' }}/>
                        </div>
                        <div class="col-md-3 col-lg-3 col-xl-3">
                          <p class="lead fw-normal mb-2">{game.Name}</p>
                        
                        </div>
                      
                        <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h5 class="mb-0">${game.Price}</h5>
                        </div>
                        <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                          <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
                        </div>
                        <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                        <button class="btn btn-danger btn-lg" onClick={() => Remove(game.CartID,game.GameID)}>
                          <i class="fas fa-trash fa-2x"></i>
                          <img src={x} style={{ width: '30px', height: '30px' }}></img>
                        </button>
                      </div>  
                    </div>
                  
                  </div>
                
                </div>
              
                ))}
              
              <div class="card">
                <div class="card-body">
                  <button type="button" class="btn btn-warning btn-block btn-lg" onClick={() => Checkout()}>Proceed to Pay</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Cart
