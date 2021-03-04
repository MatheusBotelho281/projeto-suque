import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
transition: all 0.2s;
@media only screen and (min-width: 738px){
  display: none;
}
.slider{
  height: 500px;
  a.nextButton, a.previousButton{
    background-color: rgba(255,255,255,0.1);
    border-radius: 30px;
    :hover{
      background-color: rgba(255,255,255,0.4);
    }
  }
  @media only screen and (max-width: 730px){
    height: 490px;
  }
  @media only screen and (max-width: 722px){
    height: 484px;
  }
  @media only screen and (max-width: 714px){
    height: 479px;
  }
  @media only screen and (max-width: 706px){
    height: 474px;
  }
  @media only screen and (max-width: 698px){
    height: 468px;
  }
  @media only screen and (max-width: 690px){
    height: 461px;
  }
  @media only screen and (max-width: 682px){
    height: 457px;
  }
  @media only screen and (max-width: 674px){
    height: 451px;
  }
  @media only screen and (max-width: 666px){
    height: 447px;
  }
  @media only screen and (max-width: 658px){
    height: 441px;
  }
  @media only screen and (max-width: 650px){
    height: 436px;
  }
  @media only screen and (max-width: 642px){
    height: 431px;
  }
  @media only screen and (max-width: 634px){
    height: 427px;
  }
  @media only screen and (max-width: 626px){
    height: 422px;
  }
  @media only screen and (max-width: 618px){
    height: 416px;
  }
  @media only screen and (max-width: 610px){
    height: 412px;
  }
  @media only screen and (max-width: 602px){
    height: 405px;
  }
  @media only screen and (max-width: 594px){
    height: 399px;
  }
  @media only screen and (max-width: 586px){
    height: 393px;
  }
  @media only screen and (max-width: 576px){
    height: 387px;
  }
  @media only screen and (max-width: 570px){
    height: 380px;
  }
  @media only screen and (max-width: 562px){
    height: 375px;
  }
  @media only screen and (max-width: 554px){
    height: 370px;
  }
  @media only screen and (max-width: 546px){
    height: 365px;
  }
  @media only screen and (max-width: 538px){
    height: 360px;
  }
  @media only screen and (max-width: 530px){
    height: 355px;
  }
  @media only screen and (max-width: 522px){
    height: 350px;
  }
  @media only screen and (max-width: 514px){
    height: 345px;
  }
  @media only screen and (max-width: 506px){
    height: 340px;
  }
  @media only screen and (max-width: 498px){
    height: 335px;
  }
  @media only screen and (max-width: 490px){
    height: 330px;
  }
  @media only screen and (max-width: 482px){
    height: 325px;
  }
  @media only screen and (max-width: 474px){
    height: 320px;
  }
  @media only screen and (max-width: 466px){
    height: 315px;
  }
  @media only screen and (max-width: 458px){
    height: 310px;
  }
  @media only screen and (max-width: 450px){
    height: 305px;
  }
  @media only screen and (max-width: 442px){
    height: 300px;
  }
  @media only screen and (max-width: 434px){
    height: 295px;
  }
  @media only screen and (max-width: 426px){
    height: 290px;
  }
  @media only screen and (max-width: 418px){
    height: 285px;
  }
  @media only screen and (max-width: 410px){
    height: 280px;
  }
  @media only screen and (max-width: 402px){
    height: 275px;
  }
  @media only screen and (max-width: 394px){
    height: 270px;
  }
  @media only screen and (max-width: 386px){
    height: 265px;
  }
  @media only screen and (max-width: 378px){
    height: 260px;
  }
  @media only screen and (max-width: 370px){
    height: 255px;
  }
  @media only screen and (max-width: 362px){
    height: 250px;
  }
  @media only screen and (max-width: 354px){
    height: 245px;
  }
  @media only screen and (max-width: 346px){
    height: 240px;
  }
  @media only screen and (max-width: 338px){
    height: 228px;
  }
  @media only screen and (max-width: 280px){
    height: 200px;
  }

}
`
export const Video = styled.img`
width: 100%;
height: auto;
cursor: pointer;
border-top: 10px solid;
transition: 0.2s;
:hover{
  opacity: 0.8;
}
@media only screen and (max-width: 1200px){
  width: 100%;
  height: auto;
}
@media only screen and (max-width: 726px){
  width: 100%;
  height: auto;
}
`
export const LinkVideo = styled.a`
width: 100%;
height: 100%;
@media only screen and (max-width: 1200px){
  width: 100%;
  height: 100%;
  border-top: 8px solid;
}
@media only screen and (max-width: 726px){
  width: 100%;
  height: 100%;
  border-top: 2px solid;
}

`