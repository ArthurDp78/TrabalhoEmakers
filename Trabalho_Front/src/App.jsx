import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './routes/Tela_Login/Login';  // Importando Login.jsx
import Register from './routes/Tela_Register/Register';  // Importando Register.jsx
import Forgot from './routes/Tela_EsqueceuSenha/Forgot'
import Popular from'./routes/Tela_Populares/Popular'
import Account from'./routes/Tela_Conta/Conta'
import Game from'./routes/Tela_Jogo/Game'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/popular" element={<Popular/>}/>
        <Route path="/account" element={<Account />} />
        <Route path="/game" element={<Game/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
