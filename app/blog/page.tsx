export default function BlogPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary text-center">
          Blog Real Estate
        </h1>
        <p className="text-xl text-gray-700 text-center mb-16">
          Artículos, consejos y noticias sobre el mercado inmobiliario en Florida
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder for blog posts */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Imagen del artículo</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-primary">
                Próximamente
              </h3>
              <p className="text-gray-700 mb-4">
                Contenido del blog en desarrollo. Pronto tendrás acceso a artículos sobre inversiones inmobiliarias en Florida.
              </p>
              <span className="text-secondary text-sm">Fecha: TBD</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
