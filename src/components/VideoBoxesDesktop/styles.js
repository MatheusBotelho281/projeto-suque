import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
@media only screen and (max-width: 737px){
  display: none;
}
.geral{
  width: 33.33%;
  @media only screen and (max-width: 1000px){
    width: 50%;
  }
}
`
export const Video = styled.img`
cursor: pointer;
width: 100%;
border-top: 10px solid;
transition: 0.2s;
:hover{
  opacity: 0.8;
}
`
export const LinkVideo = styled.a`
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