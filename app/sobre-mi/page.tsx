import Image from 'next/image'
import Link from 'next/link'
import { FaQuoteLeft } from 'react-icons/fa'

export default function SobreMiPage() {
  const testimonials = [
    {
      quote:
        'Yesica nos encontró una propiedad acorde a nuestras necesidades cerca de los mejores colegios de Weston mientras todavía nosotros estábamos en el exterior. Gracias por facilitarnos tanto este proceso y hacerlo tan agradable.',
      author: 'Flavia G.',
    },
    {
      quote:
        'Yésica es una excelente profesional y gran persona, la experiencia de comprar nuestra casa acompañados por ella fue la tranquilidad, seguridad y confianza que necesitábamos.',
      author: 'Maria Elena V.',
    },
    {
      quote:
        'Alquilar nuestra propiedad nunca fue tan sencillo. Desde los inquilinos hasta los contratos.',
      author: 'Ana y Roberto M.',
    },
  ]

  return (
    <div className="pt-24 pb-0 space-y-12">
      {/* Hero Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative h-[400px] lg:h-[500px]">
            <Image
              src="/sobremi1.png"
              alt="Yesica Oviedo"
              fill
              className="object-cover rounded-lg shadow-xl"
            />
          </div>
          
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Sobre Mí
            </h1>
            <h2 className="text-xl font-semibold mb-5 text-secondary">
              Yesica Oviedo - Tu Aliada en Real Estate
            </h2>
            <div className="space-y-4 text-sm lg:text-base text-gray-700 leading-relaxed">
              <p>
                Soy Yesica Oviedo, licenciada en Real Estate en Florida, especializada en ofrecer un servicio integral que permite a cada cliente encontrar todas las soluciones necesarias en un solo lugar. Mi misión es garantizar que cada operación inmobiliaria sea gestionada con profesionalismo, eficiencia y atención al detalle.
              </p>
              <p>
                En mi compañía, acompañamos a nuestros clientes en cada etapa del proceso: desde la identificación de la propiedad ideal hasta su gestión y mantenimiento. Ofrecemos servicios complementarios como diseño de interiores, remodelaciones y administración de propiedades, asegurando que cada proyecto alcance su máximo potencial y responda a las necesidades específicas de cada cliente.
              </p>
              <p>
                Mi compromiso es brindar una experiencia completa y personalizada, basada en la excelencia y orientada a alcanzar resultados sobresalientes. Conmigo, encontrarás el respaldo necesario para convertir tus proyectos inmobiliarios en una inversión segura y exitosa.
              </p>
            </div>
            
            <div className="mt-6">
              <Link
                href="/contacto"
                className="bg-[#7c6043] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#5d4630] transition-colors inline-block"
              >
                Contáctame
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-[#e8ddd4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.4em] uppercase text-[#8b7355] mb-3">Testimonios</p>
            <h2 className="text-3xl md:text-4xl font-serif">Lo que nuestros clientes dicen:</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.author}
                className="bg-white/85 backdrop-blur-sm rounded-3xl border border-[#d6c5b3] shadow-lg shadow-[#cdbba6]/40 p-6 flex flex-col gap-6 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex items-center gap-3 text-[#8b7355]">
                  <div className="w-10 h-10 rounded-full border border-[#8b7355] flex items-center justify-center">
                    <FaQuoteLeft />
                  </div>
                  <span className="text-xs font-semibold tracking-[0.3em] text-gray-500">
                    0{index + 1}
                  </span>
                </div>
                <p className="text-gray-800 leading-relaxed text-sm flex-1">
                  {testimonial.quote}
                </p>
                <div className="border-t border-[#eadfce] pt-4">
                  <p className="font-semibold text-sm uppercase tracking-[0.2em] text-[#6d5a43]">
                    {testimonial.author}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
