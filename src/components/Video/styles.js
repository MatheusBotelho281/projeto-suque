import styled from 'styled-components'

export const Wrapper = styled.div`
position: fixed;
top: 0;
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
width: 100%;
background-color: rgba(0,0,0,0.7);
z-index: 99;
iframe{
  width: 1280px;
  height: 720px;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  transition: 0.5s;
  @media only screen and (max-width: 1300px){
    width:
  }
}
`

export const Close = styled.img`
width: 32px;
height: auto;
position: absolute;
top: 5%;
right: 5%;
cursor: pointer;
`
