import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './telapromo.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  return (
  <div>
    <div className='container'>
      <div className='navbar'>
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
      <div className='middle'>
        <div className='game'>
          <div className='imggame'>
            <button className='percent'>-40%</button>
            <button className='price'>R$ 119,95</button>
          </div>
          <div className='imgright'>
            <h1 className='texth1img'>God of War</h1>
            <div className='textbox'>
            <p className='textpimg'>Com a vingança contra os 
                                    deuses do Olimpo em um 
                                    passado distante, Kratos 
                                    agora vive como um mortal
                                    no reino dos deuses e 
                                    monstros nórdicos. É nesse 
                                    mundo duro e implacável 
                                    que ele deve lutar para 
                                    sobreviver... e ensinar 
                                    seu filho a fazer o mesmo.</p>
            </div>
            <div className='line'></div>
            <button className='add'>Adicionar ao Carrinho<ShoppingCartIcon/></button>
            <button className='refund'>Solicitar Reembolso<ShoppingCartIcon/></button>
          </div>
        </div>
      </div>
      <div className='boxofcart'>
        <button className='carrinho'><ShoppingCartIcon/></button>
      </div>
    </div>

    <footer class="footer">
    <div className='image'></div>
    <div class="footer-section">
      <h3>Game Dame</h3>
      <p>Seu próximo jogo começa aqui.</p>
    </div>
    <div class="footer-section">
      <h4>Explorar</h4>
      <div className='content'>
        <a href="#">Início</a>
        <a href="#">Populares</a>
        <a href="#">Conta</a>
        <p>© 2024 Game Dame | By Emakers Junior</p>
      </div>
    </div>
    <div class="footer-section">
      <h4>Contato</h4>
      <p className='text'><EmailIcon/>gamegamedame@teste.com</p>
      <p className='text'><PhoneIcon/>(99) 9 9999-9999</p>
      <p className='text'><LocationOnIcon/>Shopping X, Lavras - MG</p>
    </div>
  </footer>
  
</div>
  )
}

export default App
