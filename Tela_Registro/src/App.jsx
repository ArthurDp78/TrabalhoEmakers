import { useState } from 'react'
import './App.css'

function App() {
 

  return (
    <div className="container">
      <div className="login-container">
        <div className="Grupo">
          <h1 className="registrar">Registrar</h1>
          <form className="forms">
            <input type="name" placeholder="Nome de Usuário" />
            <input type="email" placeholder="E-mail" />
            <input type="cpf" placeholder="CPF" />
            <input type="password" placeholder="Senha" /> 
            <input type="password" placeholder="Confirmar Senha" /> 
          </form>
        </div>

        <div className="Grupo2">
          <button className="confirmar"></button>
        </div>

        <div className="links">
          <a href="/fazerLogin">Fazer Login</a>
        </div>
      </div>
      <div className="RetanguloImagem"></div>
    </div>
  )
}

export default App
