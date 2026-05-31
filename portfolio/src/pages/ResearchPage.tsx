import Navbar from '../components/Navbar'
import Research from '../components/Research'
import Footer from '../components/Footer'

export default function ResearchPage() {
  return (
    <>
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1, paddingTop: '80px' }}>
        <Research />
        <Footer />
      </main>
    </>
  )
}
