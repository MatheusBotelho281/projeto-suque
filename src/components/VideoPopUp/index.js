import React from 'react'
import { Wrapper, InnerWrapper, DashedBorder, VideoImage, BlueBox, PlayHover } from './styles'

export default function VideoPopUp() {
  return (
    <Wrapper>
      <VideoImage>
        <DashedBorder />
        <BlueBox />
        <img className='video' src='./img/comedy-rio.jpg' />
        <PlayHover>
        <img className='play' src='./img/play-button.png' />
        </PlayHover>
      </VideoImage>
      <InnerWrapper>
        <h1>Medieval knights on battle field</h1>
      </InnerWrapper>
    </Wrapper>
  )
}
