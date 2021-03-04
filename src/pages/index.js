import Head from 'next/head'
import Header from '../components/Header'
import VideoBoxes from '../components/VideoBoxes'
import BBottom from '../components/BlueBottom'
import WBottom from '../components/WhiteBottom'
import VideoBoxesDs from '../components/VideoBoxesDesktop'

export default function Home() {
  return (
    <>
      <Header />
      <VideoBoxes />
      <VideoBoxesDs></VideoBoxesDs>
      <BBottom />
      <WBottom />
    </>
  )
}
