import VideoBackground from './components/VideoBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

export default function App() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <VideoBackground />
      <Navbar />
      <Hero />
    </div>
  )
}
