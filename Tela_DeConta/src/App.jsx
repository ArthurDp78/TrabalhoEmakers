import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className='container'>
      <div className='navbar'>
        <div className='imagem'></div>
        <div className='barraclicks'>
          <button className='botaonavbar'>Lancamentos</button>
          <button className='botaonavbar'>Populares</button>
          <button className='botaonavbar'>Gêneros</button>
          <button className='botaonavbar'>Promocoes</button>
          <button className='botaonavbar'>Conta</button>
        </div>
        <input type='search' ></input>
      </div>
      <div className='bottom'>
        <div className='parteusuario'></div>
        <div className='partejogos'></div>
      </div>
    </div>
      
  )
}

export default App
