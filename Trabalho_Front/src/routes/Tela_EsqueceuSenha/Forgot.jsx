import { useState } from 'react'
import './Forgot.css'
import EastIcon from '@mui/icons-material/East';

function Forgot() {

  return (
    <div className="containerF">
    <div className="login-containerF">
      <div className="GrupoF">
        <h1 className="loginF">Recuperar Conta</h1>
        <form className="formsF">
          <input type="email" placeholder="E-mail" ></input>
        </form>
      </div>

      <div className="Grupo2F">
        <button className="confirmarF"><EastIcon/></button>
      </div>

      <div className="linksF">
        <a href="/register">Criar Conta</a>
      </div>
    </div>
    <div className="RetanguloImagemF">
    <img src="/src/imgs/image2.png" className="fotoF" alt="Ilustração" />
    </div>
  </div>
    
  )
}

export default Forgot
