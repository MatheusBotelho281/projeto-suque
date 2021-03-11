import React from 'react'
import { InnerWrapper, Wrapper } from './styles'

export default function Sobre() {
  return (
    <Wrapper>
      <InnerWrapper>
        <div className='imagens'>
          <img className='red' src='./img/red-dashed.png ' />
          <img className='img' src='./img/terapia-riso.jpg' />
        </div>
        <div>
          <h3 className='since'>
            desde 1993
          </h3>
          <h2 className='texto'>
            Somos uma produtora de filmes e vídeos criativos com sede em ________, Brasil.
          </h2>
          <div className='blueBar' />
          <p>
          Somos uma produtora criativa de filmes e fotos com fome de qualidade estética. Para criar coisas modernas reconhecíveis,
          estamos trabalhando com uma forte rede de profissionais experientes. Montamos equipes para moldar sua identidade, 
          divulgar sua ideia e gerenciar o fluxo de trabalho da pré à pós-produção.
          </p>
        </div>
      </InnerWrapper>
    </Wrapper>
  )
}
