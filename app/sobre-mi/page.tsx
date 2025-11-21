import Image from 'next/image'
import Link from 'next/link'

export default function SobreMiPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[600px]">
              <Image
                src="/about-image.jpg"
                alt="Yesica Oviedo"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
            
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                Sobre Mí
              </h1>
              <h2 className="text-2xl font-semibold mb-4 text-secondary">
                Yesica Oviedo - Tu Aliada en Real Estate
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
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
              
              <div className="mt-8">
                <Link
                  href="/contacto"
                  className="bg-secondary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-accent transition-colors inline-block"
                >
                  Contáctame
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 bg-gray-50 -mx-4 px-4 md:-mx-8 md:px-8 lg:-mx-16 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
              Mi Experiencia
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-4xl font-bold text-secondary mb-2">+500</h3>
                <p className="text-gray-700">Clientes Satisfechos</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-4xl font-bold text-secondary mb-2">+10</h3>
                <p className="text-gray-700">Años de Experiencia</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-4xl font-bold text-secondary mb-2">$100M+</h3>
                <p className="text-gray-700">En Transacciones</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
