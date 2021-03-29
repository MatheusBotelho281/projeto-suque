import React from 'react'
import styled from 'styled-components'

const Image = styled.div`
width: 35px;
height: 35px;
position: absolute;
left: 10px;
cursor: pointer;
z-index: 9999;

transition: all 0,4s;
img{
  position: absolute;
  width: 35px;
  height: auto;
}
`


export default function Images(props) {
  return (
    <Image>
      <img left={props.left} src='./img/menu.png' />
    </Image>
  )
}
