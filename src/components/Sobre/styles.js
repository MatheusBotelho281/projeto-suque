import styled from 'styled-components'

export const Wrapper = styled.div`
color: black;
display: flex;
justify-content: center;
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
  font-size: 26px;
  font-weight: 400;
  line-height: 42px;
  transition: all 0.2s;
  @media only screen and (max-width: 768px){
    font-size: 22px;
  }
}
`