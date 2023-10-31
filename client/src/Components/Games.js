import {React,useEffect, useState} from 'react'
import Navbar from "./Navbar";
import Game from './Game';
import Footer from './Footer'

import './Games.css'
function Games({ isLoggedIn, userID,setIsLoggedIn ,setID }) {
  const [games,setGames] = useState([]);
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
	
  return (
    <div>
    	<Navbar isLoggedIn={isLoggedIn} userID={userID} setIsLoggedIn={setIsLoggedIn} setID={setID}/>
		<div className="row">
        {games.map((game, index) => (
          <Game
            key={index}
            gameName={game.Name}
            imageSource={`http://localhost:5000/Images/${game.ImageName}`}
            price={game.Price}
          />
        ))}
      </div>
        <Footer/>
    </div>
  )
}

export default Games
