import styled from 'styled-components'

export const Wrapper = styled.div`
height: auto;
min-height: 45vh;
font-family: "Lato", Sans-serif;
font-size: 15px;
font-weight: 400;
line-height: 26px;
display: flex;
align-items: center;
justify-content: center;
color: white;
flex-direction: column;
border-bottom: 1px solid gray;
border-style: dotted;
@media only screen and (max-width: 700px){
  height: auto;
}

}
.inputs1{
  @media only screen and (max-width: 700px){
    display: flex;
    flex-direction: column;
    align-items:center;
  }
  input{
    padding-left: 10px;
    width: 200px;
    height: 40px;
    background-color: white;
    margin-top: 50px;
    margin-right: 7px;
    margin-left: 7px;
    border: 1px solid black;
    font-family: "Lato", Sans-serif;
    font-size: 15px;
    font-weight: 400;
    line-height: 15px;
    @media only screen and (max-width: 700px){
      margin-top: 10px;      
    }
  }
}
.titulo{
  width: 260px;
  text-align: center;
  font-family: "Lato", Sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 26px;
  @media only screen and (max-width: 700px){
  margin-bottom: 40px;
  }
}
.inputs2{
  @media only screen and (max-width: 700px){
    display: flex;
    flex-direction: column;
    align-items:center;
  }
  select{
    padding-left: 10px;
    width: 307.5px;
    height: 40px;
    background-color: white;
    margin-top: 15px;
    margin-right: 7px;
    margin-left: 7px;
    border: 1px solid black;
    font-family: "Lato", Sans-serif;
    font-size: 15px;
    font-weight: 400;
    line-height: 15px;
    @media only screen and (max-width: 320px){
      width:100%;
    }
  }
}
.inputs3{
  @media only screen and (max-width: 700px){
    display: flex;
    flex-direction: column;
    align-items:center;
  }
  textarea{
    resize: vertical;
    max-height: 500px;
    padding-left: 10px;
    width: 630px;
    height: 40px;
    font-size: 20px;
    background-color: white;
    margin-top: 15px;
    margin-right: 7px;
    margin-left: 7px;
    border: 1px solid black;
    padding-top: 8px;
    font-family: "Lato", Sans-serif;
    font-size: 15px;
    font-weight: 400;
    line-height: 26px;
    @media only screen and (max-width: 700px){
      width: 100%;
      max-height: 188px;
    }
  }
}
`