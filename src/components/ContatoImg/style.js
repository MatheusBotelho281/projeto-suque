import styled from 'styled-components'

export const Wrapper = styled.div`
position: relative;
display: flex;
width: 100%;
height: auto;
p{
  color: white;
}
`
export const TittleWrapper = styled.div`
position: absolute
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
.h2{
  color: white;
  position: absolute;
  font-family: "Merriweather", Sans-serif;
  font-size: 50px;
  font-weight: 700;
  left: 23%;
  bottom: 40%;
  trasition: all 0.5s;
  @media only screen and (max-width: 700px){
    font-size: 40px;
    bottom: 43%;
  }
  @media only screen and (max-width: 600px){
    font-size: 40px;
    bottom: 52%;
  }
  @media only screen and (max-width: 420px){
    font-size: 40px;
    bottom: 70%;
  }
  @media only screen and (max-width: 280px){
    font-size: 30px;
    bottom: 70%;
  }
}
p{
  color: white;
  width: 60%;
  position: absolute;
  font-family: 'Lato', Sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 26px;
  left: 23%;
  bottom: 32%;
  @media only screen and (max-width: 1300px){
    font-size: 14px;
  }
}
.image{
  position: absolute;
  width: 35%;
  height: auto;
  bottom: -15%;
  left: 88%;
  transition: all 1s;
  @media only screen and (max-width: 1380px){
    bottom: -5%;
  }
  @media only screen and (max-width: 1199px){
    display: none;
  }
}
.image1{
  position: absolute;
  width: 40%;
  height: auto;
  bottom: -55%;
  left: 115%;
  transition: all 1s;
  @media only screen and (max-width: 1400px){
    bottom: -20%;
  }
  @media only screen and (max-width: 1199px){
    display: none;
  }
}
.cuboAzul{
  position: absolute;
  width: 10%;
  height: 30.5vh;
  left: 160.9% ;
  bottom: -56.2%;
  transition: all 0.7s;
  @media only screen and (max-width: 1480px){
    bottom: -20%;
  }
  @media only screen and (max-width: 1199px){
    display: none;
  }
}
`

export const BG = styled.div`
display: flex;
width: 58.5%;
height: 54vh;
align-items: center;
justifycontent: center;
position: relative;
background-image: url('./img/camera.jpg');
background-repeat: no-repeat;
background-position: 0 54%;
background-size: cover;
transition: all 0.5s;
@media only screen and (max-width: 1200px){
  background-size: cover;
  width: 100%
}
@media only screen and (max-width: 1200px){
  background-position: 10% center;
  width: 100%
}
`
