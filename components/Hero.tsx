import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary">
              Maximizamos el potencial de tus inversiones de manera segura y eficaz, convirtiendo cada oportunidad en realidad.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700">
              Asesoramiento inmobiliario personalizado para hacer de tu próxima propiedad una realidad sin complicaciones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/consulta"
                className="bg-secondary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent transition-colors inline-block"
              >
                Consulta Gratuita
              </Link>
              <Link
                href="/servicios"
                className="border-2 border-secondary text-secondary px-8 py-4 rounded-full text-lg font-semibold hover:bg-secondary hover:text-white transition-colors inline-block"
              >
                Ver Servicios
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[500px] lg:h-[600px]">
            <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/hero-image.jpg"
                alt="Yesica Oviedo - Real Estate Professional"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-secondary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-secondary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}
