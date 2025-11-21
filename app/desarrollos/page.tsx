export default function DesarrollosPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary text-center">
          Desarrollos
        </h1>
        <p className="text-xl text-gray-700 text-center mb-16">
          Proyectos inmobiliarios en desarrollo y preventa en Florida
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Placeholder for developments */}
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-80 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Imagen del desarrollo {item}</p>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-primary">
                  Desarrollo {item}
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Ubicación:</strong> Miami, FL
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Estado:</strong> En construcción
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Entrega estimada:</strong> 2026
                </p>
                <p className="text-gray-700 mb-6">
                  Exclusivo desarrollo con amenidades de lujo, ubicación privilegiada y las mejores vistas de la ciudad.
                </p>
                <button className="w-full bg-secondary text-white py-3 rounded hover:bg-accent transition-colors font-semibold">
                  Más Información
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-6">
            ¿Interesado en invertir en desarrollos?
          </p>
          <a
            href="/contacto"
            className="bg-secondary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent transition-colors inline-block"
          >
            Solicita una Consulta
          </a>
        </div>
      </div>
    </div>
  )
}
