import React from 'react'
import HeaderNoBg from '../components/HeaderNoBg'
import WBottom from '../components/WhiteBottom'
import Info from '../components/ContatoInfo'
import Head from 'next/head'

export default function contato() {
  return (
    <div>
      <Head><title>Suque Produções</title></Head>
      <HeaderNoBg />
      <Info />
      <WBottom />
    </div>
  )
}
