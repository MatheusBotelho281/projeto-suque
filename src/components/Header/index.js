import React from 'react'
import HeaderLink from '../HeaderLink'
import { InnerWrapper, Logo, TextWrapper, Wrapper } from './styles'
import styled from 'styled-components'
import Menu from '../HeaderMenu'
import HeaderText from '../TextHeader'
import Link from 'next/link'
import SliderHome from '../Carousel'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const slider = (
  <AutoplaySlider
    play={true}
    cancelOnInteraction={false}
    interval={3000}
    mobileTouch={false}
    buttons={false}
    style={{height: '70vh'}}
  >
    <div data-src="./img/1.jpg" />
    <div data-src="./img/2.jpg" />
    <div data-src="./img/3.jpg" />
    <div data-src="./img/4.jpg" />
    <div data-src="./img/5.jpg" />
    <div data-src="./img/6.jpg" />
  </AutoplaySlider>
);

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
          <Logo src='./img/logoBgBlack.png' alt='Suque Produções' />
        </div>
        <div>
          <HeaderLink nomeOpcao='Home' />
          <HeaderLink pageUrl='/sobre' nomeOpcao='Sobre' />
          <HeaderLink pageUrl='/producoes' nomeOpcao='Produções' />
          <HeaderLink pageUrl='/roteiro' nomeOpcao='Roteiro' />
          <HeaderLink pageUrl='/contato' nomeOpcao='Contato' />
          <Lupa src='./img/lupa.png' />
        </div>
        <Menu />
      </InnerWrapper>
      {slider}
    </Wrapper>
  )
}
