import React from 'react'
import { Wrapper, Video, LinkVideo } from './styles'
import PopUp from '../HomePopUp'
import { useState } from 'react'

export default function VideoBoxesDs() {

  const [videoPopUp, setVideoPopUp] = useState(false)
  const [urlPopUp, setUrlPopUp] = useState('')

  function OpenPopUp(url) {
    setVideoPopUp(true)
    setUrlPopUp(url)
  }

  return (
    <>
      {videoPopUp && <PopUp urlVideo={urlPopUp} close={() => setVideoPopUp(false)} />}
      <Wrapper>
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
    </>
  )
}