'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaHome, FaKey, FaChartLine } from 'react-icons/fa';
import { useState } from 'react';

export default function ServiciosPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(1);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="pt-24">
      {/* Sección 1: Hero con imagen y texto */}
      <section className="bg-[#e8ddd4] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Imagen */}
            <div className="relative h-[400px] md:h-[450px]">
              <Image
                src="/servicios-hero.jpg"
                alt="Servicios Inmobiliarios"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>

            {/* Texto */}
            <div>
              <p className="text-xs text-[#8b7355] mb-3 tracking-wider">
                Compra, Venta y Renta de Propiedades.
              </p>
              <h1 className="text-3xl md:text-4xl font-serif mb-4 leading-tight">
                Encontremos la casa de tus sueños. Estoy acá para ayudarte.
              </h1>
              <Link
                href="/contacto"
                className="inline-block bg-black text-white px-6 py-3 text-sm hover:bg-gray-800 transition-colors"
              >
                Contactar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 2: Título principal */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Hacemos realidad tus sueños inmobiliarios
          </h2>
          <p className="text-base text-gray-700 max-w-3xl mx-auto">
            Servicios personalizados diseñados para guiarte en cada paso de tu experiencia inmobiliaria
          </p>
        </div>

        {/* 3 Cards de servicios principales */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: Compra */}
            <div className="bg-white p-6 shadow-lg hover:shadow-xl transition-shadow">
              <FaHome className="text-4xl text-[#8b7355] mb-4" />
              <h3 className="text-xl font-serif mb-3">Compra de Propiedades</h3>
              <p className="text-sm text-gray-700">
                Te ayudamos a encontrar la propiedad perfecta que se ajuste a tus necesidades y presupuesto en el sur de Florida.
              </p>
            </div>

            {/* Card 2: Venta */}
            <div className="bg-white p-6 shadow-lg hover:shadow-xl transition-shadow">
              <FaKey className="text-4xl text-[#8b7355] mb-4" />
              <h3 className="text-xl font-serif mb-3">Venta de Propiedades</h3>
              <p className="text-sm text-gray-700">
                Maximizamos el valor de tu propiedad con estrategias de marketing efectivas y negociación experta.
              </p>
            </div>

            {/* Card 3: Inversiones */}
            <div className="bg-white p-6 shadow-lg hover:shadow-xl transition-shadow">
              <FaChartLine className="text-4xl text-[#8b7355] mb-4" />
              <h3 className="text-xl font-serif mb-3">Inversiones Inmobiliarias</h3>
              <p className="text-sm text-gray-700">
                Asesoramiento especializado para convertir tu inversión en una oportunidad rentable y segura.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 3: ¿Cómo funciona? - Accordion */}
      <section className="py-12 bg-[#e8ddd4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-xs text-[#8b7355] mb-2 tracking-wider">Lo que hacemos...</p>
            <h2 className="text-3xl md:text-4xl font-serif">¿Cómo funciona?</h2>
          </div>

          {/* Accordion Items */}
          <div className="space-y-4">
            {/* Item 1 */}
            <div className="border-2 border-black bg-white">
              <button
                onClick={() => toggleAccordion(1)}
                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-base md:text-lg font-serif">01 Consulta Inicial</span>
                <span className="text-xl">{openAccordion === 1 ? '▲' : '▼'}</span>
              </button>
              {openAccordion === 1 && (
                <div className="px-5 pb-5 pt-2">
                  <p className="text-sm text-gray-700">
                    Iniciamos con una reunión personalizada para conocer tus necesidades. Nuestro compromiso es acompañarte desde el primer momemnto.
                  </p>
                </div>
              )}
            </div>

            {/* Item 2 */}
            <div className="border-2 border-black bg-white">
              <button
                onClick={() => toggleAccordion(2)}
                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-base md:text-lg font-serif">02 Búsqueda Personalizada</span>
                <span className="text-xl">{openAccordion === 2 ? '▲' : '▼'}</span>
              </button>
              {openAccordion === 2 && (
                <div className="px-5 pb-5 pt-2">
                  <p className="text-sm text-gray-700">
                    Nos encargamos de buscar propiedades que se adapten perfectamente a tus criterios para cumplir tus expectativas de inversión o vivienda.
                  </p>
                </div>
              )}
            </div>

            {/* Item 3 */}
            <div className="border-2 border-black bg-white">
              <button
                onClick={() => toggleAccordion(3)}
                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-base md:text-lg font-serif">03 Negociación y Cierre</span>
                <span className="text-xl">{openAccordion === 3 ? '▲' : '▼'}</span>
              </button>
              {openAccordion === 3 && (
                <div className="px-5 pb-5 pt-2">
                  <p className="text-sm text-gray-700">
                    Facilitamos el proceso de negociación y cierre, asegurando condiciones favorables y acompañándote en cada paso sin complicaciones.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Sección 4: Otros servicios */}
      <section className="py-12 bg-black text-white relative">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/otros-servicios-bg.jpg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-serif text-center mb-8">Otros servicios:</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: Administración */}
            <div className="bg-black/80 backdrop-blur-sm p-6 text-center">
              <h3 className="text-lg md:text-xl font-serif mb-3">04/ Administración de propiedades</h3>
              <p className="text-sm text-gray-300 mb-4">
                Gestionamos cada detalle para que vos solo disfrutes de los beneficios de ser propietario.
              </p>
              <Link
                href="/contacto"
                className="inline-block bg-white text-black px-5 py-2 text-sm hover:bg-gray-200 transition-colors"
              >
                Consultar
              </Link>
            </div>

            {/* Card 2: Diseño de interior */}
            <div className="bg-black/80 backdrop-blur-sm p-6 text-center">
              <h3 className="text-lg md:text-xl font-serif mb-3">05/ Diseño de interior</h3>
              <p className="text-sm text-gray-300 mb-4">
                Se trata de crear un hogar que haga tu vida más cómoda y placentera.
              </p>
              <Link
                href="/contacto"
                className="inline-block bg-white text-black px-5 py-2 text-sm hover:bg-gray-200 transition-colors"
              >
                Consultar
              </Link>
            </div>

            {/* Card 3: Remodelaciones */}
            <div className="bg-black/80 backdrop-blur-sm p-6 text-center">
              <h3 className="text-lg md:text-xl font-serif mb-3">06/ Remodelaciones</h3>
              <p className="text-sm text-gray-300 mb-4">
                Ya sea que estés buscando comprar o vender, te ayudamos a revalorizar cada espacio con remodelaciones.
              </p>
              <Link
                href="/contacto"
                className="inline-block bg-white text-black px-5 py-2 text-sm hover:bg-gray-200 transition-colors"
              >
                Consultar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 5: Banner marquee + contenido */}
      <section className="bg-white">
        {/* Banner Marquee */}
        <div className="bg-black text-white py-3 overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-marquee">
            <span className="text-lg font-bold mx-6">CONTÁCTANOS HOY</span>
            <span className="text-lg font-bold mx-6">CONTÁCTANOS HOY</span>
            <span className="text-lg font-bold mx-6">CONTÁCTANOS HOY</span>
            <span className="text-lg font-bold mx-6">CONTÁCTANOS HOY</span>
            <span className="text-lg font-bold mx-6">CONTÁCTANOS HOY</span>
            <span className="text-lg font-bold mx-6">CONTÁCTANOS HOY</span>
          </div>
          <div className="inline-block animate-marquee">
            <span className="text-lg font-bold mx-6">CONTÁCTANOS HOY</span>
            <span className="text-lg font-bold mx-6">CONTÁCTANOS HOY</span>
            <span className="text-lg font-bold mx-6">CONTÁCTANOS HOY</span>
            <span className="text-lg font-bold mx-6">CONTÁCTANOS HOY</span>
            <span className="text-lg font-bold mx-6">CONTÁCTANOS HOY</span>
            <span className="text-lg font-bold mx-6">CONTÁCTANOS HOY</span>
          </div>
        </div>

        {/* Sección con imagen de fondo */}
        <div className="relative py-20">
          <div className="absolute inset-0">
            <Image
              src="/section5-bg.jpg"
              alt="Inversiones"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <p className="text-xs tracking-wider mb-3">Consulta Gratuita</p>
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Llevemos al éxito tus inversiones
            </h2>
            <Link
              href="/contacto"
              className="inline-block bg-white text-black px-6 py-3 text-sm hover:bg-gray-200 transition-colors font-semibold"
            >
              Contáctame
            </Link>
          </div>
        </div>
      </section>

      {/* Sección 6: Newsletter */}
      <section className="relative py-16">
        <div className="absolute inset-0">
          <Image
            src="/newsletter-bg.jpg"
            alt="Newsletter"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-serif mb-3">
            Guía Gratuita: 5 simples pasos para vender tu casa
          </h2>
          <p className="text-sm mb-6">
            Suscríbete a mi newsletter y recibe consejos exclusivos sobre el mercado inmobiliario.
          </p>

          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu email"
              className="flex-1 px-4 py-3 text-sm text-black focus:outline-none focus:ring-2 focus:ring-[#8b7355]"
              required
            />
            <button
              type="submit"
              className="bg-[#8b7355] text-white px-6 py-3 text-sm hover:bg-[#6d5a43] transition-colors font-semibold whitespace-nowrap"
            >
              Suscribirme
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
