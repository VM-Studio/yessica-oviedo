import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Sección 1: Hero */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Texto */}
            <div className="bg-[#c9b8a8] p-12 lg:p-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-white leading-tight">
                Hacemos realidad tus sueños inmobiliarios
              </h1>
              <p className="text-lg text-white mb-8 leading-relaxed">
                Asesoramiento inmobiliario personalizado para hacer de tu próxima propiedad una realidad sin complicaciones.
              </p>
              <Link
                href="/contacto"
                className="inline-block bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors font-medium"
              >
                Contáctame
              </Link>
            </div>

            {/* Imagen */}
            <div className="relative h-[600px] lg:h-[700px]">
              <Image
                src="/hero-home.jpg"
                alt="Yesica Oviedo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sección 2: Tu éxito es nuestra prioridad */}
      <section className="relative py-20 lg:py-32">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/background-exito.jpg"
            alt="Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white grid grid-cols-1 lg:grid-cols-2 shadow-2xl">
              {/* Imagen izquierda */}
              <div className="relative h-[400px] lg:h-auto">
                <Image
                  src="/exito-image.jpg"
                  alt="Tu éxito"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Texto derecha */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-black">
                  Tu éxito es nuestra prioridad.
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Con el respaldo de un equipo experto, conexiones estratégicas y profundo conocimiento del sur de la Florida, brindamos la asistencia que necesitas para resolver cada detalle de tu operación inmobiliaria de manera eficaz y segura.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 3: Zonas Destacadas */}
      <section className="py-20 bg-[#e8ddd4]">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-4 text-black">
              Zonas Destacadas
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: Miami-Dade */}
              <div className="group cursor-pointer">
                <div className="relative h-[400px] overflow-hidden rounded-3xl">
                  <Image
                    src="/condado-miami-dade.jpg"
                    alt="Condado Miami-Dade"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay negro */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  
                  {/* Contenido */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">CONDADO</h3>
                        <h3 className="text-2xl font-bold">MIAMI-DADE</h3>
                      </div>
                      <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-3xl">
                        +
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Broward */}
              <div className="group cursor-pointer">
                <div className="relative h-[400px] overflow-hidden rounded-3xl">
                  <Image
                    src="/condado-broward.jpg"
                    alt="Condado Broward"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">CONDADO</h3>
                        <h3 className="text-2xl font-bold">BROWARD</h3>
                      </div>
                      <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-3xl">
                        +
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Palm Beach */}
              <div className="group cursor-pointer">
                <div className="relative h-[400px] overflow-hidden rounded-3xl">
                  <Image
                    src="/condado-palm-beach.jpg"
                    alt="Condado Palm Beach"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">CONDADO</h3>
                        <h3 className="text-2xl font-bold">PALM BEACH</h3>
                      </div>
                      <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-3xl">
                        +
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 4: Banner CONTÁCTANOS HOY + Maximizamos */}
      <section className="bg-[#c9b8a8] py-2">
        <div className="overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-marquee">
            <span className="text-3xl lg:text-5xl font-bold text-white mx-8">HOY CONTÁCTANOS</span>
            <span className="text-3xl lg:text-5xl font-bold text-white mx-8">HOY CONTÁCTANOS</span>
            <span className="text-3xl lg:text-5xl font-bold text-white mx-8">HOY CONTÁCTANOS</span>
            <span className="text-3xl lg:text-5xl font-bold text-white mx-8">HOY CONTÁCTANOS</span>
            <span className="text-3xl lg:text-5xl font-bold text-white mx-8">HOY CONTÁCTANOS</span>
          </div>
        </div>
      </section>

      <section className="bg-[#c9b8a8] py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Imagen */}
            <div className="relative h-[500px] lg:h-[600px]">
              <Image
                src="/maximizamos-image.jpg"
                alt="Maximizamos"
                fill
                className="object-cover"
              />
            </div>

            {/* Texto */}
            <div className="bg-black p-12 lg:p-16 text-white">
              <p className="text-sm uppercase tracking-wider mb-4">HOLA SOY YESICA</p>
              <h2 className="text-3xl lg:text-5xl font-serif font-bold mb-6 leading-tight">
                Maximizamos el potencial de tus inversiones de manera segura y eficaz, convirtiendo cada oportunidad en realidad.
              </h2>
              <p className="text-lg leading-relaxed">
                Simplificaremos cada paso, guiándote con experiencia y compromiso para que disfrutes del camino hacia tu nueva inversión.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 5: Llevemos al éxito tus inversiones */}
      <section className="relative py-32">
        {/* Background Image con overlay oscuro */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/exito-inversiones-bg.jpg"
            alt="Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <p className="text-white text-sm uppercase tracking-wider mb-4">Consulta Gratuita</p>
          <h2 className="text-4xl lg:text-6xl font-serif font-bold text-white mb-8 max-w-4xl mx-auto leading-tight">
            Llevemos al éxito tus inversiones
          </h2>
          <Link
            href="/contacto"
            className="inline-block bg-white text-black px-10 py-4 hover:bg-gray-100 transition-colors font-medium text-lg"
          >
            Contáctame
          </Link>
        </div>
      </section>

      {/* Sección 6: Newsletter */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif text-white mb-8 text-center lg:text-left">
              Guía Gratuita: "5 simples pasos para vender tu casa".
            </h2>
            
            <form className="flex flex-col lg:flex-row gap-4 items-center">
              <input
                type="text"
                placeholder="Nombre *"
                className="flex-1 px-6 py-4 text-black w-full lg:w-auto"
                required
              />
              <input
                type="email"
                placeholder="Email *"
                className="flex-1 px-6 py-4 text-black w-full lg:w-auto"
                required
              />
              <button
                type="submit"
                className="bg-white text-black px-10 py-4 hover:bg-gray-100 transition-colors font-medium w-full lg:w-auto"
              >
                Registrarme
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
