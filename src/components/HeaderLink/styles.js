import styled from 'styled-components'

export const Anchor = styled.a`
color: white;
padding: 13px 0;
cursor: pointer;
margin-right: 1rem;
font-family: 'Lato', sans-serif;
transition: 0.6s;
margin: 1.6rem;
font-weight: 600;
:hover{
  color: #e0e0e0;
}
@media only screen and (max-width: 1024px){
  display:none;
}
`