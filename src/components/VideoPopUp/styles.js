import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
width: 100%;
height:60vh;
align-items: center;
justify-content: center;
padding-top: 185px;
transition: 0.4s;
@media only screen and (max-width: 1024px){
  padding-top: 30px;
}
`
export const InnerWrapper = styled.div`
display: flex;
width: 100%;
padding-right: 27.7%;
padding-left: 27.7%;
position: absolute;
text-align: left;
bottom: 3%;
h1{
  color: white;
  font-family: "Merriweather", Sans-serif;
  font-size: 40px;
  font-weight: 400;
  text-align: left;
  @media only screen and (max-width: 1366px) and (max-height: 768px){
    font-size: 35px;
  }
  @media only screen and (max-width: 1024px){
    font-size: 35px;
  }
  @media only screen and (max-width: 768px){
    font-size: 30px;
    padding-bottom: 50px;
  }
  @media only screen and (max-width: 360px){
    font-size: 25px;
  }
  
}
@media only screen and (max-width: 1366px) and (max-height: 768px){
  padding-right: 18%;
  padding-left: 18%;
  bottom: -10%;
}
@media only screen and (max-width: 1024px){
  padding-right: 15%;
  padding-left: 15%;
  bottom: 25%;
}
@media only screen and (max-width: 768px){
  padding-right: 11%;
  padding-left: 11%;
  bottom: 15%;
}
@media only screen and (max-width: 543px){
  padding-right: 13%;
  padding-left: 13%;
  bottom: 12%;
}
@media only screen and (max-width: 414px){
  padding-right: 11%;
  padding-left: 11%;
  bottom: 10%;
}
@media only screen and (max-width: 375px){
  padding-right: 9%;
  padding-left: 9%;
  bottom: 3%;
}
@media only screen and (max-width: 320px){
  padding-right: 9%;
  padding-left: 9%;
  bottom: -5%;
}
@media only screen and (max-width: 280px){
  padding-right: 9%;
  padding-left: 9%;
  bottom: 7.5%;
}
`

export const VideoImage = styled.div`
display: flex;
position: relative;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
.video{
  height: auto;
  cursor: pointer;
  width: 850px;
  z-index: 2;
  border: 3px solid white;
  border-radius: 5px;
  box-shadow: 4px 4px 14px 1px rgb(0 0 0 / 50%);
  @media only screen and (max-width: 1024px){
    width: 650px;
    z-index: 0;
  }
  @media only screen and (max-width: 600px){
    width: 450px;
  }
  @media only screen and (max-width: 425px){
    width: 300px;
  }
  @media only screen and (max-width: 280px){
    width: 250px;
  }
}

`

export const BlueBox = styled.div`
width: 110px;
height: 135px;
background-color: blue;
position: absolute;
right: 26%;
bottom: -30%;
transition: 0.4s;
@media only screen and (max-width: 1366px) and (max-height: 768px){
  width: 210px;
  right: 15%;
  bottom: -70%;
}
@media only screen and (max-width: 1024px){
  width: 210px;
  right: 15%;
  bottom: 10%;
}
@media only screen and (max-width: 768px){
  width: 200px;
  right: 5%;
  bottom: 10%;
}
@media only screen and (max-width: 414px){
  width: 175px;
  right: 2%;
  bottom: 15%;
}
@media only screen and (max-width: 411px){
  width: 175px;
  right: 2%;
  bottom: 15%;
}
@media only screen and (max-width: 360px){
  width: 175px;
  right: 2%;
  bottom: 10%;
}
@media only screen and (max-width: 280px){
  width: 175px;
  right: 2%;
  bottom: 20%;
}
`

export const PlayHover = styled.div`
position: absolute;
display: flex;
align-items: center;
justify-content: center;
width: 845px;
height: 565px;
z-index: 3;
cursor: pointer;
:hover{
  .play{
    opacity: 1;
  }
}
.play{
  position: absolute;
  z-index: 0;
  cursor: pointer;
  width: 108px;
  height: auto;
  opacity: 0.7;
  transition: all 0.2s;
  @media only screen and (max-width: 425px){
    width: 64px;
    height: auto;
  }
  :hover{
    opacity: 1;
  }
}
@media only screen and (max-width: 1024px){
  height: 428px;
  width: 642px;
  z-index: 0;
}
@media only screen and (max-width: 540px){
  height: 297px;
  width: 445px;
}
@media only screen and (max-width: 414px){
  height: 200px;
  width: 295px;
}
@media only screen and (max-width: 360px){
  height: 200px;
  width: 292px;
}
@media only screen and (max-width: 280px){
  height: 165px;
  width: 243px;
}
`

export const DashedBorder = styled.div`
width: 175px;
height: 250px;
border: 2px solid white;
border-style: dashed;
display: flex;
position: absolute;
left: 25%;
top: -30%;
transition: 0.4s;
@media only screen and (max-width: 1024px){
  top: 10%;
  left: 15%;
  height: 175px;
  width: 190px;
}
@media only screen and (max-width: 768px){
  top: 5%;
  left: 2%;
  height: 175px;
  width: 190px;
}
@media only screen and (max-width: 414px){
  top: 10%;
  left: 2%;
  height: 120px;
  width: 150px;
}
@media only screen and (max-width: 360px){
  top: 10%;
  left: 2%;
  height: 120px;
  width: 150px;
}
@media only screen and (max-width: 280px){
  top: 22%;
  left: 2%;
  height: 120px;
  width: 130px;
}
`