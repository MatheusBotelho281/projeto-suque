import styled from 'styled-components'

export const Wrapper = styled.div`
background: white;
height: 19vh;
width: 100%;
display: flex;
text-align: center;
align-items: center;
justify-content: center;
@media only screen and (max-width: 768px){
  height: 320px;
}
`
export const InnerWrapper = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
@media only screen and (max-width: 768px){
  flex-direction: column;
}
div{
  width: 33.33%;
  display: flex;
  align-items: center;
  justify-content: center;
}
`

export const MiniLogos = styled.img`
width: 32px;
height: auto;
cursor: pointer;
margin-right: 1rem;
@media only screen and (max-width: 768px){
  margin: 1rem 1rem;
}
`