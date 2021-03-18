import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
transition: all 0.2s;
.barraPreta{
  position: relative;
  display: flex;
  width: 100%;
  height: 25px;
}
@media only screen and (min-width: 738px){
  display: none;
}
.slider{
  height: 1015px;
  a.nextButton, a.previousButton{
    background-color: rgba(255,255,255,0.1);
    border-radius: 30px;
    :hover{
      background-color: rgba(255,255,255,0.4);
    }
  }
  @media only screen and (max-width: 730px){
    height: 1015px;
  }
  @media only screen and (max-width: 722px){
    height: 1000px;
  }
  @media only screen and (max-width: 714px){
    height: 995px;
  }
  @media only screen and (max-width: 706px){
    height: 980px;
  }
  @media only screen and (max-width: 698px){
    height: 965px;
  }
  @media only screen and (max-width: 690px){
    height: 945px;
  }
  @media only screen and (max-width: 682px){
    height: 935px;
  }
  @media only screen and (max-width: 674px){
    height: 927px;
  }
  @media only screen and (max-width: 666px){
    height: 916px;
  }
  @media only screen and (max-width: 658px){
    height: 905px;
  }
  @media only screen and (max-width: 650px){
    height: 890px;
  }
  @media only screen and (max-width: 642px){
    height: 885px;
  }
  @media only screen and (max-width: 634px){
    height: 870px;
  }
  @media only screen and (max-width: 626px){
    height: 855px;
  }
  @media only screen and (max-width: 618px){
    height: 840px;
  }
  @media only screen and (max-width: 610px){
    height: 825px;
  }
  @media only screen and (max-width: 602px){
    height: 810px;
  }
  @media only screen and (max-width: 594px){
    height: 800px;
  }
  @media only screen and (max-width: 586px){
    height: 790px;
  }
  @media only screen and (max-width: 576px){
    height: 780px;
  }
  @media only screen and (max-width: 570px){
    height: 770px;
  }
  @media only screen and (max-width: 562px){
    height: 765px;
  }
  @media only screen and (max-width: 554px){
    height: 760px;
  }
  @media only screen and (max-width: 546px){
    height: 750px;
  }
  @media only screen and (max-width: 538px){
    height: 740px;
  }
  @media only screen and (max-width: 530px){
    height: 730px;
  }
  @media only screen and (max-width: 522px){
    height: 712px;
  }
  @media only screen and (max-width: 514px){
    height: 700px;
  }
  @media only screen and (max-width: 506px){
    height: 690px;
  }
  @media only screen and (max-width: 498px){
    height: 680px;
  }
  @media only screen and (max-width: 490px){
    height: 670px;
  }
  @media only screen and (max-width: 482px){
    height: 660px;
  }
  @media only screen and (max-width: 474px){
    height: 650px;
  }
  @media only screen and (max-width: 466px){
    height: 635px;
  }
  @media only screen and (max-width: 458px){
    height: 625px;
  }
  @media only screen and (max-width: 450px){
    height: 615px;
  }
  @media only screen and (max-width: 442px){
    height: 605px;
  }
  @media only screen and (max-width: 434px){
    height: 595px;
  }
  @media only screen and (max-width: 426px){
    height: 585px;
  }
  @media only screen and (max-width: 418px){
    height: 585px;
  }
  @media only screen and (max-width: 410px){
    height: 550px;
  }
  @media only screen and (max-width: 402px){
    height: 540px;
  }
  @media only screen and (max-width: 394px){
    height: 525px;
  }
  @media only screen and (max-width: 386px){
    height: 520px;
  }
  @media only screen and (max-width: 378px){
    height: 530px;
  }
  @media only screen and (max-width: 370px){
    height: 495px;
  }
  @media only screen and (max-width: 362px){
    height: 510px;
  }
  @media only screen and (max-width: 354px){
    height: 470px;
  }
  @media only screen and (max-width: 346px){
    height: 465px;
  }
  @media only screen and (max-width: 338px){
    height: 455px;
  }
  @media only screen and (max-width: 280px){
    height: 400px;
  }

}
`
export const Video = styled.img`
width: 100%;
height: auto;
cursor: pointer;
border-top: 3px solid;
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
  border-top: 3px solid;
}
@media only screen and (max-width: 726px){
  width: 100%;
  height: 100%;
  border-top: 2px solid;
}

`