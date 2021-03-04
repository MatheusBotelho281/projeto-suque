import React from 'react'
import { InnerWrapper, Wrapper } from './styles'

export default function Info() {
  return (
    <Wrapper>
      <InnerWrapper>
        <div>
          <h3>Opening Hours</h3>
          <p>Monday – Friday</p>
          <p>8am – 9pm</p>
        </div>
        <div>
          <h3>Our Location</h3>
          <p>547 Rainbow Road</p>
          <p>Los Angeles, CA 90069</p>
        </div>
        <div>
          <h3>Contact Info</h3>
          <p>(310) 495 – 7015</p>
          <p>info@GrantFlooring.com</p>
        </div>
      </InnerWrapper>
    </Wrapper>
  )
}
