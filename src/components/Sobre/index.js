import React from 'react'
import PopUp from '../HomePopUp'
import { InnerWrapper, Wrapper } from './styles'
import {useState} from 'react'

export default function Sobre() {

  const [videoPopUp, setVideoPopUp] = useState(false)
  const [urlPopUp, setUrlPopUp] = useState('')

  function OpenPopUp(url) {
    setVideoPopUp(true)
    setUrlPopUp(url)
  }

  return (
    <Wrapper>
      {videoPopUp && <PopUp urlVideo={urlPopUp} close={() => setVideoPopUp(false)} />}
      <InnerWrapper>
        <p style={{ color: 'black' }}>
          Nossa missão é contar boas histórias. Seja na TV, no cinema, videoclipes, Web ou no teatro, acreditamos que vivemos em um país que tem muita
          coisa boa para contar! Sabemos que somente a informação é capaz de gerar transformação e fazemos questão de fazer parte deste processo. Aqui
          você vai conhecer um pouco mais do que fazemos, caso esteja buscando uma parceria, ou só por curiosidade mesmo. Seja bem vindo ao nosso mundo,
          que é construído dia a dia, através das experiências que profissionais e clientes, dividem conosco. É uma jornada e tanto! Mas, apesar de já
          estarmos há 10 anos no mercado, acreditamos que é apenas o começo de uma grande história.
        </p>
        <div className='titulo'>
        <div className="div2" style={{ marginRight: '20px',borderRight: '2px solid black', width: '2px', height: '160px' }}></div>
          <div className='parceiros'>
            <div className="div1" style={{ borderRight: '2px solid black', width: '2px', height: '120px' }}></div>
            <div>
              <p onClick={() => OpenPopUp('https://www.youtube.com/embed/FB3z6SdDnuk')}>Silvia Spolidoro</p>
              <p onClick={() => OpenPopUp('https://player.vimeo.com/video/268753916')}>Carlos Baptista</p>
              <p onClick={() => OpenPopUp('https://www.youtube.com/embed/BRItcjYR_j8?list=PL4Z6L6-S8ciNOoIICcIdpIge39bywyLAX')}>Feh Mercandelli</p>
            </div>
            <div className="div1"  style={{ borderRight: '2px solid black', width: '2px', height: '120px' }}></div>
            <div>
              <a href="https://tassodourado.wordpress.com" target="_blank"><p>Tasso Dourado</p></a>
              <a href="https://jpgalv.wixsite.com/cinemari" target="_blank"><p>Mariana Rocha</p></a>
              <a href="https://vimeo.com/punchfilmes" target="_blank"><p>Ari Marins</p></a>
            </div>
            <div className="div1"  style={{ borderRight: '2px solid black', width: '2px', height: '120px' }}></div>
          </div>
          <div className="div2" style={{ marginLeft: '20px',borderRight: '2px solid black', width: '2px', height: '160px' }}></div>
        </div>
      </InnerWrapper>
    </Wrapper>
  )
}
