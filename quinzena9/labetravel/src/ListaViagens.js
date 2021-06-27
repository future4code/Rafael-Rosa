import './listaViagens.css'
import Logo from './assets/labetravel-logo.svg'
import LogoWhite from './assets/labetravel-logo-white.svg'


const viagens = [
  {
      "id": "fASyoxeM4ksQzcrEZD5a",
      "name": "Festança Marciana",
      "durationInDays": 228,
      "date": "21/12/21",
      "description": "Uma viagem bem legal, na melhor época de marte",
      "planet": "Marte"
  },
  {
      "id": "jF6FCruXkzSaBW9e16vk",
      "description": "Único tour que fazemos em planeta anão no sistema solar! Levem casacos que a previsão é de −230 °C",
      "name": "Picnic de Inverno em Plutão",
      "planet": "Plutão",
      "durationInDays": 980,
      "date": "21/12/20"
  },
  {
      "id": "k5LYmxl7xGgRIHOnaOAE",
      "description": "Noite mágica, com vista para as 69 luas de Jupiter",
      "date": "21/12/20",
      "name": "Multi luau em Jupiter",
      "planet": "Jupiter",
      "durationInDays": 540
  },
  {
      "id": "zdUqOQUPLzSFGKiCX1Wj",
      "description": "Nenhum surfista intergalático pode ficar fora dessa!",
      "date": "21/12/20",
      "name": "Surfando em Netuno",
      "durationInDays": 540,
      "planet": "Netuno"
  }
]

export default function ListaViagens() {
  console.log(viagens);

  const lista = viagens.map((viagem) => {
    return (
      <div className={'card'} key={viagem.id}>
        <h2>{viagem.name}</h2>
        <p>{viagem.description}</p>
        <p><strong>Local: </strong>{viagem.planet}</p>
        <p><strong>Data: </strong>{viagem.date}</p>
        <p><strong>Duração: </strong>{viagem.durationInDays} dias</p>
        <button>Quero me cadastrar!</button>
      </div>
    )
  })
  

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
      <div className={'cabecalho'}>
        <h1>
          Lista de viagens
        </h1>
      </div>
      <div className={'main'}>
        {lista}
      </div>
      <footer>
        <div className={'logo-white'}>
          <img src={LogoWhite} />
        </div>
      </footer>

    </div>
  );
}
