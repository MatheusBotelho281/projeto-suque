import React from 'react'
import { InnerWrapper, Wrapper } from './styles'

export default function Text(props) {
  return (
    <Wrapper>
      <InnerWrapper>
        <h1>{props.titulo}</h1>
        <p>{props.textoApresentacao}</p>
      </InnerWrapper>
    </Wrapper>
  )
}
