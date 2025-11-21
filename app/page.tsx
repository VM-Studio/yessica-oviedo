'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const toggleCard = (cardIndex: number) => {
    setExpandedCard(expandedCard === cardIndex ? null : cardIndex)
  }

  return (
    <>
      {/* Sección 1: Hero */}
      <section className="relative min-h-screen flex items-center pt-20 pb-4 bg-white">
        {/* Franja marrón horizontal que se extiende de lado a lado */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 bg-[#eee9e1] h-[55%] md:h-[60%]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            {/* Texto */}
            <div className="p-8 lg:p-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 text-black leading-tight">
                Hacemos realidad tus sueños inmobiliarios
              </h1>
              <p className="text-base text-gray-800 mb-6 leading-relaxed">
                Asesoramiento inmobiliario personalizado para hacer de tu próxima propiedad una realidad sin complicaciones.
              </p>
              <Link
                href="/contacto"
                className="inline-block bg-black text-white px-6 py-2.5 text-sm hover:bg-gray-800 transition-colors font-medium"
              >
                Contáctame
              </Link>
            </div>

            {/* Imagen - con z-index mayor para que quede por encima de la franja */}
            <div className="relative h-[400px] lg:h-[500px] z-20">
              <Image
                src="/home1.png"
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
      <section className="relative py-2 lg:py-4">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/homebackground2.png"
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
              <div className="relative h-[350px] lg:h-[450px]">
                <Image
                  src="/home2.png"
                  alt="Tu éxito"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Texto derecha */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-2xl lg:text-3xl font-serif font-bold mb-4 text-black">
                  Tu éxito es nuestra prioridad.
                </h2>
                <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                  Con el respaldo de un equipo experto, conexiones estratégicas y profundo conocimiento del sur de la Florida, brindamos la asistencia que necesitas para resolver cada detalle de tu operación inmobiliaria de manera eficaz y segura.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 3: Zonas Destacadas */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-3 text-black">
              Zonas Destacadas
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: Miami-Dade */}
              <div className="group cursor-pointer">
                <div 
                  className={`relative overflow-hidden rounded-3xl transition-all duration-500 shadow-lg ${
                    expandedCard === 1 
                      ? 'h-auto' 
                      : 'h-[480px]'
                  }`}
                  style={{ boxShadow: '0 8px 20px rgba(238, 233, 225, 0.6)' }}
                >
                  <div className="relative h-[480px]">
                    <Image
                      src="/homedestacada1.png"
                      alt="Condado Miami-Dade"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110 rounded-t-3xl"
                    />
                    {/* Overlay negro */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    
                    {/* Contenido superior */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-bold mb-1">CONDADO</h3>
                          <h3 className="text-lg font-bold">MIAMI-DADE</h3>
                        </div>
                        <button
                          onClick={() => toggleCard(1)}
                          className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-2xl transition-transform hover:scale-110"
                        >
                          {expandedCard === 1 ? '−' : '+'}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Contenido expandible */}
                  <div 
                    className={`bg-black text-white p-6 transition-all duration-500 ${
                      expandedCard === 1 
                        ? 'opacity-100 max-h-[500px]' 
                        : 'opacity-0 max-h-0 overflow-hidden'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">
                      Miami, Miami Beach, Coral Gables, Hialeah, Doral, Aventura, Homestead.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Broward */}
              <div className="group cursor-pointer">
                <div 
                  className={`relative overflow-hidden rounded-3xl transition-all duration-500 shadow-lg ${
                    expandedCard === 2 
                      ? 'h-auto' 
                      : 'h-[480px]'
                  }`}
                  style={{ boxShadow: '0 8px 20px rgba(238, 233, 225, 0.6)' }}
                >
                  <div className="relative h-[480px]">
                    <Image
                      src="/homedestacada2.png"
                      alt="Condado Broward"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110 rounded-t-3xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-bold mb-1">CONDADO</h3>
                          <h3 className="text-lg font-bold">BROWARD</h3>
                        </div>
                        <button
                          onClick={() => toggleCard(2)}
                          className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-2xl transition-transform hover:scale-110"
                        >
                          {expandedCard === 2 ? '−' : '+'}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div 
                    className={`bg-black text-white p-6 transition-all duration-500 ${
                      expandedCard === 2 
                        ? 'opacity-100 max-h-[500px]' 
                        : 'opacity-0 max-h-0 overflow-hidden'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">
                      Weston, Fort Lauderdale, Hollywood, Pembroke Pines, Miramar, Coral Springs, Pompano Beach, Davie.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: Palm Beach */}
              <div className="group cursor-pointer">
                <div 
                  className={`relative overflow-hidden rounded-3xl transition-all duration-500 shadow-lg ${
                    expandedCard === 3 
                      ? 'h-auto' 
                      : 'h-[480px]'
                  }`}
                  style={{ boxShadow: '0 8px 20px rgba(238, 233, 225, 0.6)' }}
                >
                  <div className="relative h-[480px]">
                    <Image
                      src="/homedestacada3.png"
                      alt="Condado Palm Beach"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110 rounded-t-3xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-bold mb-1">CONDADO</h3>
                          <h3 className="text-lg font-bold">PALM BEACH</h3>
                        </div>
                        <button
                          onClick={() => toggleCard(3)}
                          className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-2xl transition-transform hover:scale-110"
                        >
                          {expandedCard === 3 ? '−' : '+'}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div 
                    className={`bg-black text-white p-6 transition-all duration-500 ${
                      expandedCard === 3 
                        ? 'opacity-100 max-h-[500px]' 
                        : 'opacity-0 max-h-0 overflow-hidden'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">
                      West Palm Beach, Boca Raton, Boynton Beach, Delray Beach, Palm Beach Gardens, Wellington, Lake Worth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 4: Banner CONTÁCTANOS HOY + Maximizamos */}
      <section className="bg-white py-1">
        <div className="overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-marquee">
            <span className="text-xl lg:text-3xl font-bold text-black mx-6">CONTÁCTANOS HOY</span>
            <span className="text-xl lg:text-3xl font-bold text-black mx-6">CONTÁCTANOS HOY</span>
            <span className="text-xl lg:text-3xl font-bold text-black mx-6">CONTÁCTANOS HOY</span>
            <span className="text-xl lg:text-3xl font-bold text-black mx-6">CONTÁCTANOS HOY</span>
            <span className="text-xl lg:text-3xl font-bold text-black mx-6">CONTÁCTANOS HOY</span>
            <span className="text-xl lg:text-3xl font-bold text-black mx-6">CONTÁCTANOS HOY</span>
            <span className="text-xl lg:text-3xl font-bold text-black mx-6">CONTÁCTANOS HOY</span>
            <span className="text-xl lg:text-3xl font-bold text-black mx-6">CONTÁCTANOS HOY</span>
            <span className="text-xl lg:text-3xl font-bold text-black mx-6">CONTÁCTANOS HOY</span>
            <span className="text-xl lg:text-3xl font-bold text-black mx-6">CONTÁCTANOS HOY</span>
          </div>
        </div>
      </section>

      <section className="relative min-h-screen flex items-center pt-0 pb-4 bg-white">
        {/* Franja horizontal color navbar que se extiende de lado a lado */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 bg-[#eee9e1] h-[55%] md:h-[60%]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            {/* Imagen - con z-index mayor para que quede por encima de la franja */}
            <div className="relative h-[400px] lg:h-[500px] z-20">
              <Image
                src="/home3.png"
                alt="Maximizamos"
                fill
                className="object-cover"
              />
            </div>

            {/* Texto */}
            <div className="p-8 lg:p-12">
              <p className="text-xs uppercase tracking-wider mb-3 text-black">HOLA SOY YESICA</p>
              <h2 className="text-2xl lg:text-3xl font-serif font-bold mb-4 leading-tight text-black">
                Maximizamos el potencial de tus inversiones de manera segura y eficaz, convirtiendo cada oportunidad en realidad.
              </h2>
              <p className="text-sm lg:text-base leading-relaxed text-gray-800">
                Simplificaremos cada paso, guiándote con experiencia y compromiso para que disfrutes del camino hacia tu nueva inversión.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 5: Llevemos al éxito tus inversiones */}
      <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center mt-[-2rem] mb-8">
        {/* Background Image con overlay oscuro */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/homebackground4.png"
            alt="Background"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <p className="text-white text-xs uppercase tracking-wider mb-3">Consulta Gratuita</p>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
            Llevemos al éxito tus inversiones
          </h2>
          <Link
            href="/contacto"
            className="inline-block bg-white text-black px-8 py-3 text-sm hover:bg-gray-100 transition-colors font-medium"
          >
            Contáctame
          </Link>
        </div>
      </section>

      {/* Sección 6: Newsletter */}
      <section className="bg-white py-16 mb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-serif text-black mb-3 leading-tight">
                Guía Gratuita: "5 simples pasos para vender tu casa"
              </h2>
              <p className="text-gray-600 text-sm">
                Descarga nuestra guía exclusiva y aprende los secretos para vender tu propiedad con éxito
              </p>
            </div>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-3xl mx-auto">
              <input
                type="text"
                placeholder="Nombre *"
                className="flex-1 px-6 py-4 text-sm text-black bg-[#eee9e1] rounded-md focus:outline-none focus:ring-2 focus:ring-black placeholder:text-gray-600 w-full"
                required
              />
              <input
                type="email"
                placeholder="Email *"
                className="flex-1 px-6 py-4 text-sm text-black bg-[#eee9e1] rounded-md focus:outline-none focus:ring-2 focus:ring-black placeholder:text-gray-600 w-full"
                required
              />
              <button
                type="submit"
                className="bg-black text-white px-10 py-4 text-sm font-semibold rounded-md hover:bg-gray-800 transition-all duration-300 w-full sm:w-auto whitespace-nowrap"
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
