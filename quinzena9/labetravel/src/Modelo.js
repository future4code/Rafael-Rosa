import './modelo.css'
import Logo from './assets/labetravel-logo.svg'
import LogoWhite from './assets/labetravel-logo-white.svg'
import SymbolYellow from './assets/symbol-yellow.svg'
import SymbolWhite from './assets/symbol-white.svg'

export default function Modelo() {
  return (
    <div className={'main-container'}>
      <header>
        <div className={'logo'}>
          <img src={Logo} />
        </div>
        <div className={'botao-admin'}>
          <button>
          <i class="fas fa-user-lock"></i> Área Administrativa
          </button>
        </div>
      </header>
      <div className={'banner'}>
        <h1>
          ENCONTRE SUA PRÓXIMA VIAGEM E EMBARQUE CONOSCO!
        </h1>
        <div className={'botao-lista'}>
          BOTAO VER LISTA
        </div>
      </div>
      <footer>
        <div className={'logo-white'}>
          <img src={LogoWhite} />
        </div>
      </footer>
      {/* Photo by <a href="https://unsplash.com/@agustindiazg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Agustin Diaz Gargiulo</a> on <a href="https://unsplash.com/images/travel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */}
  
    </div>
  );
}
