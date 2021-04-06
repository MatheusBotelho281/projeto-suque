import React from 'react'
import { Wrapper, Img } from './styles'
import { useState } from 'react'

export default function Slider() {

  const [direita, setDireita] = useState('12.5%')
  const [tempo, setTempo] = useState('0s')

  function mover() {
    if (direita == '0%') {
      setTempo('1s')
      setDireita('12.5%')
    } else if (direita == '12.5%') {
      setTempo('1s')
      setDireita('25%')
    } else if (direita == '25%') {
      setDireita('37.5%')
    } else if (direita == '37.5%') {
      setDireita('50%')
    } else if (direita == '50%') {
      setDireita('62.5%')
    } else if (direita == '62.5%') {
      setDireita('75%')
      setTimeout(function () {
        setTempo('0s'), setDireita('0%');
      }, 1000);
    } else if (direita == '75%') {
      setTempo('0s')
      setDireita('0%')
      setTimeout(function () {
        setTempo('1s'), setDireita('12.5%');
      }, 100);
    }
  }
  function mover1() {
    if (direita == '12.5%') {
      setTempo('1s')
      setDireita('0%')
      setTimeout(function () {
        setTempo('0s'), setDireita('75%');
      }, 1000);
    } else if (direita == '75%') {
      setTempo('1s')
      setDireita('62.5%')
    } else if (direita == '62.5%') {
      setDireita('50%')
    } else if (direita == '50%') {
      setDireita('37.5%')
    } else if (direita == '37.5%') {
      setDireita('25%')
    } else if (direita == '25%') {
      setDireita('12.5%')
    }
  }
  return (

    <Wrapper time={tempo} right={direita}>
      <img onClick={mover} src="./img/seta3.png" />
      <img style={{ left: '1%' }} onClick={mover1} src="./img/seta4.png" />
      <div className="imagens">
        <Img url='./img/6.jpg'></Img>
        <Img url='./img/1.jpg'></Img>
        <Img url='./img/2.jpg'></Img>
        <Img url='./img/3.jpg'></Img>
        <Img url='./img/4.jpg'></Img>
        <Img url='./img/5.jpg'></Img>
        <Img url='./img/6.jpg'></Img>
        <Img url='./img/1.jpg'></Img>
      </div>
    </Wrapper>
  )
}
