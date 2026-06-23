// src/components/sections/Hero.jsx
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { HiDownload, HiArrowDown } from 'react-icons/hi';
import profilePicture from '../assets/profile_picture.png'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-background/98 to-purple-950">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-7">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center justify-items-center">
          
          <div className="space-y-6">
            <div className="inline-block rounded-full bg-background px-4 py-1.5 text-sm font-medium text-primary border-secondary border-1">
              👋 ¡Hola! Bienvenido a mi portfolio
            </div>

            <h1 className="text-5xl font-bold tracking-tight text-text sm:text-6xl">
              Soy <span className="text-secondary">Paola Campero</span>
            </h1>

            <h2 className="text-2xl font-semibold text-text">
              QA Tester & Frontend Developer
            </h2>

            <p className="text-lg text-text max-w-xl">
              Creo aplicaciones web con <span className="font-semibold text-secondary">React</span> y 
              garantizo su calidad con <span className="font-semibold text-secondary">pruebas automatizadas en Cypress</span>. 
              Apasionada por el código limpio, la accesibilidad y la experiencia de usuario.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#proyectos"
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors"
              >
                Ver Proyectos
                <HiArrowDown className="h-4 w-4" />
              </a>
              
              <a
                href="/"
                download
                className="inline-flex items-center gap-2 rounded-lg border-2 border-secondary bg-background px-6 py-3 text-sm font-semibold text-secondary shadow-sm hover:border-text hover:text-text transition-colors  duration-200"
              >
                Descargar CV
                <HiDownload className="h-4 w-4" />
              </a>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm text-gray-200">Encuéntrame en:</span>
              <a
                href="https://github.com/paolaCampero11"
                target="_blank"
                aria-label="GitHub"
                className="text-gray-600 hover:text-secondary transition-colors"
              >
                <FaGithub className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/paola-campero-desarrolladora-qa/"
                target="_blank"
                aria-label="LinkedIn"
                className="text-gray-600 hover:text-secondary transition-colors"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:paola.campero.medina@gmail.com"
                aria-label="Email"
                className="text-gray-600 hover:text-secondary transition-colors"
              >
                <FaEnvelope className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-200 to-purple-200 blur-3xl opacity-30"></div>
              
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-secondary shadow-2xl">
                <img
                  src={profilePicture}
                  alt="Paola Campero - QA Tester & Frontend Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}