import React from 'react'
import { InnerWrapper, Wrapper } from './styles'

export default function Text(props) {
  return (
    <Wrapper>
      <InnerWrapper>
        <p>{props.textoApresentacao}</p>
      </InnerWrapper>
    </Wrapper>
  )
}
