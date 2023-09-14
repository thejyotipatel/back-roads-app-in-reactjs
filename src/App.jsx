import './App.scss'
import About from './components/About'
import Books from './components/Books'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Books />
      <Footer />
    </>
  )
}

export default App
