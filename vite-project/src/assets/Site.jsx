import React from 'react'
import verstappen from './img/verstappen sem fundo.jpg.png'
import verst from "./img/verstappen-14.jpg"
import vervshaml from "./img/verstappenvshamtilton.jpg"
import versegundotitulo from "./img/verstappensegundotitulo.jpg"
import verterceirotitulo from "./img/verstappenterceirotitulo.jpg"
import carroredbull from "./img/carroredbull.jpg"
import hamiltom from "./img/hamiltomrival.jpg"


function Site () {
  return (
    <div id='container'>
      <header id='imagem'></header>
      
      <div id='verstappen'>
        <img src={verstappen} alt="Imagem de max verstappen" title='max verstappen'/>
        <p>Max Verstappen é um piloto de Fórmula 1 amplamente reconhecido por sua habilidade e determinação. Nascido em 30 de setembro de 1997, na cidade de Hasselt, Bélgica, ele compete sob a bandeira dos Países Baixos, seguindo as raízes de sua família holandesa. Desde cedo, Max demonstrou um talento extraordinário para o automobilismo, influenciado pelo pai, Jos Verstappen, ex-piloto de Fórmula 1, e pela mãe, Sophie Kumpen, uma competidora de kart de alto nível. Sua trajetória no esporte começou no kart, onde acumulou títulos e consolidou uma base sólida que o levaria à elite do automobilismo mundial.</p>
      </div>

      <div id='titulos'>
        <div className='tit'>
          <h1>Primeiro título</h1>
                <p>2021: Venceu seu primeiro título em uma temporada altamente disputada contra Lewis Hamilton, com a decisão ocorrendo na última volta do GP de Abu Dhabi.</p>
          <img src={vervshaml} alt="Imagem Max" id='vervshal'/>
        </div>

        <div className='tit'>
          <h1>Segundo título</h1>
          <p>2022: Dominou a temporada com vitórias consistentes e um desempenho dominante, garantindo o título com várias corridas de antecedência.</p>
          <img src= {versegundotitulo} alt="max verstappen" srcset="segundo titulo" />
        </div>

        <div  className='tit'>
          <h1>Terceiro título</h1>
          <p>2023: Continuou sua supremacia, mostrando consistência e garantindo mais um título com uma performance quase impecável.</p>
          <img src= {verterceirotitulo} alt="verstappen terceiro titulo" srcset="terceiro titulo" />
        </div>
      </div>

      <div id="redbull">
        <h1>Seu carro atual</h1>
        <p>O carro atual de Max Verstappen na Fórmula 1 é o Red Bull RB19, projetado pela equipe técnica da Red Bull Racing liderada pelo renomado engenheiro Adrian Newey. Este modelo é uma evolução do RB18, que dominou a temporada de 2022, mas traz aprimoramentos significativos que o tornam ainda mais eficiente e competitivo.

        O RB19 é equipado com o motor Honda RBPT, fruto da parceria entre a Red Bull Powertrains e a Honda. Este motor híbrido         combina potência e eficiência, proporcionando desempenho impressionante tanto em retas quanto em curvas. Ele é projetado         para atender às regulamentações técnicas da FIA, maximizando o desempenho dentro dos limites estabelecidos.

        A aerodinâmica do RB19 é um dos pontos de destaque, com um design que prioriza o fluxo de ar e a redução de arrasto. A         asa dianteira e o difusor traseiro foram ajustados para garantir estabilidade em altas velocidades e maior tração nas         curvas. A suspensão ajustável permite que o carro se adapte a diferentes tipos de pistas, dando a Verstappen uma         vantagem significativa em diversas condições de corrida.

        Além disso, o RB19 é conhecido por sua confiabilidade. Durante a temporada, o carro apresentou poucas falhas mecânicas,         permitindo a Verstappen estabelecer uma campanha consistente e dominante. A combinação de um piloto habilidoso como         Verstappen e um carro tecnicamente avançado como o RB19 faz desta parceria uma das mais dominantes na história recente         da Fórmula 1.

        Com o RB19, Max Verstappen continua a escrever seu legado, consolidando-se como um dos maiores pilotos da história do         esporte. O carro é um verdadeiro símbolo da excelência técnica e da busca incessante por vitórias.</p>

        <img src={carroredbull} alt="carrod a red bull" srcset="carro do mas verstappen" />
      </div>
    </div>
  )
}

export default Site