import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import EastIcon from '@mui/icons-material/East';

function Register() {
  const navigate = useNavigate(); // Hook para redirecionar

  const handleSubmit = (event) => {
    event.preventDefault(); // Previne o comportamento padrão de recarregar a página

    // Aqui você pode validar os dados do formulário, se necessário
    console.log("Formulário enviado!");

    // Redireciona para a página de login
    navigate('/');
  };

  return (
    <div className="containerR">
      <div className="login-containerR">
        <div className="GrupoR">
          <h1 className="loginR">Registrar</h1>
          <form className="formsR" onSubmit={handleSubmit}>
            <input type="text" placeholder="Nome de Usuário" required />
            <input type="email" placeholder="E-mail" required />
            <input type="text" placeholder="CPF" required />
            <input type="password" placeholder="Senha" required />
            <input type="password" placeholder="Confirmar Senha" required />
            <div className='Grupo2R'>
            <button type="submit" className="confirmarR"><EastIcon fontSize='large' /></button>
          </div>
          </form> 
        </div>

        <div className="linksR">
          <a href="/">Fazer Login</a>
        </div>
      </div>
      <div className="RetanguloImagemR">
        <img src="/src/imgs/image2.png" className="fotoR" alt="Ilustração" />
      </div>
    </div>
  );
}

export default Register;
 