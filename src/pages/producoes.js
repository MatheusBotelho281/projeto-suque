import React, { useState } from 'react'
import HeaderNoBg from '../components/HeaderNoBg1'
import Text from '../components/producoes/Text'
import Videos from '../components/producoes/VideoBoxes'
import WBottom from '../components/WhiteBottom'

export default function producoes() {
  return (
    <>
    <HeaderNoBg page="producoes" />
    <Text titulo='Produções' textoApresentacao='Nossa missão é contar boas histórias.  

Seja na TV, no cinema, videoclipes, Web ou no teatro, acreditamos que vivemos em um país que tem muita coisa boa para contar! Sabemos que somente a informação é capaz de gerar transformação e fazemos questão de fazer parte deste processo.  

Aqui você vai conhecer um pouco mais do que fazemos, caso esteja buscando uma parceria, ou só por curiosidade mesmo. 

Seja bem vindo ao nosso mundo, que é construído dia a dia, através das experiências que profissionais e clientes, dividem conosco. 

É uma jornada e tanto! Mas estamos apenas no começo...' />
    <Videos />
    <WBottom />
    </>
  )
}
