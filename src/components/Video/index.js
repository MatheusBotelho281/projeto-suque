import React from 'react'
import { Close, Wrapper } from './styles'

export default function Video(props) {
  return (
    <Wrapper>
      <Close src='./img/close.png' />
      <iframe src="https://www.youtube.com/embed/XHOmBV4js_E" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
      </iframe>
    </Wrapper>
  )
}
