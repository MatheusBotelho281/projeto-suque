import React from 'react'
import { Logo } from '../Header/styles'
import { InnerWrapper, MiniLogos, Wrapper } from './style'

export default function WBottom() {
  return (
    <Wrapper>
      <InnerWrapper>
        <div>
          <p>© Suque Produções</p>
        </div>
        <Logo src='./img/logo.png' />
        <div>
          <MiniLogos src='./img/facebook.jpg' />
          <MiniLogos src='./img/twitter.jpg' />
          <MiniLogos src='./img/google-plus.jpg' />
          <MiniLogos src='./img/printerest.jpg' />
        </div>
      </InnerWrapper>
    </Wrapper>
  )
}
