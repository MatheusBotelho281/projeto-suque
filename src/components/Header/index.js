import React from 'react'
import HeaderLink from '../HeaderLink'
import {InnerWrapper, Logo, TextWrapper, Wrapper } from './styles'
import styled from 'styled-components'
import Menu from '../HeaderMenu'
import HeaderText from '../TextHeader'
import Link from 'next/link'

const Lupa = styled.img`
height: 20px;
width:auto;
cursor: pointer;
margin: 0 1rem;
@media only screen and (max-width: 1024px){
  display:none;
}
`

export default function Header() {


  return (
    <Wrapper>
      <InnerWrapper>
        <div>
          <Logo src='./img/logo.png' alt='Suque Produções' />
        </div>
        <div>
          <HeaderLink nomeOpcao='Home' />
          <HeaderLink nomeOpcao='Sobre' />
          <HeaderLink pageUrl='/producoes' nomeOpcao='Produções' />
          <HeaderLink nomeOpcao='Roteiro' />
          <HeaderLink pageUrl='/contato' nomeOpcao='Contato' />
          <Lupa src='./img/lupa.png' />
        </div>
        <Menu />
      </InnerWrapper>
      <HeaderText />
    </Wrapper>
  )
}
