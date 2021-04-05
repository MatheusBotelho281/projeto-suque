import styled from 'styled-components'

export const Wrapper = styled.div`
background: black;
width: auto;
height: 32vh;
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;
color: white;
text-align: center;
h1{
  font-family: 'Lato', Sans-serif;
  font-weight: 400;
  font-size: 50px;
  @media only screen and (max-width: 800px){
    font-size: 40px;
  }
  @media only screen and (max-width: 640px){
    font-size: 30px;
  }
  @media only screen and (max-width: 380px){
    font-size: 26px;
  }
}
`

export const BlueButton = styled.button`
height: 4rem;
width: 16rem;
cursor: pointer;
border: 2px solid #fff;
background-color: #0e10da;
color: #fff;
font-family: 'Lato', Sans-serif;
text-transform: uppercase;
font-weight: 700;
font-size: 16px;
transition: all 0.2s;
:hover{
  background-color: #0e0fc1;
  transform: translateY(8%);
}
`