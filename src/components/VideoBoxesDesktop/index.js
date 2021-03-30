import React from 'react'
import { Wrapper, InnerWrapper, Video, LinkVideo } from './styles'
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

  function OpenPopUp(url) {
    setVideoPopUp(true)
    setUrlPopUp(url)
  }

  function movimentarLeft(porc) {
    esquerda == 1 ? null : setEsquerda(porc)
  }
  
  function movimentarRight(porc) {
    esquerda == 1 ? null : setEsquerda(porc)
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
            <div className='geral'>
              <LinkVideo onClick={() => OpenPopUp('https://www.youtube.com/embed/SoPg4kjgcr4')}>
                <Video src='./img/mulheres-cesta.jpg' />
              </LinkVideo>
            </div>
            <div className='geral'>
              <LinkVideo onClick={() => OpenPopUp('https://www.youtube.com/embed/jF5h_xM5hhM')}>
                <Video src='./img/ella.jpg' />
              </LinkVideo>
            </div>
            <div className='geral'>
              <LinkVideo onClick={() => OpenPopUp('https://www.youtube.com/embed/dGHrd_Zsed4')}>
                <Video src='./img/rua-selva.jpg' />
              </LinkVideo>
            </div>
            <div className='geral'>
              <LinkVideo onClick={() => OpenPopUp('')}>
                <Video src='./img/forca.jpg' />
              </LinkVideo>
            </div>
            <div className='geral'>
              <LinkVideo onClick={() => OpenPopUp('https://www.youtube.com/embed/faJJqidkyEs')}>
                <Video src='./img/terapia-riso.jpg' />
              </LinkVideo>
            </div>
            <div className='geral'>
              <LinkVideo onClick={() => OpenPopUp('https://www.youtube.com/embed/RIxOrF7xqUs')}>
                <Video src='./img/salto-furia.jpg' />
              </LinkVideo>
            </div>
            <div className='geral'>
              <LinkVideo onClick={() => OpenPopUp('')}>
                <Video src='./img/comedy-rio.jpg' />
              </LinkVideo>
            </div>
          </InnerWrapper>
        </Wrapper>

      </div>
    </>
  )
}