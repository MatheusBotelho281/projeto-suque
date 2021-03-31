import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
background-color: black;
position: relative;
.geral{
  display: flex;
  width: 33.33%;
  height: 33.33;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1200px){
    width: 50%;
    height: 100%;
  }
  @media only screen and (max-width: 726px){
    width: 100%;
    height: 100%;
  }
}
a{
  position: relative;
}
`
export const Video = styled.img`
width: 100%;
height: 100%;
cursor: pointer;
transition: 0.4s;
opacity: 75%;
:hover{
  opacity: 100%;
}
`
export const LinkVideo = styled.div`
position: relative;
align-items: center;
justify-content: center;
display: flex;

`
export const TextoImg = styled.div`
z-index: 999;
position: absolute;
color: white;
font-size: 30px;
font-family: "Lato", Sans-serif;
align-items: center;
justify-content: center;
display: flex;
transition: all 0,4s;
img{
  cursor: pointer;
  opacity: 0;
  width: 80px;
  transition: all 0,4s;
  :hover{
  }
}
.texto{
  position: absolute;
  bottom: -225%;
  left: -320%;
}
`