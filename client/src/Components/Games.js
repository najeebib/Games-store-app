import React from 'react'
import Navbar from "./Navbar";
import Game from './Game';
import Footer from './Footer'

import './Games.css'
function Games({category}) {
	const products = [
		{ gameName: 'Game 1', imageSource: 'http://localhost:5000/Images/AC_Mirage.jpg', price: 49.99 },
		{ gameName: 'Game 2', imageSource: 'http://localhost:5000/Images/AC_Mirage.jpg', price: 39.99 },
		{ gameName: 'Game 3', imageSource: 'http://localhost:5000/Images/AC_Mirage.jpg', price: 59.99 },
		{ gameName: 'Game 4', imageSource: 'http://localhost:5000/Images/AC_Mirage.jpg', price: 29.99 },
		{ gameName: 'Game 5', imageSource: 'http://localhost:5000/Images/AC_Mirage.jpg', price: 69.99 },
		{ gameName: 'Game 6', imageSource: 'http://localhost:5000/Images/AC_Mirage.jpg', price: 79.99 },
		{ gameName: 'Game 7', imageSource: 'http://localhost:5000/Images/AC_Mirage.jpg', price: 89.99 },
		{ gameName: 'Game 8', imageSource: 'http://localhost:5000/Images/AC_Mirage.jpg', price: 99.99 },
	  ];
  return (
    <div>
    	<Navbar/>
		<div className="row">
        {products.map((product, index) => (
          <Game
            key={index}
            gameName={product.gameName}
            imageSource={product.imageSource}
            price={product.price}
          />
        ))}
      </div>
        <Footer/>
    </div>
  )
}

export default Games
