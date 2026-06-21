import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer(){
    return (
        <footer className="bg-background text-gray-200 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center p-4 space-x-6 items-center">

                    <a className="bg-gray-400 hover:bg-white p-2 size-12 flex items-center justify-center rounded-full hover:scale-105 transition-transform"
                        href="https://github.com/paolaCampero11" aria-label="Github" title="Github de Paola" target="blank">
                            <FaGithub className="w-6 h-6 text-black"/>
                    </a>

                    <a className="bg-gray-400 hover:bg-white p-2 size-12 flex items-center justify-center rounded-full hover:scale-105 transition-transform"
                        href="https://www.linkedin.com/in/paola-campero-desarrolladora-qa/" 
                        aria-label="LinkedIn" title="LinkedIn de Paola" target="blank">
                            <FaLinkedin className="w-6 h-6 text-blue-800"/>
                    </a>

                    <a className="bg-gray-400 hover:bg-white p-2 size-12 flex items-center justify-center rounded-full hover:scale-105 transition-transform"
                        href="mailto:paola.campero.medina@gmail.com" aria-label="Gmail" title="Gmail de Paola">
                            <SiGmail className="w-6 h-6 text-red-600"/>
                    </a>

                </div>
                <div className="text-center text-gray-400">
                    <p> © {new Date().getFullYear()} Paola Zolenka Campero Medina</p>
                </div>
            </div>
            
        </footer>
    )
}