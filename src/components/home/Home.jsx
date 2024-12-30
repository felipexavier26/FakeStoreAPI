import React from 'react';

function Home() {
  return (
    <div className="container mt-5">
      <div className="home-container p-4 shadow-sm rounded bg-light">
        <h1 className="display-4 text-center mb-4">Bem-vindo ao Projeto FakeStore</h1>
        <p className="lead">
          Este é um projeto que utiliza a <a href="https://fakestoreapi.com" target="_blank" rel="noopener noreferrer" className="text-primary">FakeStoreAPI</a>, 
          uma API pública que fornece dados simulados de produtos como roupas, eletrônicos e joias.
        </p>
        <p className="lead">
          Aqui você pode explorar produtos, criar listas de compras e ver como consumir dados de uma API no desenvolvimento web.
        </p>
      </div>
    </div>
  );
}

export default Home;
