import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './Login.css';
import EastIcon from '@mui/icons-material/East';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError('Por favor, preencha todos os campos!');
      return;
    }

    if (!validateEmail(email)) {
      setError('Por favor, insira um e-mail válido!');
      return;
    }

    setError('');
    alert('Login realizado com sucesso!');
    console.log('Dados enviados:', { email, password });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="containerL">
      <div className="login-containerL">
        <div className="GrupoL">
          <h1 className="loginL">Login</h1>
          <form className="formsL" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="error-messageL">{error}</p>}
          </form>
        </div>

        <div className="Grupo2L">
          <button className="confirmar1L" onClick={handleSubmit}>
            <EastIcon />
          </button>
        </div>

        <div className="links1L">
          <a href="/register">Criar Conta</a>
          <a href="/forgot">Esqueceu a Senha?</a>
        </div>
      </div>
      <div className="RetanguloImagem1L">
        <img src="/src/imgs/image2.png" className="foto1L" alt="Ilustração" />
      </div>
    </div>
  );
}

export default Login;
