import { useState } from 'react'
import './Register.css'

function Register() {
 

  return (
    <div className="containerR">
      <div className="login-containerR">
        <div className="GrupoR">
          <h1 className="loginR">Registrar</h1>
          <form className="formsR">
            <input type="name" placeholder="Nome de Usuário" />
            <input type="email" placeholder="E-mail" />
            <input type="cpf" placeholder="CPF" />
            <input type="password" placeholder="Senha" /> 
            <input type="password" placeholder="Confirmar Senha" /> 
          </form>
        </div>

        <div className="Grupo2R">
          <button className="confirmarR"></button>
        </div>

        <div className="linksR">
          <a href="/">Fazer Login</a>
        </div>
      </div>
      <div className="RetanguloImagemR">
      <img src="/src/routes/Tela_Register/imgs/image2.png" className="foto1R" alt="Ilustração" />
      </div>
    </div>
  )
}

export default Register
