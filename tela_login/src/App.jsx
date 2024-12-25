import React from 'react';
import './App.css';

function App() {
  return(
  <div>
    <div className='Grupo'>
      <h1 className='login'>Login</h1>
      <form className='forms'>
          <input type="email" placeholder='E-mail'></input>
          <input type="senha" placeholder='Senha'></input>
      </form>
    </div>

    <div className='Grupo2'>
      <button className= 'confirmar'></button>
    </div>
  </div>
  );
}

export default App;
