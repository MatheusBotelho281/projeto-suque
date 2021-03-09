import React from 'react'
import HeaderLink from '../HeaderLinkBlack'
import {InnerWrapper, Logo, TextWrapper, Wrapper } from './styles'
import styled from 'styled-components'
import Menu from '../HeaderMenuNoBg1'
import HeaderText from '../TextHeader'
import Link from 'next/link'
import ImageContato from '../ContatoImg'

const Lupa1 = styled.img`
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
          <HeaderLink nomeOpcao='Home'/>
          <HeaderLink nomeOpcao='Sobre'/>
          <HeaderLink pageUrl='/producoes' nomeOpcao='Produções'/>
          <HeaderLink nomeOpcao='Roteiro'/>
          <HeaderLink pageUrl='/contato' nomeOpcao='Contato'/>
          <Lupa1 src='./img/lupa-preta.png' />
        </div>
        <Menu />
      </InnerWrapper>
    </Wrapper>
  )
}
