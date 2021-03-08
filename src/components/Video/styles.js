import styled from 'styled-components'

export const Wrapper = styled.div`
position: fixed;
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
width: 100%;
background-color: rgba(0,0,0,0.5);
z-index: 99;
iframe{
  max-width: 1280px;
  max-height: 720px;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
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
