import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className="container">
    <div className="login-container">
      <div className="Grupo">
        <h1 className="login">Recuperar Conta</h1>
        <form className="forms">
          <input type="email" placeholder="E-mail" ></input>
        </form>
      </div>

      <div className="Grupo2">
        <button className="confirmar"></button>
      </div>

      <div className="links">
        <a href="/register">Criar Conta</a>
        <a href="/forgot-password">Esqueceu a Senha?</a>
      </div>
    </div>
    <div className="RetanguloImagem"></div>
  </div>
    
  )
}

export default App
