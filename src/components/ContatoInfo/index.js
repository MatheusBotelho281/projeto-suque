import React from 'react'
import { InnerWrapper, Wrapper } from './styles'
import { useState } from 'react'

export default function Info() {

  const [cor, setCor] = useState('#000')

  return (
    <Wrapper>
      <InnerWrapper style={{ marginTop: '1%' }} color={cor}>
        <div style={{ width: '15%' }}>
          <h2>Escritórios</h2>
        </div>
        <div className="margin1" style={{ marginLeft: '6%' }}>
          <h3>Rio de Janeiro</h3>
          <p>+55 21 3184-2000</p>
          <p>Rua Teresa Guimarães, 144<br />
          Botafogo, CEP 22280-050<br />
          Rio de Janeiro, RJ</p>
          <div onMouseEnter={() => setCor('gray')}
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
          </div>
        </div>
        <div style={{ marginLeft: '10%' }}>
          <h3>Rio de Janeiro</h3>
          <p>+55 21 3184-2000</p>
          <p>Rua Teresa Guimarães, 144<br />
          Botafogo, CEP 22280-050<br />
          Rio de Janeiro, RJ</p>
          <div onMouseEnter={() => setCor('gray')}
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
          </div>
        </div>
      </InnerWrapper>
      <InnerWrapper style={{ marginTop: '3%' }}>
        <div style={{ width: '15%' }}>
          <h2>Áreas</h2>
        </div>
        <div className="margin3" style={{ marginLeft: '6%' }}>
          <h3>Cinema + TV</h3>
          <a style={{ cursor: 'pointer' }}><u>entretenimento@conspira.com.br</u></a>
        </div>
        <div className="margin2" style={{ marginLeft: '7.5%' }}>
          <h3>Branded Content</h3>
          <a style={{ cursor: 'pointer' }}><u>conspiramais@conspira.com.br</u></a>
        </div>
        <div className="margin2" style={{ marginLeft: '7.5%' }}>
          <h3>Imprensa</h3>
          <a style={{ cursor: 'pointer' }}><u>imprensa@conspira.com.br</u></a>
        </div>
      </InnerWrapper>
      <InnerWrapper style={{ marginTop: '3%' }}>
        <div style={{ width: '15%' }}>
          <h2>Emails</h2>
        </div>
        <div className="margin4" style={{ marginLeft: '6%' }} >
          <h3>Contato</h3>
          <p style={{ cursor: 'pointer', fontSize: '23px' }}><u>contato@conspiracao.com.br</u></p>
        </div>
      </InnerWrapper>
      <InnerWrapper style={{ alignItems:'start', width: 'auto', marginTop: '3%' }}>
        <p>Conspiração only receives projects and screenplays from third parties upon direct requests.<br />
        The company does not analyze any material sent voluntarily, regardless of its artistic qualities<br />
        and commercial potential. It also does not evaluate portfolio of actors and models. Resumes from other<br />
        areas should be sent to curriculo@conspiração.com.br.</p>
      </InnerWrapper>
    </Wrapper>
  )
}
