import Image from 'next/image'
import { FaHome, FaHandshake, FaChartLine, FaKey, FaBuilding, FaUsers } from 'react-icons/fa'

const services = [
  {
    icon: FaHome,
    title: 'Compra de Propiedades',
    description: 'Te ayudamos a encontrar la propiedad perfecta que se ajuste a tus necesidades y presupuesto en el sur de Florida.',
  },
  {
    icon: FaKey,
    title: 'Venta de Propiedades',
    description: 'Maximizamos el valor de tu propiedad con estrategias de marketing efectivas y negociación experta.',
  },
  {
    icon: FaChartLine,
    title: 'Inversiones Inmobiliarias',
    description: 'Asesoramiento especializado para convertir tu inversión en una oportunidad rentable y segura.',
  },
  {
    icon: FaBuilding,
    title: 'Propiedades Comerciales',
    description: 'Soluciones integrales para inversores comerciales que buscan expandir su portafolio.',
  },
  {
    icon: FaHandshake,
    title: 'Asesoría Personalizada',
    description: 'Acompañamiento completo en cada etapa del proceso inmobiliario, desde la búsqueda hasta el cierre.',
  },
  {
    icon: FaUsers,
    title: 'Relocation Services',
    description: 'Facilitamos tu mudanza a Florida con servicios integrales para hacer de tu transición una experiencia sin complicaciones.',
  },
]

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-left md:text-left mb-12 max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary">
            Hacemos realidad tus sueños inmobiliarios
          </h2>
          <p className="text-xl text-gray-700">
            Servicios personalizados diseñados para guiarte en cada paso de tu experiencia inmobiliaria
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 justify-items-start">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full"
            >
              <div className="text-secondary text-4xl mb-4">
                <service.icon />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-left mt-10">
          <a
            href="/consulta"
            className="bg-secondary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent transition-colors inline-block"
          >
            Hablemos de Real Estate
          </a>
        </div>
      </div>
    </section>
  )
}
