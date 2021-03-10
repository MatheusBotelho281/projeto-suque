import React, { useState } from 'react'
import Header from '../components/HeaderNoBg1'
import Text from '../components/producoes/Text'
import Videos from '../components/producoes/VideoBoxes'
import WBottom from '../components/WhiteBottom'

export default function producoes() {
  return (
    <>
    <Header />
    <Text textoApresentacao=' Conspiração é a produtora independente da América Latina mais indicada ao 
    Emmy Internacional. Vencedora do maior prêmio da TV mundial com ​A Mulher Invisível (Melhor Comédia), 
    é também realizadora de séries como ​Sob Pressão (TV Globo), ​Magnífica 70 (HBO), Reality Z (Netflix) 
    e 1​ Contra Todos (Fox). No cinema, participou dos festivais de Cannes, Berlim, Veneza, Toronto e foi 
    responsável por sucessos de bilheteria como ​Vai Que Cola,​ ​Eu Tu Eles e 2​ Filhos de Francisco — 
    indicação oficial do Brasil ao Oscar de Melhor Filme Estrangeiro.' />
    <Videos />
    <WBottom />
    </>
  )
}
