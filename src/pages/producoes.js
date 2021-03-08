import React, { useState } from 'react'
import Header from '../components/HeaderNoBg1'
import Text from '../components/TextProducoes'
import VideoPopUp from '../components/VideoPopUp'
import Video from '../components/Video'
import BgStatic from '../components/BgStatic'
import ImgDes from '../components/VideoImgs'
import BBottom from '../components/BlueBottom'
import WBottom from '../components/WhiteBottom'

export default function producoes() {

  const[videoPopUp, setVideoPopUp] = useState(false)

  return (
    <>
    {videoPopUp && <Video />}
    <Header />
    <VideoPopUp />
    <Text />
    <BgStatic />
    <ImgDes />
    <BBottom />
    <WBottom />
    </>
  )
}
