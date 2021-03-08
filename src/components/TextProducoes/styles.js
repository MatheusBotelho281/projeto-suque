import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
align-items: center;
width: 100%;
height: 95vh;
padding-top: 75px;
@media only screen and (max-width: 1024px){
  flex-direction: column;
  padding-top: 82px;
  height: 120vh;
}
@media only screen and (max-width: 280px){
  padding-top: 40px;
}
`


export const InnerWrapper = styled.div`
width: 65%;
padding-left: 27.9%;
h2{
  color: white;
  font-family: "Lato", Sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 42px;
}
p{
  color: white;
  font-family: "Lato", Sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
}
a{
  color: white;
  font-family: "Lato", Sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
}
@media only screen and (max-width: 1024px){
  padding-left: 12%;
  padding-right: 12%;
}
`

export const Divisor = styled.div`
width: 75px;
height: 5px;
background-color: #0000cc;
`

export const InnerWrapper1 = styled.div`
padding-right: 27.9%;
width: 100%;
margin-top: 7.7%;
h2{
  color: white;
  font-family: "Lato", Sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 42px;
}
p{
  color: white;
  font-family: "Lato", Sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
}
a{
  color: white;
  font-family: "Lato", Sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
}
@media only screen and (max-width: 1240px){
  margin-top: 21%;
}
@media only screen and (max-width: 1024px){
  padding-left: 12%;
  padding-right: 12%;
  margin-top: 17%;
}
`

export const OkText = styled.div`
display: flex;
align-items: center;
a{
  color: white;
  font-family: "Lato", Sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  transition: all 0.5s;
  :hover{
    color: #0040cc;
    cursor: pointer;
  }
}
`

export const OkImg = styled.img`
width: 40px;
height: auto;
margin-right: 10px;
margin-top: 6px;
`