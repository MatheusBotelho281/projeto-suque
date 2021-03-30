import React from 'react'
import HeaderNoBg from '../components/HeaderNoBg'
import WBottom from '../components/WhiteBottom'
import Info from '../components/ContatoInfo'
import ContatoForm from '../components/Contato'
import Head from 'next/head'

export default function contato() {
  return (
    <div>
      <Head><title>Suque Produções</title></Head>
      <HeaderNoBg />
      <Info />
      <ContatoForm />
      <WBottom />
    </div>
  )
}
