import styled from 'styled-components'

export const WrapperMenu = styled.div`
z-index: 99999999999999;
@media only screen and (min-width: 1025px){
  display: none!important;
}
`
export const MenuButton = styled.button`
background: #2a2a2a;
height: 33px;
padding: 0.4rem 0.4rem;
display:flex;
align-items:center;
justify-content:center;
margin-right: 1rem;
border: none;
border-radius: 3px;
cursor: pointer;
img{
  width: 20px;
}
`

export const MenuItems = styled.div`
cursor:pointer;
font-family: "Lato", Sans-serif;
font-weight: 700;
font-size: 1.3rem;
text-align: center;
position: absolute;
color: white;
left: 0;
bottom: ${props => props.bottom};
width: 100%;
background: #1b1b1b;
display:flex;
flex-direction: column;
transition: all 0.3s;
max-height: ${props => props.height}; 
overflow: hidden;
div{
  width:100%;
  padding: 1rem;
  :hover{
    background: #0e10da;
  }
}
`