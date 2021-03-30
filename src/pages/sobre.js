import React, { useState } from 'react'
import HeaderNoBg from '../components/HeaderNoBg1'
import WBottom from '../components/WhiteBottom'
import BBottom from '../components/BlueBottom'
import Sobre from '../components/Sobre'
import Details from '../components/Sobre/Detalhes'
import Head from 'next/head'

export default function sobre() {
  return (
    <>
      <Head><title>Suque Produções</title></Head>
      <HeaderNoBg page="sobre" />
      <Sobre />
      <WBottom />
    </>
  )
}