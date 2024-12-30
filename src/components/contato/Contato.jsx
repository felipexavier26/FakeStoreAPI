import React, { useState } from 'react';
import './Contato.css';

function Contato() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mensagem enviada por ${formData.name}`);
    setFormData({ name: '', email: '', message: '' }); 
  };

  return (
    <div className="contato-container">
      <h2>Fale Conosco</h2>
      <form className="contato-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Digite seu nome"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Digite seu email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensagem:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Digite sua mensagem"
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Enviar</button>
      </form>
    </div>
  );
}

export default Contato;
