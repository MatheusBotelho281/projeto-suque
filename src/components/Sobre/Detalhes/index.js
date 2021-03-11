import React from 'react'
import { Wrapper, InnerWrapper } from './styles'

export default function Details() {
  return (
    <Wrapper>
      <InnerWrapper>
        <div>
          <h2>
            Serviços de Filmagem
          </h2>
          <img className='blueBar' src='./img/blue-cube.jpg' />
          <div>
            <p className='textoSup'>
              Oferecemos diversos serviços, como serviços de filmagem, workshop e aulas particulares, aluguel de
              equipamentos. Se você tiver alguma dúvida, não hesite em nos contatar.
            </p>
          </div>
          <div className='superior'>
            <div className='inferior'>
              <img src='./img/tripod.png' />
              <h2>
                Serviços de filmagem
              </h2>
              <p className='textoInf'>
                Posso filmar o seu projeto, seja um anúncio comercial,
                um curta-metragem ou um documentário. Tenho experiência nessas áreas.
              </p>
            </div>
            <div className='inferior'>
              <img src='./img/movie-reel.png' />
              <h2>
                Workshops e aulas particulares
              </h2>
              <p className='textoInf'>
                Posso filmar o seu projeto, seja um anúncio comercial,
                um curta-metragem ou um documentário. Tenho experiência nessas áreas.
              </p>
            </div>
            <div className='inferior'>
              <img src='./img/camera.png' />
              <h2>
                Aluguel de equipamento
              </h2>
              <p className='textoInf'>
                Posso filmar o seu projeto, seja um anúncio comercial,
                um curta-metragem ou um documentário. Tenho experiência nessas áreas.
              </p>
            </div>
          </div>
        </div>
      </InnerWrapper>
    </Wrapper>
  )
}
