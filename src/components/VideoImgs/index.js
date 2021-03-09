import React from 'react'
import { InnerWrapper, Wrapper, QAzul, InnerWrapper1, QPontilhado } from './styles'

export default function ImgDes() {
  return (
    <Wrapper>
      <InnerWrapper>
        <div>
          <QAzul />
          <img className='imagem' src='./img/comedy-rio.jpg' />
        </div>
        <div className='texto'>
          <h2>Excepteur sint occaecat</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </InnerWrapper>
      <InnerWrapper1>
        <div className='texto'>
          <h2>Fugiat Nulla Pariatur</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.</p>
        </div>
        <div>
          <QPontilhado />
          <img className='imagem' src='./img/comedy-rio.jpg' />
        </div>
      </InnerWrapper1>
    </Wrapper>
  )
}
