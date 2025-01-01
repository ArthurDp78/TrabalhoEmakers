import React from 'react';
import './telalogin.css';
import EastIcon from '@mui/icons-material/East';

function App() {
  return (
    <div className="container">
      <div className="login-container">
        <div className="Grupo">
          <h1 className="login">Login</h1>
          <form className="forms">
            <input type="email" placeholder="E-mail" />
            <input type="password" placeholder="Senha" />
          </form>
        </div>

        <div className="Grupo2">
          <button className="confirmar"><EastIcon></EastIcon></button>
        </div>

        <div className="links">
          <a href="/register">Criar Conta</a>
          <a href="/forgot-password">Esqueceu a Senha?</a>
        </div>
      </div>
      <div className="RetanguloImagem"></div>
    </div>
  );
}

export default App;
