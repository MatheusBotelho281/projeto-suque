import React from 'react'
import Video from '../Video'
import { Wrapper, InnerWrapper, DashedBorder, VideoImage, BlueBox, PlayHover } from './styles'
import { useState } from 'react'

export default function VideoPopUp() {

  const [videoPopUp, setVideoPopUp] = useState(false)

  return (
    <Wrapper>
      {videoPopUp && <Video close={() => setVideoPopUp(false)} />}
      <VideoImage>
        <DashedBorder />
        <BlueBox />
        <img className='video' src='./img/comedy-rio.jpg' />
        <PlayHover onClick={() => setVideoPopUp(true)}>
          <img className='play' src='./img/play-button.png' />
        </PlayHover>
      </VideoImage>
      <InnerWrapper>
        <h1>Medieval knights on battle field</h1>
      </InnerWrapper>
    </Wrapper>
  )
}
