import styled from 'styled-components'

export const Wrapper = styled.div`
background-color: black;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: auto;
`
export const InnerWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
text-align: center;
margin-bottom: 5%;
h2{
  color: white;
  font-family: "Merriweather", Sans-serif;
  font-size: 37px;
  font-weight: 400;
  line-height: 40px;
  margin-bottom: 15px;
}
.blueBar{
  width: 100px;
  height: 3px;
}
.textoSup{
  color: white;
  font-family: "Lato", Sans-serif;
  transition: all 0.2s;
  font-size: 15px;
  font-weight: 400;
  line-height: 26px;
  margin-left: 34%;
  margin-right: 34%;
  @media only screen and (max-width: 768px){
    margin-left: 14%;
    margin-right: 14%;
  }
}
.textoInf{
  color: #999999;
  font-family: "Lato", Sans-serif;
  transition: all 0.2s;
  font-size: 15px;
  font-weight: 400;
  line-height: 26px;
  margin-left: 5%;
  margin-right: 5%;
}
.superior{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  @media only screen and (max-width: 768px){
    flex-direction: column;
  }
}
.inferior{
  margin-top: 5%;
  width: 22%;
  @media only screen and (max-width: 768px){
    width: 70%;
  }
  h2{
    color: white;
    font-family: "Merriweather", Sans-serif;
    font-size: 25px;
    font-weight: 700;
    line-height: 40px;
  }
}
`