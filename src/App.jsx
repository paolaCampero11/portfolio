
import './App.css'
import Navbar from './components/Navbar'

function App() {
  
  return (
    <>
    
    <Navbar/>
      
      <section id="hero" className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Hola, soy <span className="text-blue-600">Paola Campero</span>
          </h1>
          <p className="text-xl text-gray-600 mt-4">
            Frontend Developer & QA Engineer
          </p>
        </div>
      </section>

      <section id="about" className="h-screen flex items-center justify-center bg-gray-100">
        <h2 className="text-3xl font-bold">Sobre Mí</h2>
      </section>

      <section id="projects" className="h-screen flex items-center justify-center bg-white">
        <h2 className="text-3xl font-bold">Proyectos</h2>
      </section>

      <section id="experience" className="h-screen flex items-center justify-center bg-gray-100">
        <h2 className="text-3xl font-bold">Experiencia</h2>
      </section>

      <section id="contact" className="h-screen flex items-center justify-center bg-white">
        <h2 className="text-3xl font-bold">Contacto</h2>
      </section>

    </>
  )
}

export default App
