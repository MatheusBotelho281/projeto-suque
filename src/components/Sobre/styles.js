import styled from 'styled-components'

export const Wrapper = styled.div`
color: black;
display: flex;
justify-content: center;
display: flex;
width: 100%;
min-height: 67.2vh;
height: auto;

`

export const InnerWrapper = styled.div`
margin-left: 150px;
margin-right: 150px;
margin-top: 100px;
display: flex;
justify-content: center;
position: relative;
flex-direction: column;
height: auto;
width: 100%;
@media only screen and (max-width: 1024px){
  margin-left: 100px;
  margin-right: 100px;
}
@media only screen and (max-width: 768px){
  margin-left: 50px;
  margin-right: 50px;
}
p{  
  text-align: center;
  color: black;
  font-family: "Merriweather", Sans-serif;
  font-size: 22px;
  font-weight: 400;
  line-height: 42px;
  margin-bottom: 5%;
  transition: all 0.2s;
  @media only screen and (max-width: 768px){
    font-size: 22px;
  }
}
.div2{
  display: none;
  @media only screen and (max-width: 466px){
    display: inline;
  }
}
.parceiros{
  display: flex;
  align-items: center;
  font-family: "Merriweather", Sans-serif;
  font-size: 15px;
  .div1{
    @media only screen and (max-width: 466px){
      display: none;
    }
  }
  @media only screen and (max-width: 466px){
    flex-direction: column;
  }
  div{
    margin-left: 10px;
    margin-right: 10px;
    border: none;
    display: flex;
    align-items: start;
    flex-direction: column;
    p{
      margin: 0;
      color: black;
      cursor: pointer;
      font-size: 20px;
      transition: all 0.3s;
      @media only screen and (max-width: 542px){
        font-size: 15px;
      }
      @media only screen and (max-width: 360px){
        font-size: 12px;
      }
      :hover{
        color: darkgray;
      }
    }
  }
}
.titulo{
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Merriweather", Sans-serif;
  font-size: 26px;
}
`