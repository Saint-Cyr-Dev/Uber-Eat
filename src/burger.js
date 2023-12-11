// Composant BurgerBlock.js
import React, { useState } from "react";
import Countdown from './Countdown'; // Importez le composant Countdown

function BurgerBlock({ imagePath, burgerName, price, addToCart, removeFromCart, expirationDate }) {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
    addToCart(1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      removeFromCart(1);
    }
  };

  return (
    <div className='shops--block'>
      <img href='#' className='menu' src={imagePath} alt={burgerName} />
      <p className='block__desc'>{burgerName}</p>
      <p className='block__prix'>{price}</p>
      <div className='quantity-group'>
        <button className='moin' onClick={decrementQuantity}>-</button>
        <button className='quantite'>{quantity}</button>
        <button className='plus' onClick={incrementQuantity}>+</button>
      </div>

      {/* Intégration du composant Countdown ici */}
      <Countdown expirationDate={expirationDate} />
    </div>
  );
}


export default BurgerBlock;
