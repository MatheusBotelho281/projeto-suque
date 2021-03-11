import React from 'react'
import { InnerWrapper, Wrapper, Close } from './styles'

export default function PopUp(props) {
  return (
    <Wrapper>
      <InnerWrapper>
        <Close onClick={props.close} src='./img/close.png' />
        <iframe src={props.urlVideo} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </InnerWrapper>
    </Wrapper>
  )
}
