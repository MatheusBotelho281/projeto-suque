import React from 'react'
import { InnerWrapper, Wrapper } from './styles'

export default function Sobre() {
  return (
    <Wrapper>
      <InnerWrapper>
        <p style={{ color: 'black' }}>
          Nossa missão é contar boas histórias. Seja na TV, no cinema, videoclipes, Web ou no teatro, acreditamos que vivemos em um país que tem muita
          coisa boa para contar! Sabemos que somente a informação é capaz de gerar transformação e fazemos questão de fazer parte deste processo. Aqui
          você vai conhecer um pouco mais do que fazemos, caso esteja buscando uma parceria, ou só por curiosidade mesmo. Seja bem vindo ao nosso mundo,
          que é construído dia a dia, através das experiências que profissionais e clientes, dividem conosco. É uma jornada e tanto! Mas, apesar de já
          estarmos há 10 anos no mercado, acreditamos que é apenas o começo de uma grande história.
        </p>
        <div className='titulo'>
          <p>Parceiros</p>
          <div className='parceiros'>
            <ul>
              <li>Silvia Spolidoro</li>
              <li>Carlos Baptista</li>
              <li>Feh Mercandelli</li>
              <li>Tasso</li>
            </ul>
          </div>
        </div>
      </InnerWrapper>
    </Wrapper>
  )
}
