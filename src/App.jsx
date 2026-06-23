import Navbar from './components/Navbar'
import './App.css'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>

      <section id="projects" className="h-screen flex items-center justify-center bg-white">
        <h2 className="text-3xl font-bold">Proyectos</h2>
      </section>

      <section id="experience" className="h-screen flex items-center justify-center bg-gray-100">
        <h2 className="text-3xl font-bold">Experiencia</h2>
      </section>

      <section id="contact" className="h-screen flex items-center justify-center bg-white">
        <h2 className="text-3xl font-bold">Contacto</h2>
      </section>

      <Footer/>
    </>
  )
}

export default App
