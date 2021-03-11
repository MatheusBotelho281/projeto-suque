import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: auto;
background-color: black;
`

export const InnerWrapper = styled.div`
margin-top: 100px;
margin-bottom: 8%;
display: flex;
align-items: center;
justify-content: center;
position: relative;
@media only screen and (max-width: 1024px){
  flex-direction: column;
}
@media only screen and (max-width: 768px){
  margin-bottom: 130px;
}
.red{
  position: absolute;
  width: 190px;
  height: auto;
  bottom: 2rem;
  right: 63rem;
  transition: all 0.1s;
  @media only screen and (max-width: 1879px){
    right: 60rem;
  }
  @media only screen and (max-width: 1840px){
    right: 58rem;
  }
  @media only screen and (max-width: 1790px){
    right: 55rem;
  }
  @media only screen and (max-width: 1740px){
    right: 51rem;
  }
  @media only screen and (max-width: 1700px){
    bottom: 5rem;
  }
  @media only screen and (max-width: 1675px){
    right: 48rem;
  }
  @media only screen and (max-width: 1660px){
    bottom: 8rem;
  }
  @media only screen and (max-width: 1630px){
    right: 44rem;
  }
  @media only screen and (max-width: 1600px){
    right: 49rem;
    bottom: 2rem;
  }
  @media only screen and (max-width: 1540px){
    right: 46rem;
    bottom: 2rem;
  }
  @media only screen and (max-width: 1500px){
    right: 54.3rem;
    bottom: -1rem;
  }
  @media only screen and (max-width: 1444px){
    right: 51.5rem;
    bottom: -1rem;
  }
  @media only screen and (max-width: 1400px){
    right: 49rem;
    bottom: -1rem;
  }
  @media only screen and (max-width: 1358px){
    right: 46rem;
    bottom: -1rem;
  }
  @media only screen and (max-width: 1320px){
    right: 42.8rem;
    bottom: 1rem;
  }
  @media only screen and (max-width: 1260px){
    right: 39.4rem;
    bottom: 1rem;
  }
  @media only screen and (max-width: 1200px){
    right: 35rem;
    bottom: 5rem;
  }
  @media only screen and (max-width: 1140px){
    right: 32rem;
    bottom: 8rem;
  }
  @media only screen and (max-width: 1100px){
    right: 29rem;
    bottom: 10rem;
  }
  @media only screen and (max-width: 1040px){
    right: 25rem;
    bottom: 10rem;
  }
  @media only screen and (max-width: 1024px){
    right: 14rem;
    bottom: 18rem;
  }
  @media only screen and (max-width: 1014px){
    right: 14rem;
    bottom: 22rem;
  }
  @media only screen and (max-width: 915px){
    right: 10rem;
    bottom: 22rem;
  }
  @media only screen and (max-width: 790px){
    right: 7rem;
    bottom: 22rem;
  }
  @media only screen and (max-width: 760px){
    display: none;
  }

}
.imagens{
  margin-left: 395px;
  margin-right: 70px;
  transition: all 0.2s;
  @media only screen and (max-width: 1600px){
    margin-left: 290px;
  }
  @media only screen and (max-width: 1500px){
    margin-left: 110px;
  }
  @media only screen and (max-width: 1024px){
    margin-right: 110px;
  }
  @media only screen and (max-width: 700px){
    margin-left: 30px;
    margin-right: 30px;
  }
  
}
.img{
  position: relative;
  border: 8px solid white;
  width: 465px;
  height: auto;
  @media only screen and (max-width: 700px){
    width: 285px;
  }
  
}
.texto{
  color: white;
  font-family: "Merriweather", Sans-serif;
  font-size: 37px;
  font-weight: 400;
  line-height: 56px;
  margin-right: 395px;
  transition: all 0.2s;
  @media only screen and (max-width: 1600px){
    margin-right: 290px;
  }
  @media only screen and (max-width: 1500px){
    margin-right: 110px;
  }
  @media only screen and (max-width: 1024px){
    margin-left: 110px;
  }
  @media only screen and (max-width: 700px){
    margin-left: 30px;
    margin-right: 30px;
  }
  @media only screen and (max-width: 700px){
    font-size: 30px;
  }
}
.since{
  color: white;
  text-transform: uppercase;
  letter-spacing: 10px;
  font-weight:400;
  font-size:14px;
  @media only screen and (max-width: 1024px){
    margin-left: 110px;
    margin-right: 110px;
  }
  @media only screen and (max-width: 700px){
    margin-left: 30px;
    margin-right: 30px;
  }
}
p{
  color: white;
  font-family: "Lato", Sans-serif;
  margin-right: 395px;
  transition: all 0.2s;
  font-size: 15px;
  font-weight: 400;
  line-height: 26px;
  @media only screen and (max-width: 1600px){
    margin-right: 290px;
  }
  @media only screen and (max-width: 1500px){
    margin-right: 110px;
  }
  @media only screen and (max-width: 1024px){
    margin-left: 110px;
  }
  @media only screen and (max-width: 700px){
    margin-left: 30px;
    margin-right: 30px;
  }
  @media only screen and (max-width: 700px){
  }
}
.blueBar{
  background-color: #0000cc;
  width: 80px;
  height: 3px;
  @media only screen and (max-width: 1024px){
    margin-left: 110px;
    margin-right: 110px;
  }
  @media only screen and (max-width: 700px){
    margin-left: 30px;
    margin-right: 30px;
  }
}
`