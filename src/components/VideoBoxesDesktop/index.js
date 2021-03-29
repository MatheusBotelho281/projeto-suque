import React from 'react'
import { Wrapper, Video, LinkVideo } from './styles'
import PopUp from '../HomePopUp'
import { useState } from 'react'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import Image from './images'

export default function VideoBoxesDs() {

  const [videoPopUp, setVideoPopUp] = useState(false)
  const [urlPopUp, setUrlPopUp] = useState('')
  const [esquerda, setEsquerda] = useState(0)

  function OpenPopUp(url) {
    setVideoPopUp(true)
    setUrlPopUp(url)
  }
  function SlideToLeft() {
    esquerda == 0 ? null : setEsquerda(Left - 10)
    console.log(Left)
  }

  return (
    <>
      <div>
        {videoPopUp && <PopUp urlVideo={urlPopUp} close={() => setVideoPopUp(false)} />}
        <Wrapper move={esquerda + 'px'} style={{ overflow: 'hidden' }}>
          <Image onClick={() => console.log(esquerda)} left='95.1%' />
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
        </Wrapper>
      </div>
    </>
  )
}