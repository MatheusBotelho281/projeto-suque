import styled from 'styled-components'

export const Wrapper = styled.div`
height: 75vh;
overflow: hidden;
width: 800vw;
.imagens{
  display:flex;
  position: relative;
  transition: all ${props => props.time};
  right: ${props => props.right};
}
img{
  top: 45%;
  right: 2%;
  position: absolute;
  width: 50px;
  z-index: 100;
  cursor: pointer;
  transition: all 0.3s;
  :hover{
    transform:scale(1.2);
  }
  @media only screen and (max-width: 1024px){
    width: 40px;
  }
}
`

export const Img = styled.div`
background-image: url("${props => props.url}");
background-size: cover;
background-position: 10% 30%;
height: 80vh;
width: 100vw;
transition: all 0.5s;
@media only screen and (max-width: 1024px){
  background-position: 60% 10%;
}
@media only screen and (max-width: 800px){
  background-position: 60% 10%;
}
`