import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import { SiThreads } from 'react-icons/si'

export default function Footer() {
  return (
    <footer className="bg-[#e8ddd4] text-black">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Columna 1: Contacto */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contacto</h4>
            <div className="space-y-3 mb-6">
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
              className="inline-block bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors font-medium"
            >
              Hablemos de Real Estate
            </Link>
          </div>

          {/* Columna 2: Profile */}
          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
              <Image
                src="/profile-footer.jpg"
                alt="Yesica Oviedo"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-1">Yesica Oviedo</h3>
            <p className="text-sm mb-4">MEZZINI REALTY GROUP</p>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-4">
              <a
                href="mailto:info@yesicaoviedo.com"
                className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://www.threads.net/@yesrealestate_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
                aria-label="Threads"
              >
                <SiThreads />
              </a>
              <a
                href="https://wa.me/19547601855"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.instagram.com/yesrealestate_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Columna 3: Navigation */}
          <div className="text-right">
            <nav className="space-y-3">
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

        {/* Logos Row */}
        <div className="border-t border-gray-400 pt-8">
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            <div className="relative h-16 w-24 lg:w-32">
              <Image
                src="/studio-roman-logo.png"
                alt="Studio Roman"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative h-16 w-24 lg:w-32">
              <Image
                src="/miami-realtors-logo.png"
                alt="Miami Realtors"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative h-16 w-24 lg:w-32">
              <Image
                src="/realtor-logo.png"
                alt="Realtor"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative h-16 w-24 lg:w-32">
              <Image
                src="/mls-logo.png"
                alt="MLS"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative h-16 w-32 lg:w-40">
              <Image
                src="/mrg-mezzini-logo.png"
                alt="MRG Mezzini Realty Group"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative h-16 w-32 lg:w-40">
              <Image
                src="/nar-logo.png"
                alt="National Association of Realtors"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative h-16 w-32 lg:w-40">
              <Image
                src="/arven-group-logo.png"
                alt="Arven Group"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
