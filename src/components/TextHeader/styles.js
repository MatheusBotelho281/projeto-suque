import styled from 'styled-components'

export const Wrapper = styled.div`
width:100%;
padding: 12% 19%;
display: flex;
justify-content: center;
flex-direction: column;
`

export const TextTittle = styled.h2`
color: white;
text-transform: uppercase;
letter-spacing: 10px;
font-weight:700;
font-size:14px;
`
export const TextBottom = styled.h2`
color: white;
font-family: "Merriweather", Sans-serif;
font-size: 80px;
font-weight: 400;
@media only screen and (max-width: 320px){
  font-size: 25px;
}
@media only screen and (max-width: 370px){
  font-size: 30px;
}
@media only screen and (max-width: 500px){
  font-size: 40px;
}
@media only screen and (max-width: 600px){
  font-size: 50px;
}
`