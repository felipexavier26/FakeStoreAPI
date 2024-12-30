import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Products.css';
import { Link } from 'react-router-dom';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')  
      .then((response) => {
        setProducts(response.data);  
        setLoading(false);  
      })
      .catch((error) => {
        setError('Erro ao carregar os produtos');  
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Carregando...</p>
    </div>
  );

  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="products-container">
      <h2>Produtos</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} className="product-image" />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">Preço: ${product.price}</p>
            <Link to={`/product/${product.id}`} className="product-link">
              <button className="product-button">Ver detalhes</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
