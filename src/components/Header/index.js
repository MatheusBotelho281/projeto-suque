import React from 'react'
import HeaderLink from '../HeaderLink'
import {InnerWrapper, Logo, Wrapper } from './styles'
import styled from 'styled-components'
import Menu from '../HeaderMenu'

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
          <HeaderLink nomeOpcao='Produções' />
          <HeaderLink nomeOpcao='Roteiro' />
          <HeaderLink nomeOpcao='Contato' />
          <Lupa src='./img/lupa.png' />
        </div>
        <Menu />
      </InnerWrapper>
    </Wrapper>
  )
}
