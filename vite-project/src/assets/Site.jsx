import React from 'react'
import verstappen from './img/verstappen sem fundo.jpg.png'

function Site () {
  return (
    <div id='container'>
      <header id='imagem'></header>
      
      <div id='verstappen'>
        <img src={verstappen} alt="Imagem de max verstappen" title='max verstappen'/>
        <p>Max Verstappen é um piloto de Fórmula 1 amplamente reconhecido por sua habilidade e determinação. Nascido em 30 de setembro de 1997, na cidade de Hasselt, Bélgica, ele compete sob a bandeira dos Países Baixos, seguindo as raízes de sua família holandesa. Desde cedo, Max demonstrou um talento extraordinário para o automobilismo, influenciado pelo pai, Jos Verstappen, ex-piloto de Fórmula 1, e pela mãe, Sophie Kumpen, uma competidora de kart de alto nível. Sua trajetória no esporte começou no kart, onde acumulou títulos e consolidou uma base sólida que o levaria à elite do automobilismo mundial.</p>
      </div>
    </div>
  )
}

export default Site