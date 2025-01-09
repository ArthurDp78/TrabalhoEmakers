import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="image"></div>
      <div className="footer-section">
        <h3>Game Dame</h3>
        <p>Seu próximo jogo começa aqui.</p>
      </div>
      <div className="footer-section">
        <h4>Explorar</h4>
        <div className="content">
          <a href="#">Início</a>
          <a href="#">Populares</a>
          <a href="#">Conta</a>
          <p>© 2024 Game Dame | By Emakers Junior</p>
        </div>
      </div>
      <div className="footer-section">
        <h4>Contato</h4>
        <p className="text"><EmailIcon /> gamegamedame@teste.com</p>
        <p className="text"><PhoneIcon /> (99) 9 9999-9999</p>
        <p className="text"><LocationOnIcon /> Shopping X, Lavras - MG</p>
      </div>
    </footer>
  );
};

export default Footer;
