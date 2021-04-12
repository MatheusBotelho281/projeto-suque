import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
background-color: black;
position: relative;
.ph{
  @media only screen and (max-width: 726px){
    display: none;
  }
}
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
opacity: 100%;
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
  cursor: pointer;
  bottom: -180px;
  right: -40px;
  position: absolute;
  width: 20vw;
  @media only screen and (max-width: 1700px){
    bottom: -140px;
  }
  @media only screen and (max-width: 1400px){
    bottom: -130px;
    right: -30px;
  }
  @media only screen and (max-width: 1250px){
    bottom: -110px;
    right: -30px;
  }
  @media only screen and (max-width: 1200px){
    bottom: -140px;
    right: 75px;
  }
  @media only screen and (max-width: 876px){
    bottom: -110px;
    right: 65px;
  }
  @media only screen and (max-width: 726px){
    display: none;
  }
}
`