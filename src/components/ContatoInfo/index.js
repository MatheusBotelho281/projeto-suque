import React from 'react'
import { InnerWrapper, Wrapper } from './styles'

export default function Info() {
  return (
    <Wrapper>
      <InnerWrapper>
        <div>
          <h3>Localização</h3>
          <p>Av. Figueiredo de Magalhães 794</p>
          <p>Copacabana, Rio de Janeiro</p>
        </div>
        <div>
          <h3>Contato</h3>
          <p>(21) 98290-8734</p>
          <p>suqueproducoes@suqueproducoes.com.br</p>
        </div>
      </InnerWrapper>
    </Wrapper>
  )
}
