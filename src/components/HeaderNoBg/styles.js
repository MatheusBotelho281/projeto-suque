import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
height: auto;
width: auto;
background-size: cover;
`

export const InnerWrapper = styled.div`
width: 1200px;
height: 95px;
margin: 0 auto;
align-items: center;
display: flex;
justify-content: space-between;
position: relative;
transition: 0.4s;
}
@media only screen and (max-width: 1200px){
  width:auto;
  margin: 0 0;
@media only screen and (max-width: 380px){
  width: 55px
  heigth: auto;
  width: auto;
}
`

export const Logo = styled.img`
width: 120px;
height:auto;
margin:1.5rem 1rem;
transition: 0.3s;
@media only screen and (max-width: 1024px){
  margin: 1.5rem 6rem;
}
@media only screen and (max-width: 520px){
  margin: 1.5rem 2rem;
}
@media only screen and (max-width: 380px){
  width: 55px
  heigth: auto;
}
`
