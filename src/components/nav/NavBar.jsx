import { BrowserRouter, Route, Routes, NavLink, useLocation, useNavigate, Navigate } from 'react-router-dom'; // Adicione Navigate aqui
import { useState } from 'react';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from '../home/Home';
import Contato from '../contato/Contato';
import About from '../about/About';
import Services from '../services/Services';
import Products from '../produtos/Products';
import ProductDetails from '../productdetails/ProductDetails';
import Cart from '../cart/Cart';
import Login from '../login/Login';
import PageNotFound from '../pageNotFound/PageNotFound';
import Users from '../users/Users';

function isAuthenticated() {
  return localStorage.getItem('user') && localStorage.getItem('token');
}

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/login');
  };

  if (location.pathname === '/login') {
    return null;
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink to="/home" className="navbar-brand">MyLogo</NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <span className="nav-link">Olá, {user?.name?.firstname || 'Usuário'}</span>
            </li>
            <li className="nav-item">
              <NavLink to="/home" className="nav-link" activeClassName="active">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" className="nav-link" activeClassName="active">Produtos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/users" className="nav-link" activeClassName="active">Usuário</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link" activeClassName="active">Sobre Nós</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/services" className="nav-link" activeClassName="active">Serviços</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contato" className="nav-link" activeClassName="active">Contato</NavLink>
            </li>
            {user ? (
              <>
                <li className="nav-item">
                  <NavLink to="/cart" className="nav-link" activeClassName="active">Carrinho</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link" activeClassName="active">Sair</NavLink>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <NavLink to="/login" className="nav-link" activeClassName="active">Login</NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/users" element={<Users />} />
          <Route path="/cart" element={<Cart />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
