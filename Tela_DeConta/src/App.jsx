import React, { useState } from 'react';
import './App.css';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container">
      <div className="navbar">
        <button className="imagembotao"></button>
        <div className={`barraclicks ${isMenuOpen ? "show" : ""}`}>
          <a href="/Lancamentos">Lançamentos</a>
          <a href="/Populares">Populares</a>
          <a href="/Gêneros">Gêneros</a>
          <a href="/Promocoes">Promoções</a>
          <a href="/Conta">Conta</a>
        </div>
        <div className={`search ${isMenuOpen ? "hidden" : ""}`}>
          <input type="search" placeholder="Pesquisar..." />
          <SearchIcon />
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <div />
          <div />
          <div />
        </div>
      </div>

      <div className="bottom">
        <div className="parteusuario">
          <h1 className="text1">Olá, Usuário</h1>
          <p className="text">Seu email é nomeusuario@email.com</p>
          <p className="text">Seu CPF é 123.456.789-00</p>
          <div className="divlinks">
            <a className="link1">
              Alterar Dados <EditIcon />
            </a>
            <a className="link1">
              Excluir Conta <DeleteIcon />
            </a>
            <a className="link2">Tela do Admin</a>
          </div>
        </div>
        <div className="partejogos">
          <h2 className="text2">Jogos adquiridos:</h2>
          <div className="Imagens">
            <div className="imagem">
              <button className="img1"></button>
              <p className="avaliacoes">100/100</p>
            </div>
            <div className="imagem">
              <button className="img2"></button>
              <p className="avaliacoes">95/100</p>
            </div>
            <div className="imagem">
              <button className="img3"></button>
              <p className="avaliacoes">75/100</p>
            </div>
            <div className="imagem">
              <button className="img4"></button>
              <p className="avaliacoes">Adicionar Avaliação</p>
            </div>
          </div>
          <button className='carrinho'><ShoppingCartIcon /></button>
        </div>
      </div>
    </div>
  );
}

export default App;
