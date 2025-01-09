import { useState } from 'react'
import './Game.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
function App() {
  
  return (
  <div>
    <div className='containerG'>
      <Navbar></Navbar>
      <div className='middleG'>
        <div className='gameG'>
          <div className='imggameG'>
            <img src='/src/imgs/imagemprincipal.png' className='godofwarG'></img>
            <button className='percentG'>-40%</button>
            <button className='priceG'>R$ 119,95</button>
          </div>
          <div className='imgrightG'>
            <h1 className='texth1imgG'>God of War</h1>
            <div className='textboxG'>
            <p className='textpimgG'>Com a vingança contra os 
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
            <button className='addG'>Adicionar ao Carrinho<ShoppingCartIcon/></button>
            <button className='refundG'>Solicitar Reembolso<ShoppingCartIcon/></button>
          </div>
        </div>
      </div>
    </div>

    <footer>
      <Footer></Footer>
    </footer>
  
</div>
  )
};

export default App
