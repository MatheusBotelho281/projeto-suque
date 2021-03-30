import React, { useState } from 'react'
import HeaderNoBg from '../components/HeaderNoBg1'
import Text from '../components/roteiro/Text'
import Videos from '../components/roteiro/VideoBoxes'
import WBottom from '../components/WhiteBottom'
import Head from 'next/head'

export default function roteiro() {
  return (
    <>
      <Head><title>Suque Produções</title></Head>
      <HeaderNoBg page="roteiro" />
      <Text titulo='Roteiro' textoApresentacao='A partir de uma ideia, damos vida à sua história. Podemos trabalhar em todas as etapas do processo de criação, construção de bíblia, argumento, roteiros para cinema, televisão, teatro, Branded Content, publicidade, institucional, clipe musical, web ou aulas online.
      E fazemos tudo isso com paixão! O que faz toda a diferença.
      Trabalhamos para que nosso conteúdo possa tocar, de alguma forma, a vida de quem assiste. Porque no fim das contas, é só isso que importa, não é?' />
      <Videos />
      <WBottom />
    </>
  )
}
