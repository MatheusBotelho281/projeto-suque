import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
`
export const Video = styled.img`
width: 100%;
height: 100%;
cursor: pointer;
border-top: 10px solid;
transition: 0.2s;
:hover{
  opacity: 0.8;
}
@media only screen and (max-width: 1200px){
  width: 100%;
  height: 100%;
}
@media only screen and (max-width: 726px){
  width: 100%;
  height: 100%;
}
`
export const LinkVideo = styled.a`
width: 33.33%;
height: 33.33%;
@media only screen and (max-width: 1200px){
  width: 50%;
  height: 50%;
  border-top: 8px solid;
}
@media only screen and (max-width: 726px){
  width: 100%;
  height: 100%;
  border-top: 2px solid;
}

`