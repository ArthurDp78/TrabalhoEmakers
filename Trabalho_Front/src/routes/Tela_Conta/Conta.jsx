import React, { useState } from 'react';
import './Conta.css';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

function Account() {

  return (
  <div>
    <Navbar></Navbar>
    <div className="containerC">
      
      <div className="bottomC">
        <div className="parteusuarioC">
          <h1 className="text1C">Olá, Usuário</h1>
          <p className="textC">Seu email é nomeusuario@email.com</p>
          <p className="textC">Seu CPF é 123.456.789-00</p>
          <div className="divlinksC">
            <a className="link1C">
              Alterar Dados <EditIcon />
            </a>
            <a className="link1C">
              Excluir Conta <DeleteIcon />
            </a>
            <a className="link2C">Tela do Admin</a>
          </div>
        </div>
        <div className="partejogosC">
          <h2 className="text2C">Jogos adquiridos:</h2>
          <div className="ImagensC">
            <div className="imagemC">
              <button className="img1C"></button>
              <p className="avaliacoesC">100/100</p>
            </div>
            <div className="imagemC">
              <button className="img2C"></button>
              <p className="avaliacoesC">95/100</p>
            </div>
            <div className="imagemC">
              <button className="img3C"></button>
              <p className="avaliacoesC">75/100</p>
            </div>
            <div className="imagemC">
              <button className="img4C"></button>
              <p className="avaliacoesC">Adicionar Avaliação</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Account;
