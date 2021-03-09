import styled from 'styled-components'

export const Wrapper = styled.div`
height: auto;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-top: 130px;
margin-bottom: 130px;
`
export const QAzul = styled. div`
display: flex;
position: absolute;
background-color: #0000cc;
width: 100px;
height: 100px;
top: 78%;
left: 53%;
transition: all 0,5s;
@media only screen and (max-width: 1024px){
  top: 50%;
  left: 75%;
}
@media only screen and (max-width: 768px){
  top: 40%;
  left: 70%;
}
@media only screen and (max-height: 540px){
  display: none;
}
@media only screen and (max-width: 540px){
  top: 26%;
  left: 60%;
}
@media only screen and (max-width: 414px){
  top: 25%;
  left: 57%;
}
@media only screen and (max-width: 360px){
  top: 22%;
}
@media only screen and (max-width: 320px){
  top: 17%;
  left: 50%;
}
@media only screen and (max-width: 280px){
  top: 10%;
  left: 50%;
}
`

export const InnerWrapper = styled.div`
display: flex;
justify-content: center;
align-items:center;
position: relative;
color: black;
margin-right: 25%;
margin-left: 25%;
h2{
  font-family: "Merriweather", Sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 56px;
}
p{
  font-family: "Lato", Sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 28px;
}
.texto{
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.imagem{
  position: relative;
  width: 60vh;
  margin-right: 75px;
  @media only screen and (max-width: 1024px){
    width:40vh;
  }
  @media only screen and (max-width: 768px){
    width:40vh;
  }
  @media only screen and (max-width: 414px){
    width:40vh;
  }
  @media only screen and (max-width: 375px){
    width: 35vh;
  }
  @media only screen and (max-width: 360px){
    width: 40vh;
  }
  @media only screen and (max-width: 280px){
    width: 31vh;
  }
}
@media only screen and (max-width: 1024px){
  flex-direction: column;
  margin-left: 25%;
  margin-right: 25%;
}
@media only screen and (max-width: 360px){
  flex-direction: column;
  margin-left: 5%;
  margin-right: 5%;
}
@media only screen and (max-width: 1640px){
  margin-left: 20%;
  margin-right: 20%;
}
@media only screen and (max-width: 1540px){
  margin-left: 18%;
  margin-right: 18%;
}
@media only screen and (max-width: 1540px){
  margin-left: 12%;
  margin-right: 12%;
}
`

export const InnerWrapper1 = styled.div`
display: flex;
justify-content: center;
align-items:center;
position: relative;
color: black;
margin-top: 4rem;
margin-right: 25%;
margin-left: 25%;
h2{
  font-family: "Merriweather", Sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 56px;
}
p{
  font-family: "Lato", Sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 28px;
}
.texto{
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.imagem{
  position: relative;
  width: 60vh;
  margin-left: 75px;
  @media only screen and (max-width: 1024px){
    width:40vh;
  }
  @media only screen and (max-width: 768px){
    width:40vh;
  }
  @media only screen and (max-width: 414px){
    width:40vh;
  }
  @media only screen and (max-width: 375px){
    width: 35vh;
  }
  @media only screen and (max-width: 360px){
    width: 40vh;
  }
  @media only screen and (max-width: 280px){
    width: 31vh;
  }
}
@media only screen and (max-width: 1640px){
  margin-left: 20%;
  margin-right: 20%;
}
@media only screen and (max-width: 1540px){
  margin-left: 18%;
  margin-right: 18%;
}
@media only screen and (max-width: 1540px){
  margin-left: 12%;
  margin-right: 12%;
}
@media only screen and (max-width: 1024px){
  flex-direction: column;
  margin-left: 25%;
  margin-right: 25%;
}
@media only screen and (max-width: 360px){
  flex-direction: column;
  margin-left: 5%;
  margin-right: 5%;
}
`

export const QPontilhado = styled. div`
display: flex;
position: absolute;
border:solid 1px gray;
border-style: dashed;
width: 100px;
height: 100px;
top: 78%;
right: -5%;
transition: all 0,5s;
@media only screen and (max-width: 1024px){
  top: 88%;
  left: 4%;
}
@media only screen and (max-width: 768px){
  top: 85%;
  left: 10%;
}
@media only screen and (max-height: 540px){
  display: none;
}
@media only screen and (max-width: 540px){
  top: 80%;
  left: 12%;
}
@media only screen and (max-width: 414px){
  top: 80%;
  left: 14%;
}
@media only screen and (max-width: 360px){
  top: 80%;
  left: 10%
}
@media only screen and (max-width: 320px){
  top: 80%;
  left: 12%;
}
@media only screen and (max-width: 280px){
  top: 80%;
  left: 12%;
}
`
