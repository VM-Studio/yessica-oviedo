import Image from 'next/image'

const areas = [
  {
    name: 'CONDADO MIAMI-DADE',
    image: '/condado-miami-dade.jpg',
    cities: 'Miami, Miami Beach, Coral Gables, Hialeah, Doral, Aventura, Homestead.',
  },
  {
    name: 'CONDADO BROWARD',
    image: '/condado-broward.jpg',
    cities: 'Weston, Fort Lauderdale, Hollywood, Pembroke Pines, Miramar, Coral Springs, Pompano Beach, Davie.',
  },
  {
    name: 'CONDADO PALM BEACH',
    image: '/condado-palm-beach.jpg',
    cities: 'West Palm Beach, Boca Raton, Boynton Beach, Delray Beach, Palm Beach Gardens, Wellington, Lake Worth.',
  },
]

export default function Areas() {
  return (
    <section id="zonas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-secondary mb-4 font-semibold">
            CONTÁCTANOS HOY
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Zonas Destacadas
          </h3>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Conocimiento profundo del mercado inmobiliario en las principales zonas del sur de Florida
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-64">
                <Image
                  src={area.image}
                  alt={area.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-xl font-bold mb-3 text-primary">{area.name}</h4>
                <p className="text-gray-700">{area.cities}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-6">
            ¿Buscas invertir en alguna de estas zonas?
          </p>
          <a
            href="/consulta"
            className="bg-secondary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent transition-colors inline-block"
          >
            Contáctame
          </a>
        </div>
      </div>
    </section>
  )
}
