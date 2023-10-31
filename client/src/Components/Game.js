import React from 'react'
import './Game.css'
function Game({ gameName, imageSource, price,addToCart }) {
  
  return (
    <div className="col-md-3">
      <div className="product">
        <h6 className="product-name">{gameName}</h6>
        <img src={imageSource} alt="Game" style={{ width: '250px', height: '250px' }} />
        <h4 className="product-price">${price}</h4>
        <button className="btn btn-primary" onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  )
}

export default Game
