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
      <LinkVideo onClick={() => OpenPopUp('https://www.youtube.com/embed/dyrvB5t2Dtg?list=PLvkdDr3UvorMi0S-rwPnRQ6BKZbxneuhK')} >
        <Video src='./img/mulheres-cesta.jpg' />
        {/* <TextoImg>
          Mulheres à Cesta
        </TextoImg> */}
      </LinkVideo>
      <LinkVideo onClick={() => OpenPopUp('https://www.youtube.com/embed/faJJqidkyEs?list=PLvkdDr3UvorOYGquVBerFwIXe3VlkcNsr')}>
        <Video src='./img/terapia-riso.jpg' />
      </LinkVideo>
      <LinkVideo onClick={() => OpenPopUp('https://www.youtube.com/embed/RIxOrF7xqUs')}>
        <Video src='./img/salto-furia.jpg' />
      </LinkVideo>
      <LinkVideo onClick={() => OpenPopUp('https://www.youtube.com/embed/faJJqidkyEs')}>
        <Video src='./img/terapia-riso.jpg' />
      </LinkVideo>
      <LinkVideo>
        <a href='https://www.youtube.com/c/Asdespachadas/featured' target='_blank'>
          <Video src='./img/despacha.jpg' />
        </a>
      </LinkVideo>
      <LinkVideo onClick={() => OpenPopUp('https://www.youtube.com/embed/SoPg4kjgcr4')} >
        <Video src='./img/mulheres-cesta.jpg' />
      </LinkVideo>
    </Wrapper>
  )
}
