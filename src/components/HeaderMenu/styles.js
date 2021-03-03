import styled from 'styled-components'

export const WrapperMenu = styled.div`
z-index: 1;
@media only screen and (min-width: 1025px){
  display: none!important;
}
`
export const MenuButton = styled.button`
background: gray;
height: 40px;
padding: 0.6rem 0.6rem;
display:flex;
align-items:center;
justify-content:center;
margin-right: 1rem;
border: none;
border-radius: 2.5px;
cursor: pointer;
img{
  width: 20px;
}
`