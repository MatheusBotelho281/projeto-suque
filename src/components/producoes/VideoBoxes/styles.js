import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
background-color: black;
position: relative;
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
@media only screen and (max-width: 1200px){
  width: 100%;
  height: 100%;
}
@media only screen and (max-width: 726px){
  width: 100%;
  height: 100%;
}
`
export const LinkVideo = styled.div`
position: relative;
width: 33.33%;
height: 33.33;
@media only screen and (max-width: 1200px){
  width: 50%;
  height: auto;
}
@media only screen and (max-width: 726px){
  width: 100%;
  height: auto;
}

`
export const TextoImg = styled.div`
z-index: 2;
position: absolute;
color: white;
font-size: 30px;
font-family: "Lato", Sans-serif;
bottom: 5%;
left: 2%;
`