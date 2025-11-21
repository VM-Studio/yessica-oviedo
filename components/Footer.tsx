import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import { SiThreads } from 'react-icons/si'

export default function Footer() {
  return (
    <footer className="bg-[#e8ddd4] text-black">
      <div className="container mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12 max-w-5xl mx-auto">
          {/* Columna 1: Contacto */}
          <div>
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
              className="inline-block bg-black text-white px-6 py-2 text-sm hover:bg-gray-800 transition-colors font-medium"
            >
              Hablemos de Real Estate
            </Link>
          </div>

          {/* Columna 2: Profile */}
          <div className="text-center">
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
                className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
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
          <div className="text-right">
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
        <div className="border-t border-gray-400 pt-6">
          <div className="overflow-hidden whitespace-nowrap">
            <div className="inline-block animate-marquee">
              <div className="inline-flex items-center space-x-8">
                <div className="relative h-12 w-24 inline-block">
                  <Image src="/footer1.png" alt="Logo 1" fill className="object-contain" />
                </div>
                <div className="relative h-12 w-24 inline-block">
                  <Image src="/footer2.png" alt="Logo 2" fill className="object-contain" />
                </div>
                <div className="relative h-12 w-24 inline-block">
                  <Image src="/footer3.png" alt="Logo 3" fill className="object-contain" />
                </div>
                <div className="relative h-12 w-24 inline-block">
                  <Image src="/footer5.png" alt="Logo 5" fill className="object-contain" />
                </div>
                <div className="relative h-12 w-24 inline-block">
                  <Image src="/footer6.png" alt="Logo 6" fill className="object-contain" />
                </div>
                {/* Duplicamos para efecto infinito sin espacios */}
                <div className="relative h-12 w-24 inline-block">
                  <Image src="/footer1.png" alt="Logo 1" fill className="object-contain" />
                </div>
                <div className="relative h-12 w-24 inline-block">
                  <Image src="/footer2.png" alt="Logo 2" fill className="object-contain" />
                </div>
                <div className="relative h-12 w-24 inline-block">
                  <Image src="/footer3.png" alt="Logo 3" fill className="object-contain" />
                </div>
                <div className="relative h-12 w-24 inline-block">
                  <Image src="/footer5.png" alt="Logo 5" fill className="object-contain" />
                </div>
                <div className="relative h-12 w-24 inline-block">
                  <Image src="/footer6.png" alt="Logo 6" fill className="object-contain" />
                </div>
                {/* Tercera repetición para loop perfecto */}
                <div className="relative h-12 w-24 inline-block">
                  <Image src="/footer1.png" alt="Logo 1" fill className="object-contain" />
                </div>
                <div className="relative h-12 w-24 inline-block">
                  <Image src="/footer2.png" alt="Logo 2" fill className="object-contain" />
                </div>
                <div className="relative h-12 w-24 inline-block">
                  <Image src="/footer3.png" alt="Logo 3" fill className="object-contain" />
                </div>
                <div className="relative h-12 w-24 inline-block">
                  <Image src="/footer5.png" alt="Logo 5" fill className="object-contain" />
                </div>
                <div className="relative h-12 w-24 inline-block">
                  <Image src="/footer6.png" alt="Logo 6" fill className="object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
