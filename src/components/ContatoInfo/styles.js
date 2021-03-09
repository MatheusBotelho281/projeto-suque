import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 40vh;
transition: all 0.2s;
@media only screen and (max-width: 800px){
  height: 68vh;
}
@media only screen and (max-width: 580px){
  height: 75vh;
}
div{
  color: black;
  padding-right: 50px;
  @media only screen and (max-width: 580px){
    padding: 0;
  }
  h3{
    color: #0000cc;
    border-bottom: 10px transparent solid;
  }
}
`
export const InnerWrapper = styled.div`
position: absolute;
display: flex;
left: 15%;
transition: all 0.5s;
@media only screen and (max-width: 800px){
  flex-direction: column;
}
`