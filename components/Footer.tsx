import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import { SiThreads } from 'react-icons/si'

const logoRows = Array.from({ length: 3 }).map((_, rowIndex) => [
  `/footer1.png`,
  `/footer2.png`,
  `/footer3.png`,
  `/footer5.png`,
  `/footer6.png`,
])

export default function Footer() {
  return (
    <footer className="bg-[#eee9e1] text-black">
      <div className="container mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center mb-12 max-w-5xl mx-auto">
          {/* Columna 1: Contacto */}
          <div className="flex flex-col justify-center">
            <h4 className="text-lg font-bold mb-4">Contacto</h4>
            <div className="space-y-2 mb-4 text-sm">
              <p>
                <a href="mailto:info@yesicaoviedo.com" className="hover:underline">
                  info@yesicaoviedo.com
                </a>
              </p>
              <p>
                <a href="mailto:ventas@yesicaoviedo.com" className="hover:underline">
                  ventas@yesicaoviedo.com
                </a>
              </p>
            </div>
            <Link
              href="/contacto"
              className="inline-block bg-[#7c6043] text-white px-6 py-2 text-sm hover:bg-[#5d4630] transition-colors font-medium"
            >
              Hablemos de Real Estate
            </Link>
          </div>

          {/* Columna 2: Profile */}
          <div className="text-center flex flex-col items-center">
            <div className="relative w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden">
              <Image
                src="/footerlogo.png"
                alt="Yesica Oviedo"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-bold mb-1">Yesica Oviedo</h3>
            <p className="text-xs mb-3">MEZZINI REALTY GROUP</p>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-3">
              <a
                href="mailto:info@yesicaoviedo.com"
                className="w-9 h-9 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
                aria-label="Email"
              >
                <FaEnvelope className="text-sm" />
              </a>
              <a
                href="https://www.threads.net/@yesrealestate_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
                aria-label="Threads"
              >
                <SiThreads className="text-sm" />
              </a>
              <a
                href="https://wa.me/19547601855"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-sm" />
              </a>
              <a
                href="https://www.instagram.com/yesrealestate_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="text-sm" />
              </a>
            </div>
          </div>

          {/* Columna 3: Navigation */}
          <div className="text-right flex flex-col justify-center items-end">
            <nav className="space-y-2 text-sm">
              <Link href="/" className="block hover:underline font-medium underline">
                Inicio
              </Link>
              <Link href="/sobre-mi" className="block hover:underline font-medium underline">
                Sobre Mi
              </Link>
              <Link href="/blog" className="block hover:underline font-medium underline">
                Blog
              </Link>
              <Link href="/servicios" className="block hover:underline font-medium underline">
                Servicios
              </Link>
              <Link href="/contacto" className="block hover:underline font-medium underline">
                Consulta Gratuita
              </Link>
            </nav>
          </div>
        </div>

        {/* Logos Banner en Movimiento */}
        <div className="border-t border-gray-400 pt-6 -mx-8">
          <div className="overflow-hidden whitespace-nowrap">
            <div className="animate-marquee flex w-max gap-16 px-8">
              {[...Array(3)].map((_, loopIndex) =>
                logoRows[loopIndex].map((src, idx) => (
                  <div key={`${loopIndex}-${idx}`} className="relative h-12 w-24 flex-shrink-0">
                    <Image src={src} alt={`Logo ${idx + 1}`} fill className="object-contain" />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
