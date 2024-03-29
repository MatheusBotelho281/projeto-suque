import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
width: 200%;
display: flex;
position: relative;
align-items: center;
justify-content: center;
overflow: hidden;
transition: all 1s;
background-color: black;
@media only screen and (max-width: 737px){
  display: none;
}
.geral{
  display: flex;
  position: relative;
  overflow: hidden;
  width: auto;
}
.watch{
  position: absolute;
  z-index: 1000000;
  right: 50%;
  top: 70%;
}
`

export const InnerWrapper = styled.div`
display: flex;
width: 175%;
display: flex;
position: relative;
align-items: center;
justify-content: center;
overflow: hidden;
transition: all 1s;
left: ${props => props.move};
@media only screen and (max-width: 737px){
  display: none;
}
.geral{
  display: flex;
  position: relative;
  overflow: hidden;
  width: auto;
}
`


export const Video = styled.img`
display: flex;
position: relative;
overflow: hidden;
cursor: pointer;
width: 100%;
border-top: 10px solid;
transition: 0.2s;
opacity: ${props => props.opacidade}
`
export const LinkVideo = styled.a`
display: flex;
position: relative;
overflow: hidden;
width: 100%;
height: 100%;
@media only screen and (max-width: 1200px){
  width: 100%;
  height: 100%;
  border-top: 8px solid;
}
@media only screen and (max-width: 726px){
  width: 100%;
  height: auto;
  border-top: 2px solid;
}

`