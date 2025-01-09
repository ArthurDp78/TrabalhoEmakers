import { useState } from 'react'
import './Forgot.css'

function Forgot() {

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
      </div>
    </div>
    <div className="RetanguloImagem">
    <img src="/src/routes/Tela_EsqueceuSenha/imgs/image2.png" className="foto" alt="Ilustração" />
    </div>
  </div>
    
  )
}

export default Forgot
