import React from 'react'
import { BG, TittleWrapper, Wrapper } from './style'

export default function ImageContato() {
  return (
    <Wrapper>
      <BG>
        <TittleWrapper>
          <h2 className='h2'>Contate-nos</h2>
          <p>Vamos conversar sobre seu projeto.
          Nos contate para uma consultoria gratuita e lhe ajudaremos com seu projeto.</p>
          <img className='image1' src='./img/upperimg1.jpg' />
          <img className='image' src='./img/upperimg.jpg' />
          <img className='cuboAzul' src='./img/blue-cube.jpg' />
        </TittleWrapper>
      </BG>
    </Wrapper>
  )
}
