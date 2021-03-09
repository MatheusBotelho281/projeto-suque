import styled from 'styled-components'

export const Wrapper = styled.div`
height: 60vh;
widht: 100%;
background-image: url('./img/cozinhaBg.jpg');
background-attachment: fixed;
background-position: 0 35%;
@media only screen and (max-width: 1024px){
  background-attachment: scroll;
  height: 35vh;
  background-position: 0 65%;
}
@media only screen and (max-width: 360px){
  background-attachment: scroll;
  height: 35vh;
  background-position: 10% 68%;
}
`