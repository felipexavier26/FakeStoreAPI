import React from 'react';
import { useLocation } from 'react-router-dom';
import './Cart.css';

function Cart() {
  const location = useLocation();
  const product = location.state?.product; 

  if (!product) {
    return <div className="cart-container">Seu carrinho está vazio!</div>;
  }

  return (
    <div className="cart-container">
      <h2>Seu Carrinho</h2>
      <div className="cart-item">
        <img src={product.image} alt={product.title} className="cart-item-image" />
        <div className="cart-item-details">
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p><strong>Preço:</strong> ${product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
