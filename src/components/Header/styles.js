import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
justify-content: center;
height: 100vh;
background: url('./img/bg-header.png') no-repeat;
`

export const InnerWrapper = styled.div`
width: 1200px;
height: 130px;
align-items: center;
display: flex;
justify-content: space-between;
position: relative;
`

export const Logo = styled.img`
width:77px;
height:auto;
margin: 1.5rem 1rem;
transition: 0.3s;
@media only screen and (max-width: 1024px){
  margin: 1.5rem 6rem;
}
`
