import {React,useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import Navbar from "./Navbar";
import Game from './Game';
import Footer from './Footer'
import {useNavigate} from "react-router-dom"
import Pagination from './Pagination';

import './Games.css'
function Games() {
  const [gamesPerPage, setGamesPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const [games,setGames] = useState([]);
  const id = useSelector((state) => state.id.ID)
  const isLogged = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchAllGames  = async ()=>{
      //send a request to the server to get all the games in the database
      try{
        const response = await fetch("http://15.160.211.183/games");
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
    if(isLogged)
    {
      //add the game to the user's cart by sending a post request
    
        const addToCart = async () => {
          try {
            const game = {
              gameID: index,
              userID: id,
              name: name,
              price: price, 
              gameIMG: img
            };
            console.log(JSON.stringify(game));
            const response = await fetch('http://15.160.211.183/cart', {
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

      addToCart();
    }
    else
      navigate("/Signin");
    
  };
  const lastGameIndex = currentPage * gamesPerPage;
  const firstGameInde = lastGameIndex - gamesPerPage;
  const currentGames = games.slice(firstGameInde,lastGameIndex)
  return (
    <div>
    	<Navbar/>
		<div className="row">
        {currentGames.map((game, index) => (
          <Game
            key={index}
            gameName={game.Name}
            imageSource={`http://15.160.211.183/Images/${game.ImageName}`}
            price={game.Price}
            addToCart={() => addToCart(index,game.Name,game.Price,game.ImageName)}
          />
        ))}
      </div>
      <Pagination totalGames={games.length} gamesPerPage={gamesPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
      <Footer/>
    </div>
  )
}

export default Games
