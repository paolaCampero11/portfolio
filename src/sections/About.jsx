import {
  FaCode,
  FaBug,
  FaUsers,
  FaGraduationCap,
} from "react-icons/fa";

import { portfolioData } from "../data/portfolioData";

const colorClasses = {
  green: { bg: "bg-background/5", border: "border-green-100", text: "text-green-700", badge: "bg-green-100 text-green-800" },
  indigo: { bg: "bg-background/5", border: "border-indigo-100", text: "text-indigo-700", badge: "bg-indigo-100 text-indigo-800" },
  orange: { bg: "bg-background/5", border: "border-orange-100", text: "text-orange-700", badge: "bg-orange-100 text-orange-800" },
};

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-bl to-background/98 from-purple-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary">Sobre Mí</h2>
          <p className="mt-4 text-lg text-text">
            Conoce mi historia y lo que me motiva
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          <div className="space-y-4 text-text leading-relaxed">
            <p>
                Mi interés por la tecnología comenzó en la {" "}
                <span className="font-semibold text-secondary">
                 Universidad Mayor de San Simón (UMSS)
              </span> , donde 
                descubrí la satisfacción de crear soluciones digitales que 
                resolvían problemas reales. Desde entonces, he trabajado en 
                proyectos que combinan mi pasión por el desarrollo frontend 
                con mi compromiso por la calidad del software.
              
            </p>

            <p>
                Me especializo en construir interfaces intuitivas y accesibles 
                con React, Next.js y Tailwind CSS, y en asegurar la calidad de 
                los productos a través de pruebas manuales y automatizadas con 
                Cypress. 
            </p>

            <p>
              Creo en el código limpio, la accesibilidad web y la mejora
              continua. Actualmente busco oportunidades como QA Tester o
              Frontend Developer donde pueda seguir creciendo.
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-xl bg-background/5 p-6 shadow-sm border border-secondary hover:shadow-md transition-shadow">
              <div className="rounded-lg bg-indigo-100 w-12 h-12 flex items-center justify-center mb-4">
                <FaCode className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-secondary mb-2">
                Desarrollo Frontend
              </h3>
              <p className="text-sm text-text">
                Interfaces accesibles y responsivas con React, Next.js y
                Tailwind CSS.
              </p>
            </div>

            <div className="rounded-xl bg-background/5 p-6 shadow-sm border border-secondary hover:shadow-md transition-shadow">
              <div className="rounded-lg bg-green-100 w-12 h-12 flex items-center justify-center mb-4">
                <FaBug className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-secondary mb-2">
                QA Testing
              </h3>
              <p className="text-sm text-text">
                Pruebas manuales y automatizadas con Cypress para software de
                alta calidad.
              </p>
            </div>

            <div className="rounded-xl bg-background/5 p-6 shadow-sm border border-secondary hover:shadow-md transition-shadow">
              <div className="rounded-lg bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
                <FaUsers className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-secondary mb-2">
                Trabajo en Equipo
              </h3>
              <p className="text-sm text-text">
                Experiencia en equipos internacionales con metodologías ágiles
                (Scrum).
              </p>
            </div>

            <div className="rounded-xl bg-background/5 p-6 shadow-sm border border-secondary hover:shadow-md transition-shadow">
              <div className="rounded-lg bg-orange-100 w-12 h-12 flex items-center justify-center mb-4">
                <FaGraduationCap className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-secondary mb-2">
                Aprendizaje Continuo
              </h3>
              <p className="text-sm text-text">
                En constante formación mediante cursos y proyectos para
                mantenerme actualizada.
              </p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">
            Habilidades Técnicas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(portfolioData.skills).map(([key, skill]) => {
              const colors = colorClasses[skill.color];
              return (
                <div
                  key={key}
                  className={`rounded-xl ${colors.bg} p-6 border ${colors.border}`}
                >
                  <h4 className={`font-bold ${colors.text} mb-4`}>
                    {skill.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className={`rounded-full ${colors.badge} px-3 py-1 text-sm font-medium`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}