import React from 'react';
import './App.css';

function App() {
  return(
    <div>
      <h1 className='login'>Login</h1>
      <form className='forms'>
          <input type="email" placeholder='E-mail'></input>
          <input type="senha" placeholder='Senha'></input>
      </form>
      <button className='confirmar'></button>
      
    </div>
  );
}

export default App;
