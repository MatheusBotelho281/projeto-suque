import React from 'react'
import { Wrapper, Video, LinkVideo, TextoImg } from './styles'
import PopUp from '../PopUp'
import { useState } from 'react'

export default function VideoBoxesDs() {

  const [videoPopUp, setVideoPopUp] = useState(false)
  const [urlPopUp, setUrlPopUp] = useState('')

  function OpenPopUp(url) {
    setVideoPopUp(true)
    setUrlPopUp(url)
  }

  return (
    <Wrapper>
      {videoPopUp && <PopUp urlVideo={urlPopUp} close={() => setVideoPopUp(false)} />}
      <LinkVideo onClick={() => OpenPopUp('https://www.youtube.com/embed/SoPg4kjgcr4')} >
        <Video src='./img/mulheres-cesta.jpg' />
        {/* <TextoImg>
          Mulheres à Cesta
        </TextoImg> */}
      </LinkVideo>
      <LinkVideo onClick={() => OpenPopUp('https://www.youtube.com/embed/jF5h_xM5hhM')}>
        <Video src='./img/ella.jpg' />
      </LinkVideo>
      <LinkVideo onClick={() => OpenPopUp('https://www.youtube.com/embed/dGHrd_Zsed4')}>
        <Video src='./img/rua-selva.jpg' />
      </LinkVideo>
      <LinkVideo>
        <a href='https://www.youtube.com/c/Asdespachadas/featured' target='_blank'> 
          <Video src='./img/despacha.jpg' />
        </a>
      </LinkVideo>
      <LinkVideo onClick={() => OpenPopUp('https://www.youtube.com/embed/RIxOrF7xqUs')}>
        <Video src='./img/salto-furia.jpg' />
      </LinkVideo>
      <LinkVideo onClick={() => OpenPopUp('https://www.youtube.com/embed/wwywOmi1IIQ')}>
        <Video src='./img/prefiro-cela.jpg' />
      </LinkVideo>
    </Wrapper>
  )
}
