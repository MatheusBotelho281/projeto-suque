import styled from 'styled-components'

export const Wrapper = styled.div`
width: 100%;
height: 100vh;
display: flex;
z-index: 99;
position: fixed;
background-color: rgba(0,0,0,0.7);
align-items: center;
justify-content: center;
top: 0;
`
export const InnerWrapper = styled.div`
position: relative;
padding: 10%;
align-items: center;
justify-content: center;
transition: all 0.3s;
iframe{
  width: 1280px;
  height: 720px;
  @media only screen and (max-width: 1366px){
    width: 1105px;
    height: 620px;
  } 
  @media only screen and (max-width: 1240px){
    width: 932px;
    height: 520px;
  } 
  @media only screen and (max-width: 1050px){
    width: 830px;
    height: 467px;
  } 
  @media only screen and (max-width: 840px){
    width: 570px;
    height: 320px;
  } 
  @media only screen and (max-width: 640px){
    width: 395px;
    height: 220px;
  } 
  @media only screen and (max-width: 414px){
    width: 365px;
    height: 205px;
  } 
  @media only screen and (max-width: 375px){
    width: 330px;
    height: 190px;
  } 
  @media only screen and (max-width: 320px){
    width: 310px;
    height: 180px;
  } 
  @media only screen and (max-width: 280px){
    width: 270px;
    height: 160px;
  } 
}
`
export const Close = styled.img`
position: absolute;
display: flex;
width: 40px;
height: auto;
top: 10%;
right: 5%;
cursor: pointer;
@media only screen and (max-width: 1240px){
  width: 25px;
  top: 3%;
  right: 10%;
}
@media only screen and (max-width: 640px){
  width: 15px;
  top: 3%;
  right: 10%;
} 
`