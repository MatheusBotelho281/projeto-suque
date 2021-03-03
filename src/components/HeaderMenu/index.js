import React from 'react'
import { useState } from 'react'
import { WrapperMenu, MenuButton } from './styles'
import styled from 'styled-components'

const Lupa = styled.img`
height: 20px;
width:auto;
cursor: pointer;
margin: 0.63rem 0rem;
@media only screen and (min-width: 1025px){
  display:none;
}
`

const Wrapper = styled.div`
display: flex;
margin: 0 6.5rem;
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
    background: 'red'
  }

  return (
    <WrapperMenu>
      <Wrapper>
        <MenuButton onClick={ToggleMenu}>
          <img src={isMenuOpened ? './img/close.png' : './img/menu.png'} alt='Menu' />
        </MenuButton>
        <Lupa src='./img/lupa.png' />
      </Wrapper>
    </WrapperMenu>
  )
}
