import React from 'react'
import { Wrapper, Video, LinkVideo, TextoImg } from './styles'
import PopUp from '../PopUp'
import { useState } from 'react'

export default function VideoBoxesDs() {

  const [videoPopUp, setVideoPopUp] = useState(false)
  const [urlPopUp, setUrlPopUp] = useState('')
  const [opacidade, setOpacidade] = useState(false)
  const [opacidade1, setOpacidade1] = useState(false)
  const [opacidade2, setOpacidade2] = useState(false)
  const [opacidade3, setOpacidade3] = useState(false)
  const [opacidade4, setOpacidade4] = useState(false)
  const [opacidade5, setOpacidade5] = useState(false)
  const [opacidade6, setOpacidade6] = useState(false)

  function OpenPopUp(url) {
    setVideoPopUp(true)
    setUrlPopUp(url)
  }

  function PlayHover() {
    setOpacidade(true)
  }
  function PlayHoverOut() {
    setOpacidade(false)
  }
  function PlayHover1() {
    setOpacidade1(true)
  }
  function PlayHoverOut1() {
    setOpacidade1(false)
  }
  function PlayHover2() {
    setOpacidade2(true)
  }
  function PlayHoverOut2() {
    setOpacidade2(false)
  }
  function PlayHover3() {
    setOpacidade3(true)
  }
  function PlayHoverOut3() {
    setOpacidade3(false)
  }
  function PlayHover4() {
    setOpacidade4(true)
  }
  function PlayHoverOut4() {
    setOpacidade4(false)
  }
  function PlayHover5() {
    setOpacidade5(true)
  }
  function PlayHoverOut5() {
    setOpacidade5(false)
  }
  function PlayHover6() {
    setOpacidade6(true)
  }
  function PlayHoverOut6() {
    setOpacidade6(false)
  }

  return (
    <Wrapper>
      {videoPopUp && <PopUp urlVideo={urlPopUp} close={() => setVideoPopUp(false)} />}
      <div onMouseEnter={PlayHover} onMouseLeave={PlayHoverOut} className='geral'>
        <LinkVideo onClick={() => OpenPopUp('https://www.youtube.com/embed/dyrvB5t2Dtg?list=PLvkdDr3UvorMi0S-rwPnRQ6BKZbxneuhK')} >
          <Video style={{ opacity: opacidade ? '75%' : '100%' }} src='./img/mulheres-cesta.jpg' />
          <TextoImg>
            <img style={{ opacity: opacidade ? '1' : '0' }} src='./img/play-button.png' />
          </TextoImg>
        </LinkVideo>
      </div>
      <div onMouseEnter={PlayHover1} onMouseLeave={PlayHoverOut1} className='geral'>
        <LinkVideo onClick={() => OpenPopUp('https://www.youtube.com/embed/faJJqidkyEs?list=PLvkdDr3UvorOYGquVBerFwIXe3VlkcNsr')}>
          <Video style={{ opacity: opacidade1 ? '75%' : '100%' }} src='./img/terapia-riso.jpg' />
          <TextoImg>
            <img style={{ opacity: opacidade1 ? '1' : '0' }} src='./img/play-button.png' />
          </TextoImg>
        </LinkVideo>
      </div>
      <div onMouseEnter={PlayHover2} onMouseLeave={PlayHoverOut2} className='geral'>
        <LinkVideo onClick={() => OpenPopUp('https://www.youtube.com/embed/RIxOrF7xqUs')}>
          <Video style={{ opacity: opacidade2 ? '75%' : '100%' }} src='./img/salto-furia.jpg' />
          <TextoImg>
            <img style={{ opacity: opacidade2 ? '1' : '0' }} src='./img/play-button.png' />
          </TextoImg>
        </LinkVideo>
      </div>
      <div onMouseEnter={PlayHover4} onMouseLeave={PlayHoverOut4} className='geral'>
        <LinkVideo>
          <a href='https://www.youtube.com/c/Asdespachadas/featured' target='_blank'>
            <Video style={{ opacity: opacidade4 ? '75%' : '100%' }} src='./img/despacha.jpg' />
          </a>
          <TextoImg>
            <img style={{ opacity: opacidade4 ? '1' : '0' }} src='./img/seta.png' />
          </TextoImg>
        </LinkVideo>
      </div>
      <div onMouseEnter={PlayHover5} onMouseLeave={PlayHoverOut5} className='geral'>
        <LinkVideo onClick={() => OpenPopUp('https://www.youtube.com/embed/SoPg4kjgcr4')} >
          <Video style={{ opacity: opacidade5 ? '75%' : '100%' }} src='./img/mulheres-cesta.jpg' />
          <TextoImg>
            <img style={{ opacity: opacidade5 ? '1' : '0' }} src='./img/play-button.png' />
          </TextoImg>
        </LinkVideo>
      </div>
 
    </Wrapper>
  )
}
