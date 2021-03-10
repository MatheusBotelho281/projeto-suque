import styled from 'styled-components'

export const Anchor = styled.a`
color: black;
padding: 13px 0;
cursor: pointer;
margin-right: 1rem;
font-family: 'Lato', sans-serif;
transition: 0.6s;
margin: 1.6rem;
font-weight: 600;
:hover{
  color: gray;
}
@media only screen and (max-width: 1024px){
  display:none;
}
`