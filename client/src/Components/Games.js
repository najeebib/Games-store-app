import {React,useEffect, useState} from 'react'
import { useSelector } from 'react-redux'

import Navbar from "./Navbar";
import Game from './Game';
import Footer from './Footer'

import './Games.css'
function Games() {
  const [games,setGames] = useState([]);
  const id = useSelector((state) => state.id.ID)
  useEffect(() => {
    const fetchAllGames  = async ()=>{
      try{
        const response = await fetch("http://localhost:5000/games");
        const all_games = await response.json();
        setGames(all_games);
        console.log(all_games);
      }
      catch(err)
      {
        console.log(err);
      }
    };
    
    fetchAllGames();    
  }, []);
	const addToCart = (index,name,price,img) => {
    
    const registerUser = async () => {
      try {
        const game = {
          gameID: index,
          userID: id,
          name: name,
          price: price, 
          gameIMG: img
        };
        console.log(JSON.stringify(game));
        const response = await fetch('http://localhost:5000/cart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(game), // Convert user object to JSON
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
  };
  return (
    <div>
    	<Navbar/>
		<div className="row">
        {games.map((game, index) => (
          <Game
            key={index}
            gameName={game.Name}
            imageSource={`http://localhost:5000/Images/${game.ImageName}`}
            price={game.Price}
            addToCart={() => addToCart(index,game.Name,game.Price,game.ImageName)}
          />
        ))}
      </div>
        <Footer/>
    </div>
  )
}

export default Games
