import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './navbar.css';  


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar'>
      <button className="imagembotao"></button>

      <div className={`barraclicks ${isMenuOpen ? "show" : ""}`}>
        <a href="/Lancamentos">Lançamentos</a>
        <a href="/Populares">Populares</a>
        <a href="/Generos">Gêneros</a>
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
      <div className="boxofcart">
        <button className="carrinho"><ShoppingCartIcon /></button>
      </div> 
    </div>
  );
}

export default Navbar;
