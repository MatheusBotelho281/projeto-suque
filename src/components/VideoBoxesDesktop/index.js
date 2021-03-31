import React from 'react'
import { BotaoVideo, Wrapper, InnerWrapper, Video, LinkVideo } from './styles'
import PopUp from '../HomePopUp'
import { useState } from 'react'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import Image from './images'
import styled from 'styled-components'

export default function VideoBoxesDs() {

  const [videoPopUp, setVideoPopUp] = useState(false)
  const [urlPopUp, setUrlPopUp] = useState('')
  const [esquerda, setEsquerda] = useState('0')
  const [play, setPlay] = useState(false)
  const [play1, setPlay1] = useState(false)
  const [play2, setPlay2] = useState(false)
  const [play3, setPlay3] = useState(false)
  const [play4, setPlay4] = useState(false)
  const [play5, setPlay5] = useState(false)
  const [play6, setPlay6] = useState(false)

  const [opacidade1, setOpacidade1] = useState('1')
  const [opacidade2, setOpacidade2] = useState('1')
  const [opacidade3, setOpacidade3] = useState('1')
  const [opacidade4, setOpacidade4] = useState('1')
  const [opacidade5, setOpacidade5] = useState('1')
  const [opacidade6, setOpacidade6] = useState('1')
  const [opacidade7, setOpacidade7] = useState('1')

  function OpenPopUp(url) {
    setVideoPopUp(true)
    setUrlPopUp(url)
  }

  function movimentarLeft(porc) {
    esquerda == 1 ? null : setEsquerda(porc)
    if (esquerda == '0%') {
      setEsquerda('-42.88%')
    } else {
    }
  }

  function movimentarRight(porc) {
    esquerda == 1 ? null : setEsquerda(porc)
    if (esquerda == '-42.88%') {
      setEsquerda('0%')
    } else {
    }
  }
  function enter() {
    setOpacidade1('0.7')
    setPlay(true)
  }
  function leave() {
    setOpacidade1('1')
    setPlay(false)
  }
  function enter1() {
    setOpacidade2('0.7')
    setPlay1(true)
  }
  function leave1() {
    setOpacidade2('1')
    setPlay1(false)
  }
  function enter2() {
    setOpacidade3('0.7')
    setPlay2(true)
  }
  function leave2() {
    setOpacidade3('1')
    setPlay2(false)
  }
  function enter3() {
    setOpacidade4('0.7')
    setPlay3(true)
  }
  function leave3() {
    setOpacidade4('1')
    setPlay3(false)
  }
  function enter4() {
    setOpacidade5('0.7')
    setPlay4(true)
  }
  function leave4() {
    setOpacidade5('1')
    setPlay4(false)
  }
  function enter5() {
    setOpacidade6('0.7')
    setPlay5(true)
  }
  function leave5() {
    setOpacidade6('1')
    setPlay5(false)
  }
  function enter6() {
    setOpacidade7('0.7')
    setPlay6(true)
  }
  function leave6() {
    setOpacidade7('1')
    setPlay6(false)
  }

  const BotaoSlide = styled.div`
  z-index: 99999;
  width: 50px;
  height: 50px;
  position: absolute;
  left: ${props => props.local};
  img{
    width: 50px;
    cursor: pointer;
    transition: all 0.3s;
    :hover{
      transform: scale(1.2)!important;
    }
  }
  `
  const Teste = styled.button`
  position: absolute;
  top: 70%;
  left: 39%;
  width: 100px;
  height: 40px;
  font-size: 18px;
  color: white;
  border: none;
  border-radius: 3px;
  font-family: 'Lato', Sans-serif;
  text-transform: uppercase;
  background-color: #0e10da;
  letter-spacing: 2px;
  z-index: 10;
  transition: all 0.3s;
  cursor: pointer;
  opacity: 2!important;
  :hover{
    background-color: darkblue;
    opacity: 2!important;
  }
  `

  return (
    <>
      <div>
        {videoPopUp && <PopUp urlVideo={urlPopUp} close={() => setVideoPopUp(false)} />}
        <Wrapper>
          <BotaoSlide local='1%' onClick={() => movimentarLeft('0%')}>
            <img src='./img/seta2.png' />
          </BotaoSlide>
          <BotaoSlide local='54%' onClick={() => movimentarRight('-42.88%')}>
            <img src='./img/seta1.png' />
          </BotaoSlide>
          <InnerWrapper move={esquerda}>
            <div onMouseEnter={() => setPlay(true), enter} onMouseLeave={() => setPlay(false), leave} className='geral'>
              <LinkVideo onClick={() => OpenPopUp('https://www.youtube.com/embed/SoPg4kjgcr4')}>
                {play && <Teste onClick={() => setPlay(false), leave}>veja</Teste>}
                <Video opacidade={opacidade1} src='./img/mulheres-cesta.jpg' />
              </LinkVideo>
            </div>
            <div onMouseEnter={() => setPlay1(true), enter1} onMouseLeave={() => setPlay1(false), leave1} className='geral'>
              <LinkVideo onClick={() => OpenPopUp('https://www.youtube.com/embed/jF5h_xM5hhM')}>
                {play1 && <Teste onClick={() => setPlay1(false), leave1}>Veja</Teste>}
                <Video opacidade={opacidade2} src='./img/ella.jpg' />
              </LinkVideo>
            </div>
            <div onMouseEnter={() => setPlay2(true), enter2} onMouseLeave={() => setPlay2(false), leave2} className='geral'>
              <LinkVideo onClick={() => OpenPopUp('https://www.youtube.com/embed/dGHrd_Zsed4')}>
                {play2 && <Teste onClick={() => setPlay2(false), leave2}>veja</Teste>}
                <Video opacidade={opacidade3} src='./img/rua-selva.jpg' />
              </LinkVideo>
            </div>
            <div onMouseEnter={() => setPlay3(true), enter3} onMouseLeave={() => setPlay3(false), leave3} className='geral'>
              <LinkVideo onClick={() => OpenPopUp('')}>
                {play3 && <Teste onClick={() => setPlay3(false), leave3}>veja</Teste>}
                <Video opacidade={opacidade4} src='./img/forca.jpg' />
              </LinkVideo>
            </div>
            <div onMouseEnter={() => setPlay4(true), enter4} onMouseLeave={() => setPlay4(false), leave4} className='geral'>
              <LinkVideo onClick={() => OpenPopUp('https://www.youtube.com/embed/faJJqidkyEs')}>
                {play4 && <Teste onClick={() => setPlay4(false), leave4}>veja</Teste>}
                <Video opacidade={opacidade5} src='./img/terapia-riso.jpg' />
              </LinkVideo>
            </div>
            <div onMouseEnter={() => setPlay5(true), enter5} onMouseLeave={() => setPlay5(false), leave5} className='geral'>
              <LinkVideo onClick={() => OpenPopUp('https://www.youtube.com/embed/RIxOrF7xqUs')}>
                {play5 && <Teste onClick={() => setPlay5(false), leave5}>veja</Teste>}
                <Video opacidade={opacidade6} src='./img/salto-furia.jpg' />
              </LinkVideo>
            </div>
            <div onMouseEnter={() => setPlay6(true), enter6} onMouseLeave={() => setPlay6(false), leave6} className='geral'>
              <LinkVideo onClick={() => OpenPopUp('')}>
                {play6 && <Teste onClick={() => setPlay6(false), leave6}>veja</Teste>}
                <Video opacidade={opacidade7} src='./img/comedy-rio.jpg' />
              </LinkVideo>
            </div>
          </InnerWrapper>
        </Wrapper>

      </div>
    </>
  )
}