export default function DestacadosPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary text-center">
          Propiedades Destacadas
        </h1>
        <p className="text-xl text-gray-700 text-center mb-16">
          Las mejores oportunidades de inversión en el sur de Florida
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder for featured properties */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Imagen de propiedad {item}</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">
                  Propiedad Destacada {item}
                </h3>
                <p className="text-gray-700 mb-2">
                  Miami, FL
                </p>
                <p className="text-2xl font-bold text-secondary mb-4">
                  $XXX,XXX
                </p>
                <button className="w-full bg-secondary text-white py-2 rounded hover:bg-accent transition-colors">
                  Ver Detalles
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-6">
            ¿No encuentras lo que buscas?
          </p>
          <a
            href="/contacto"
            className="bg-secondary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent transition-colors inline-block"
          >
            Contáctame
          </a>
        </div>
      </div>
    </div>
  )
}
