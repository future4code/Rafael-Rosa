import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Black&facialHairType=BeardLight&facialHairColor=Black&clotheType=ShirtVNeck&clotheColor=Blue03&eyeType=Happy&eyebrowType=UpDownNatural&mouthType=Smile&skinColor=Light'" 
          nome="Rafael S. da Rosa" 
          descricao="Oi, eu sou o Rafael, aluno do curso de frontend na Labenu. Adoro descobrir coisas novas. Morei na Irlanda e ao pensar que conheceria o mundo, na verdade, conheci a mim mesmo. Entendi que questionar faz pensar no outro lado e que não existem verdades absolutas. Gosto de gente e acredito no potencial que a tecnologia tem de fazer a vida melhor."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://daguanatural.com.br/site/wp-content/uploads/2020/09/icone-ideia.jpg" 
          nome="Ideia Agência Digital" 
          descricao="Gerente de Projetos" 
        />
        
        <CardGrande 
          imagem="https://agenciapense.com.br/wp-content/uploads/2020/05/cropped-favicon-2-02-32x32.png" 
          nome="Agência Pense" 
          descricao="Atendimento Comercial" 
        />
      </div>

      <div className="page-section-container">
        <h2>Dados de contato</h2>
        <CardPequeno 
          email="meu@email.com.br" 
          fone="(51) 99999.9999" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
