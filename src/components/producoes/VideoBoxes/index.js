import React from 'react'
import { Wrapper, Video, LinkVideo, TextoImg } from './styles'
import PopUp from '../PopUp'
import { useState } from 'react'

export default function VideoBoxesDs() {

  const [videoPopUp, setVideoPopUp] = useState(false)
  const [urlPopUp, setUrlPopUp] = useState('')
  const [opacidade, setOpacidade] = useState(false)
  const [opacidade1, setOpacidade1] = useState(false)
  const [opacidade2, setOpacidade2] = useState(false)
  const [opacidade3, setOpacidade3] = useState(false)
  const [opacidade4, setOpacidade4] = useState(false)
  const [opacidade5, setOpacidade5] = useState(false)
  const [opacidade6, setOpacidade6] = useState(false)
  const [opacidade7, setOpacidade7] = useState(false)
  const [opacidade8, setOpacidade8] = useState(false)
  const [opacidade9, setOpacidade9] = useState(false)
  const [opacidade10, setOpacidade10] = useState(false)
  const [opacidade11, setOpacidade11] = useState(false)

  function OpenPopUp(url) {
    setVideoPopUp(true)
    setUrlPopUp(url)
  }

  function PlayHover() {
    setOpacidade(true)
  }
  function PlayHoverOut() {
    setOpacidade(false)
  }
  function PlayHover1() {
    setOpacidade1(true)
  }
  function PlayHoverOut1() {
    setOpacidade1(false)
  }
  function PlayHover2() {
    setOpacidade2(true)
  }
  function PlayHoverOut2() {
    setOpacidade2(false)
  }
  function PlayHover3() {
    setOpacidade3(true)
  }
  function PlayHoverOut3() {
    setOpacidade3(false)
  }
  function PlayHover4() {
    setOpacidade4(true)
  }
  function PlayHoverOut4() {
    setOpacidade4(false)
  }
  function PlayHover5() {
    setOpacidade5(true)
  }
  function PlayHoverOut5() {
    setOpacidade5(false)
  }
  function PlayHover6() {
    setOpacidade6(true)
  }
  function PlayHoverOut6() {
    setOpacidade6(false)
  }
  function PlayHover7() {
    setOpacidade7(true)
  }
  function PlayHoverOut7() {
    setOpacidade7(false)
  }
  function PlayHover8() {
    setOpacidade8(true)
  }
  function PlayHoverOut8() {
    setOpacidade8(false)
  }
  function PlayHover9() {
    setOpacidade9(true)
  }
  function PlayHoverOut9() {
    setOpacidade9(false)
  }
  function PlayHover10() {
    setOpacidade10(true)
  }
  function PlayHoverOut10() {
    setOpacidade10(false)
  }
  function PlayHover11() {
    setOpacidade11(true)
  }
  function PlayHoverOut11() {
    setOpacidade11(false)
  }


  return (
    <Wrapper>
      {videoPopUp && <PopUp urlVideo={urlPopUp} close={() => setVideoPopUp(false)} />}
      <div onMouseEnter={PlayHover} onMouseLeave={PlayHoverOut} className='geral'>
        <LinkVideo onClick={() => OpenPopUp('https://www.youtube.com/embed/dyrvB5t2Dtg?list=PLvkdDr3UvorMi0S-rwPnRQ6BKZbxneuhK')} >
          <Video style={{ opacity: opacidade ? '75%' : '100%' }} src='./img/mulheres-cesta1.jpg' />
          <TextoImg>
            <img style={{ opacity: opacidade ? '1' : '0' }} src='./img/play-button.png' />
            {/* <p style={{ opacity: opacidade ? '1' : '0' }} className='texto'>Debate Mulheres à Cesta</p> */}
          </TextoImg>
        </LinkVideo>
      </div>
      <div onMouseEnter={PlayHover1} onMouseLeave={PlayHoverOut1} className='geral'>
        <LinkVideo onClick={() => OpenPopUp('https://www.youtube.com/embed/faJJqidkyEs?list=PLvkdDr3UvorOYGquVBerFwIXe3VlkcNsr')}>
          <Video style={{ opacity: opacidade1 ? '75%' : '100%' }} src='./img/terapia-riso1.jpg' />
          <TextoImg>
            <img style={{ opacity: opacidade1 ? '1' : '0' }} src='./img/play-button.png' />
            {/* <p style={{ opacity: opacidade1 ? '1' : '0' }} className='texto'>Terapia do Riso</p> */}
          </TextoImg>
        </LinkVideo>
      </div>
      <div onMouseEnter={PlayHover2} onMouseLeave={PlayHoverOut2} className='geral'>
        <LinkVideo onClick={() => OpenPopUp('https://www.youtube.com/embed/RIxOrF7xqUs')}>
          <Video style={{ opacity: opacidade2 ? '75%' : '100%' }} src='./img/salto-furia1.jpg' />
          <TextoImg>
            <img style={{ opacity: opacidade2 ? '1' : '0' }} src='./img/play-button.png' />
            {/* <p style={{ opacity: opacidade2 ? '1' : '0' }} className='texto'>Salto em Fúria</p> */}
          </TextoImg>
        </LinkVideo>
      </div>
      <div onMouseEnter={PlayHover4} onMouseLeave={PlayHoverOut4} className='geral'>
        <LinkVideo>
          <a href='https://www.youtube.com/c/Asdespachadas/featured' target='_blank'>
            <Video style={{ opacity: opacidade4 ? '75%' : '100%' }} src='./img/despacha1.jpg' />
          </a>
          <TextoImg>
            <img style={{ opacity: opacidade4 ? '1' : '0' }} src='./img/seta.png' />
            {/* <p style={{ opacity: opacidade4 ? '1' : '0' }} className='texto'>Despacha-te</p> */}
          </TextoImg>
        </LinkVideo>
      </div>
      <div onMouseEnter={PlayHover5} onMouseLeave={PlayHoverOut5} className='geral'>
        <LinkVideo onClick={() => OpenPopUp('https://www.youtube.com/embed/SoPg4kjgcr4')} >
          <Video style={{ opacity: opacidade5 ? '75%' : '100%' }} src='./img/mulheres-cesta2.png' />
          <TextoImg>
            <img style={{ opacity: opacidade5 ? '1' : '0' }} src='./img/play-button.png' />
            {/* <p style={{ opacity: opacidade5 ? '1' : '0' }} className='texto'>Trailer: Mulheres à Cesta</p> */}
          </TextoImg>
        </LinkVideo>
      </div>
      <div className='geral'>
        <LinkVideo onClick={() => OpenPopUp('')} onMouseEnter={PlayHover6} onMouseLeave={PlayHoverOut6}>
          <Video style={{ opacity: opacidade6 ? '75%' : '100%' }} src='./img/sorir.png' />
          <TextoImg>
            <img style={{ opacity: opacidade6 ? '1' : '0' }} src='./img/play-button.png' />
            {/* <p style={{ opacity: opacidade6 ? '1' : '0' }} className='texto'>Turma do Clic</p> */}
          </TextoImg>
        </LinkVideo>
      </div>
      <div className='geral'>
        <LinkVideo onClick={() => OpenPopUp('https://www.youtube.com/embed/ESDWmhIVhYg')} onMouseEnter={PlayHover7} onMouseLeave={PlayHoverOut7}>
          <Video style={{ opacity: opacidade7 ? '75%' : '100%' }} src='./img/terapia4.png' />
          <TextoImg>
            <img style={{ opacity: opacidade7 ? '1' : '0' }} src='./img/play-button.png' />
            {/* <p style={{ opacity: opacidade7 ? '1' : '0' }} className='texto'>Mulheres à Cesta</p> */}
          </TextoImg>
        </LinkVideo>
      </div>
      <div className='geral'>
        <LinkVideo onClick={() => OpenPopUp('https://www.youtube.com/embed/660flfKtR8I')} onMouseEnter={PlayHover8} onMouseLeave={PlayHoverOut8}>
          <Video style={{ opacity: opacidade8 ? '75%' : '100%' }} src='./img/terapia2.png' />
          <TextoImg>
            <img style={{ opacity: opacidade8 ? '1' : '0' }} src='./img/play-button.png' />
            {/* <p style={{ opacity: opacidade8 ? '1' : '0' }} className='texto'>Só pra Rir</p> */}
          </TextoImg>
        </LinkVideo>
      </div>
      <div className='geral'>
        <LinkVideo onClick={() => OpenPopUp('')} onMouseEnter={PlayHover9} onMouseLeave={PlayHoverOut9}>
          <Video style={{ opacity: opacidade9 ? '75%' : '100%' }} src='./img/masterclass.png' />
          <TextoImg>
            <img style={{ opacity: opacidade9 ? '1' : '0' }} src='./img/play-button.png' />
            {/* <p style={{ opacity: opacidade9 ? '1' : '0' }} className='texto'>Zago</p> */}
          </TextoImg>
        </LinkVideo>
      </div>
      <div className='geral'>
        <LinkVideo onClick={() => OpenPopUp('https://www.youtube.com/embed/6ShPCpnFjq0')} onMouseEnter={PlayHover10} onMouseLeave={PlayHoverOut10}>
          <Video style={{ opacity: opacidade10 ? '75%' : '100%' }} src='./img/loucos.png' />
          <TextoImg>
            <img style={{ opacity: opacidade10 ? '1' : '0' }} src='./img/play-button.png' />
            {/* <p style={{ opacity: opacidade9 ? '1' : '0' }} className='texto'>Zago</p> */}
          </TextoImg>
        </LinkVideo>
      </div>
      <div className='geral'>
        <LinkVideo onClick={() => OpenPopUp('')} onMouseEnter={PlayHover11} onMouseLeave={PlayHoverOut11}>
          <Video style={{ opacity: opacidade11 ? '75%' : '100%' }} src='./img/riocomedy.png' />
          <TextoImg>
            <img style={{ opacity: opacidade11 ? '1' : '0' }} src='./img/play-button.png' />
            {/* <p style={{ opacity: opacidade9 ? '1' : '0' }} className='texto'>Zago</p> */}
          </TextoImg>
        </LinkVideo>
      </div>
      <div className='geral'>
        <LinkVideo>
          <Video className="ph" style={{ cursor: "default" }} src='./img/whiteplaceholder.png' />
          <TextoImg>
          </TextoImg>
        </LinkVideo>
      </div>
    </Wrapper>
  )
}
