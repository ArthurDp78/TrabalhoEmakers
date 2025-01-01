import { useState } from 'react'
import './App.css'
import SearchIcon from '@mui/icons-material/Search';

function App() {

  return (
    <div className='container'>
      <div className='navbar'>
        <button className='imagem'></button>
        <div className='barraclicks'>
          <a href="/Lancamentos">Lançamentos </a>
          |
          <a href="/Populares">Populares</a>
          |
          <a href="/Gêneros">Gêneros</a>
          |
          <a href="/Promocoes">Promoções</a>
          |
          <a href="/Conta">Conta</a>
          <div className='search'>
            <input type='search'/>
            <SearchIcon> </SearchIcon>
          </div>
        </div>
      </div>
      <div className='bottom'>
        <div className='parteusuario'></div>
        <div className='partejogos'></div>
      </div>
    </div>
      
  )
}

export default App
