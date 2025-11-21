import Image from 'next/image'
import Link from 'next/link'

export default function SobreMiPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] lg:h-[500px]">
              <Image
                src="/about-image.jpg"
                alt="Yesica Oviedo"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
            
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                Sobre Mí
              </h1>
              <h2 className="text-xl font-semibold mb-3 text-secondary">
                Yesica Oviedo - Tu Aliada en Real Estate
              </h2>
              <div className="space-y-3 text-sm lg:text-base text-gray-700">
                <p>
                  Con el respaldo de un equipo experto, conexiones estratégicas y profundo conocimiento del sur de la Florida, brindamos la asistencia que necesitas para resolver cada detalle de tu operación inmobiliaria de manera eficaz y segura.
                </p>
                <p>
                  Simplificaremos cada paso, guiándote con experiencia y compromiso para que disfrutes del camino hacia tu nueva inversión.
                </p>
                <p>
                  Trabajo con MEZZINI REALTY GROUP, una empresa reconocida por su excelencia y profesionalismo en el mercado inmobiliario de Florida.
                </p>
              </div>
              
              <div className="mt-6">
                <Link
                  href="/contacto"
                  className="bg-secondary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-accent transition-colors inline-block"
                >
                  Contáctame
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 bg-[#e8ddd4] -mx-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-serif mb-10">
              Lo que nuestros clientes dicen:
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Testimonial 1 */}
              <div className="bg-[#e8ddd4] border border-black p-6 hover:shadow-lg transition-shadow duration-300">
                <p className="text-gray-800 italic mb-8 leading-relaxed text-sm">
                  Yesica nos encontró una propiedad acorde a nuestras necesidades cerca de los mejores colegios de Weston mientras todavía nosotros estábamos en el exterior. Gracias por facilitarnos tanto este proceso y hacerlo tan agradable.
                </p>
                <p className="font-bold text-base">Flavia G.</p>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-[#e8ddd4] border border-black p-6 hover:shadow-lg transition-shadow duration-300">
                <p className="text-gray-800 italic mb-8 leading-relaxed text-sm">
                  Yésica es una excelente profesional y gran persona, la experiencia de comprar nuestra casa acompañados por ella fue la tranquilidad, seguridad y confianza que necesitábamos.
                </p>
                <p className="font-bold text-base">Maria Elena V.</p>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-[#e8ddd4] border border-black p-6 hover:shadow-lg transition-shadow duration-300">
                <p className="text-gray-800 italic mb-8 leading-relaxed text-sm">
                  Alquilar nuestra propiedad nunca fue tan sencillo. Desde los inquilinos hasta los contratos.
                </p>
                <p className="font-bold text-base">Ana y Roberto M.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-serif mb-8">
              Mi Experiencia
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6">
                <h3 className="text-5xl font-bold text-[#8b7355] mb-3">+500</h3>
                <p className="text-base text-gray-700">Clientes Satisfechos</p>
              </div>
              <div className="p-6">
                <h3 className="text-5xl font-bold text-[#8b7355] mb-3">+10</h3>
                <p className="text-base text-gray-700">Años de Experiencia</p>
              </div>
              <div className="p-6">
                <h3 className="text-5xl font-bold text-[#8b7355] mb-3">$100M+</h3>
                <p className="text-base text-gray-700">En Transacciones</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
