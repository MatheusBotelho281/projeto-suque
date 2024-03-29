import Head from 'next/head'
import Header from '../components/Header'
import BBottom from '../components/BlueBottom'
import WBottom from '../components/WhiteBottom'
import VideoBoxesDs from '../components/VideoBoxesDesktop'
import VideoBoxes from '../components/VideoBoxesAV'

export default function Home() {
  return (
    <div style={{backgroundColor:'black', overflow: 'hidden'}}>
      <Head><title>Suque Produções</title></Head>
      <Header />
      <VideoBoxes />
      <VideoBoxesDs></VideoBoxesDs>
      <BBottom />
      <WBottom />
    </div>
  )
}
