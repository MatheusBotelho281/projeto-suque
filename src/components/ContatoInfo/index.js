import React from 'react'
import { InnerWrapper, Wrapper } from './styles'

export default function Info() {
  return (
    <Wrapper>
      <InnerWrapper>
        <div>
          <h3>Funcionamento</h3>
          <p>Segunda – Sábado</p>
          <p>8:00 – 21:00</p>
        </div>
        <div>
          <h3>Localização</h3>
          <p>547 Estrada X</p>
          <p>Cidade, Estado</p>
        </div>
        <div>
          <h3>Contato</h3>
          <p>(xx) xxxxx – xxxx</p>
          <p>email@email.com</p>
        </div>
      </InnerWrapper>
    </Wrapper>
  )
}
