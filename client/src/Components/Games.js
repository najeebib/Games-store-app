import React from 'react'
import Navbar from "./Navbar";
import Game from './Game';

import './Games.css'
function Games({category}) {
	const products = [
		{ gameName: 'Game 1', imageSource: 'image1.jpg', price: 49.99 },
		{ gameName: 'Game 2', imageSource: 'image2.jpg', price: 39.99 },
		{ gameName: 'Game 3', imageSource: 'image3.jpg', price: 59.99 },
		{ gameName: 'Game 4', imageSource: 'image4.jpg', price: 29.99 },
		{ gameName: 'Game 5', imageSource: 'image5.jpg', price: 69.99 },
		{ gameName: 'Game 6', imageSource: 'image6.jpg', price: 79.99 },
		{ gameName: 'Game 7', imageSource: 'image7.jpg', price: 89.99 },
		{ gameName: 'Game 8', imageSource: 'image8.jpg', price: 99.99 },
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

    </div>
  )
}

export default Games
