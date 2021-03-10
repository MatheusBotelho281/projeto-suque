import React from 'react'
import { Wrapper, Video, LinkVideo, TextoImg } from './styles'

export default function VideoBoxesDs() {
  return (
    <Wrapper>
      <LinkVideo href='https://www.youtube.com/watch?v=6Fkn-SW-91M' target='_blank'>
        <Video src='./img/mulheres-cesta.jpg' />
        {/* <TextoImg>
          Mulheres à Cesta
        </TextoImg> */}
      </LinkVideo>
      <LinkVideo href='https://youtu.be/jF5h_xM5hhM' target='_blank'><Video src='./img/ella.jpg' /></LinkVideo>
      <LinkVideo href='https://www.youtube.com/watch?v=dGHrd_Zsed4&t' target='_blank'><Video src='./img/rua-selva.jpg' /></LinkVideo>
      <LinkVideo href='https://www.youtube.com/watch?v=faJJqidkyEs' target='_blank'><Video src='./img/terapia-riso.jpg' /></LinkVideo>
      <LinkVideo href='https://www.youtube.com/watch?v=RIxOrF7xqUs' target='_blank'><Video src='./img/salto-furia.jpg' /></LinkVideo>
      <LinkVideo><Video src='./img/comedy-rio.jpg' /></LinkVideo>
    </Wrapper>
  )
}
