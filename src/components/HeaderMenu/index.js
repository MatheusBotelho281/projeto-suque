import React from 'react'
import { useState } from 'react'
import { WrapperMenu, MenuButton, MenuItems } from './styles'
import styled from 'styled-components'

const Lupa = styled.img`
height: 20px;
width:auto;
cursor: pointer;
margin: 0.37rem 0rem;
@media only screen and (min-width: 1025px){
  display:none;
}
`

const Wrapper = styled.div`
display: flex;
padding-right: 60px;
@media only screen and (max-width: 320px){
  padding-right: 15px;
}
`

export default function Menu() {

  const[isMenuOpened, setIsMenuOpened] = useState(false)
  const[linkSelected, setLinkSelected] = useState('home')
console.log(isMenuOpened)
  function choosePage(page){
    setLinkSelected(page)
  }

  function ToggleMenu(){
    setIsMenuOpened(!isMenuOpened)
  }

  const Selected = {
    background: '#0000cc'
  }

  return (
    <WrapperMenu>
      <Wrapper>
        <MenuButton onClick={ToggleMenu}>
          <img src={isMenuOpened ? './img/close.png' : './img/menu.png'} alt='Menu' />
        </MenuButton>
        <Lupa src='./img/lupa.png' />
        <MenuItems
         height={isMenuOpened ? '17.8rem' : '0'}
         bottom={isMenuOpened ? '-17.8rem' : '0'}>
        <div onClick={() => choosePage('home')}
        style={linkSelected == 'home' ? Selected : null}>
          <a>Home</a>
        </div>
        <div onClick={() => choosePage('sobre')}
        style={linkSelected == 'sobre' ? Selected : null}>
          <a>Sobre</a>
        </div>
        <div onClick={() => choosePage('producoes')}
        style={linkSelected == 'producoes' ? Selected : null}>
          <a>Produções</a>
        </div>
        <div onClick={() => choosePage('roteiro')}
        style={linkSelected == 'roteiro' ? Selected : null}>
          <a>Roteiro</a>
        </div>
        <div onClick={() => choosePage('contato')} 
        style={linkSelected == 'contato' ? Selected : null}>
          <a>Contato</a>
        </div>
        </MenuItems>
      </Wrapper>
    </WrapperMenu>
  )
}
