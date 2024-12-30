import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });

            if (!response.ok) {
                throw new Error('Erro ao realizar login.');
            }

            const data = await response.json();

            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data));

            navigate('/home');

        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="login-container">
            <h2>Faça seu Login</h2>
            <form className="login-form" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                <div className="form-group">
                    <label htmlFor="username">Usuário:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Digite seu usuário"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Digite sua senha"
                        required
                    />
                </div>
                <button type="submit" className="submit-button">Entrar</button>
                {error && <p className="error-message text-danger">{error}</p>}
            </form>
        </div>
    );
}

export default Login;
