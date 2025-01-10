import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Forgot.css';
import EastIcon from '@mui/icons-material/East';

function Forgot() {
  const navigate = useNavigate(); // Hook para redirecionar

  const handleForgotSubmit = (event) => {
    event.preventDefault(); // Previne o comportamento padrão de recarregar a página

    // Aqui você pode implementar a lógica para recuperação de conta (opcional)
    console.log("E-mail de recuperação enviado!");

    // Redireciona o usuário para a página de login
    navigate('/');
  };

  return (
    <div className="containerF">
      <div className="login-containerF">
        <div className="GrupoF">
          <h1 className="loginF">Recuperar Conta</h1>
          <form className="formsF" onSubmit={handleForgotSubmit}>
            <input type="email" placeholder="E-mail" required />
            <div className="Grupo2F">
              <button type="submit" className="confirmarF">
                <EastIcon fontSize='large' />
              </button>
            </div>
          </form>
        </div>

        <div className="linksF">
          <a href="/register">Criar Conta</a>
        </div>
      </div>
      <div className="RetanguloImagemF">
        <img src="/src/imgs/image2.png" className="fotoF" alt="Ilustração" />
      </div>
    </div>
  );
}

export default Forgot;
