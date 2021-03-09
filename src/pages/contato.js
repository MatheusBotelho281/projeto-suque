import React from 'react'
import HeaderNoBg from '../components/HeaderNoBg'
import WBottom from '../components/WhiteBottom'
import Info from '../components/ContatoInfo'
import ContatoForm from '../components/Contato'

export default function contato() {
  return (
    <div>
      <HeaderNoBg />
      <Info />
      <ContatoForm />
      <WBottom />
    </div>
  )
}
