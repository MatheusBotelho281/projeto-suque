import React from 'react'
import { BG, TittleWrapper, Wrapper } from './style'

export default function ImageContato() {
  return (
    <Wrapper>
      <BG>
        <TittleWrapper>
          <h2 className='h2'>Contact us</h2>
          <p>Let’s talk about your flooring project.
          Contact us for a free consultation and we’ll be
          happy to answer all of your décor questions.</p>
          <img className='image1' src='./img/upperimg1.jpg' />
          <img className='image' src='./img/upperimg.jpg' />
          <img className='cuboAzul' src='./img/blue-cube.jpg' />
        </TittleWrapper>
      </BG>
    </Wrapper>
  )
}
