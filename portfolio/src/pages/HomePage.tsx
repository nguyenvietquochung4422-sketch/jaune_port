import VideoBackground from '../components/VideoBackground'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
      {/* Fixed full-screen video — stays behind everything */}
      <VideoBackground />

      {/* Fixed navbar — always on top */}
      <Navbar />

      {/* Scrollable content — z-index > video so section backgrounds cover it */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        {/* Hero: full-screen, no background → video shows through */}
        <Hero />

        {/* Footer at bottom */}
        <Footer />
      </main>
    </>
  )
}
