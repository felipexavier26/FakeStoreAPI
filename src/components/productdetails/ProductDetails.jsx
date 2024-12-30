import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetails.css';

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao carregar os detalhes do produto.');
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    navigate('/cart', { state: { product } });
  };

  if (loading) return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Carregando...</p>
    </div>
  );

  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="product-details-container">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} className="product-detail-image" />
      <p>{product.description}</p>
      <p><strong>Preço:</strong> ${product.price}</p>
      <button onClick={handleAddToCart} className="add-to-cart-button">
        Adicionar ao Carrinho
      </button>
    </div>
  );
}

export default ProductDetails;
