import React from 'react'
import { InnerWrapper, Wrapper } from './styles'
import { useState } from 'react'

export default function Info() {

  const [linkMapa, setLinkMapa] = useState('https://www.google.com/maps/place/Rua+Figueiredo+de+Magalh%C3%A3es,+794+-+Copacabana,+Rio+de+Janeiro+-+RJ,+22031-012/@-22.9659592,-43.1896407,3a,75y,52.8h,90.68t/data=!3m7!1e1!3m5!1s75nJzYqS0PdEHiDIcZFIHw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3D75nJzYqS0PdEHiDIcZFIHw%26cb_client%3Dsearch.gws-prod.gps%26w%3D86%26h%3D86%26yaw%3D47.38717%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192!4m5!3m4!1s0x9bd55c74fb6ca5:0xad962b2531939a5e!8m2!3d-22.9657567!4d-43.1894145')
  const [cor, setCor] = useState('#000')

  return (
    <Wrapper>
      <InnerWrapper style={{ marginTop: '5%' }} color={cor}>
        <div style={{ width: '15%' }}>
          <h2>Escritórios</h2>
        </div>
        <div className="margin1" style={{ marginLeft: '6%' }}>
          <h3>Rio de Janeiro</h3>
          <p>(21)9.8290-8734</p>
          <p>Av. Figueiredo de Magalhães 794<br />
          Copacabana, CEP 22031–012<br />
          Rio de Janeiro, RJ</p>
          <a href={linkMapa} target="_blank"><div onMouseEnter={() => setCor('gray')}
            onMouseLeave={() => setCor('#000')}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <p className='seta'>Mapa</p>
            <svg style={{ marginLeft: '10%', marginTop: '4%' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 100">
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7"
                  refX="0" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" />
                </marker>
              </defs>
              <line x1="0" y1="50" x2="200" y2="50" stroke="#000"
                stroke-width="6" marker-end="url(#arrowhead)" />
            </svg>
          </div></a>
        </div>
      </InnerWrapper>
      <InnerWrapper style={{ marginTop: '3%' }}>
        <div style={{ width: '15%' }}>
          <h2>Emails</h2>
        </div>
        <div className="margin4" style={{ marginLeft: '6%' }} >
          <h3>Contato</h3>
          <p style={{ fontSize: '23px' }}><u>suqueproducoes@suqueproducoes.com.br</u></p>
        </div>
      </InnerWrapper>
    </Wrapper>
  )
}
