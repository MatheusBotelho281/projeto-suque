import styled from 'styled-components'

export const Wrapper = styled.div`
overflow: hidden;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: auto;
min-height: 67.5vh;
transition: all 0.2s;
div{
  color: black;
  padding-right: 50px;
  @media only screen and (max-width: 580px){
    padding: 0;
  }
}
h2{
  font-size: 30px;
  font-weight: 400;
  margin: 50px 0;
}
`
export const InnerWrapper = styled.div`
align-items: start;
justify-items: items-between;
display: flex;
width: 100%;
margin-left: 8%;
transition: all 0.5s;
flex-direction: row;
h3{
  color: gray;
  font-weight: 400;
  font-size: 22px;
}
div{
  .seta{
  transition: all 0.4s;
  color: ${props => props.color};
}
}
@media only screen and (max-width: 1000px){
  flex-direction: column;
}
.margin1{
  @media only screen and (max-width: 1000px){
    margin-left: 10%!important;
  }
}
.margin2{
  @media only screen and (max-width: 1180px){
    margin-left: 2%!important;
  }
  @media only screen and (max-width: 1000px){
    margin-left: 10%!important;
  }
}
.margin3{
  @media only screen and (max-width: 1000px){
    margin-left: 10%!important;
  }
}
.margin4{
  p{
    @media only screen and (max-width: 750px){
      font-size: 20px!important;
    }
    @media only screen and (max-width: 600px){
      font-size: 18px!important;
    }
    @media only screen and (max-width: 400px){
      font-size: 16px!important;
    }
    @media only screen and (max-width: 280px){
      font-size: 12px!important;
    }
  }
  @media only screen and (max-width: 1000px){
    margin-left: 10%!important;
  }
}
`