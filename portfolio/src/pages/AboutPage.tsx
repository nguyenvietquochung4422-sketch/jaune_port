import Navbar from '../components/Navbar'
import About from '../components/About'
import Footer from '../components/Footer'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1, paddingTop: '80px' }}>
        <About />
        <Footer />
      </main>
    </>
  )
}
