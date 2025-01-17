import React from 'react'
import verstappen from './img/verstappen sem fundo.jpg.png'
import verst from "./img/verstappen-14.jpg"
import vervshaml from "./img/verstappenvshamtilton.jpg"
import versegundotitulo from "./img/verstappensegundotitulo.jpg"
import verterceirotitulo from "./img/verstappenterceirotitulo.jpg"

function Site () {
  return (
    <div id='container'>
      <header id='imagem'></header>
      
      <div id='verstappen'>
        <img src={verstappen} alt="Imagem de max verstappen" title='max verstappen'/>
        <p>Max Verstappen é um piloto de Fórmula 1 amplamente reconhecido por sua habilidade e determinação. Nascido em 30 de setembro de 1997, na cidade de Hasselt, Bélgica, ele compete sob a bandeira dos Países Baixos, seguindo as raízes de sua família holandesa. Desde cedo, Max demonstrou um talento extraordinário para o automobilismo, influenciado pelo pai, Jos Verstappen, ex-piloto de Fórmula 1, e pela mãe, Sophie Kumpen, uma competidora de kart de alto nível. Sua trajetória no esporte começou no kart, onde acumulou títulos e consolidou uma base sólida que o levaria à elite do automobilismo mundial.</p>
      </div>

      <div id='titulos'>
        <h1>Primeiro título</h1>
      <p>2021: Venceu seu primeiro título em uma temporada altamente disputada contra Lewis Hamilton, com a decisão ocorrendo na última volta do GP de Abu Dhabi.</p>
        <img src={vervshaml} alt="Imagem Max"/>

        <h1>Segundo título</h1>
        <p>2022: Dominou a temporada com vitórias consistentes e um desempenho dominante, garantindo o título com várias corridas de antecedência.</p>
        <img src= {versegundotitulo} alt="max verstappen" srcset="segundo titulo" />

        <h1>Terceiro título</h1>
        <p>2023: Continuou sua supremacia, mostrando consistência e garantindo mais um título com uma performance quase impecável.</p>
        <img src= {verterceirotitulo} alt="verstappen terceiro titulo" srcset="terceiro titulo" />
      </div>
    </div>
  )
}

export default Site