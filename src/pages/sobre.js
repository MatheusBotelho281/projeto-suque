import React, { useState } from 'react'
import HeaderNoBg from '../components/HeaderNoBg1'
import WBottom from '../components/WhiteBottom'
import BBottom from '../components/BlueBottom'
import Sobre from '../components/Sobre'
import Details from '../components/Sobre/Detalhes'

export default function sobre() {
  return (
    <>
    <HeaderNoBg page="sobre" />
    <Sobre />
    <Details />
    <BBottom />
    <WBottom />
    </>
  )
}