import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <section id="sobre-mi" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[500px] lg:h-[600px] order-2 lg:order-1">
            <div className="relative w-full h-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/about-image.jpg"
                alt="Yesica Oviedo"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-sm uppercase tracking-wider text-secondary mb-4 font-semibold">
              HOLA SOY YESICA
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Tu éxito es nuestra prioridad.
            </h3>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                Con el respaldo de un equipo experto, conexiones estratégicas y profundo conocimiento del sur de la Florida, brindamos la asistencia que necesitas para resolver cada detalle de tu operación inmobiliaria de manera eficaz y segura.
              </p>
              <p>
                Simplificaremos cada paso, guiándote con experiencia y compromiso para que disfrutes del camino hacia tu nueva inversión.
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/servicios"
                className="bg-secondary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-accent transition-colors inline-block"
              >
                Ver Más
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
