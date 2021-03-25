import React, { useState } from 'react'
import HeaderNoBg from '../components/HeaderNoBg1'
import Text from '../components/producoes/Text'
import Videos from '../components/producoes/VideoBoxes'
import WBottom from '../components/WhiteBottom'

export default function producoes() {
  return (
    <>
      <HeaderNoBg page="producoes" />
      <Text titulo='Produções' textoApresentacao='Criamos e realizamos histórias. 
      Do roteiro à pós produção, trabalhamos em todo o processo para que o nosso conteúdo seja produzido com qualidade. Seja para cinema, televisão, teatro, Branded Content, publicidade, institucional, clipe musical, web ou aulas online, toda a estratégia de produção é criada para que seja possível entregar o melhor produto, com o menor custo possível. 
      Com mais de 10 anos de experiência, vivemos vários contextos ao longo desse tempo, o que nos mostrou que sempre será possível criar e realizar. Desde que você tenha um bom plano.' />
      <Videos />
      <WBottom />
    </>
  )
}
