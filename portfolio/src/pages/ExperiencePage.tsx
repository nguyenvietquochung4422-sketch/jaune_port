import Navbar from '../components/Navbar'
import Experience from '../components/Experience'
import Footer from '../components/Footer'

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1, paddingTop: '80px' }}>
        <Experience />
        <Footer />
      </main>
    </>
  )
}
