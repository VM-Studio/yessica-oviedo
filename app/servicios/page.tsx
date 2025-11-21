'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaHome, FaKey, FaDoorOpen, FaClipboardList, FaCouch, FaTools } from 'react-icons/fa';
import { HiOutlineChevronDown } from 'react-icons/hi';
import { useState } from 'react';

export default function ServiciosPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(1);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="pt-24">
      {/* Sección 1: Hero con imagen y texto */}
      <section className="relative min-h-[80vh] flex items-center pt-8 pb-10 bg-white">
        {/* Franja marrón similar al home pero más delgada */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 bg-[#eee9e1] h-[55%] md:h-[60%]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Imagen */}
            <div className="relative w-full min-h-[340px] h-[420px] lg:h-[520px] order-1">
              <Image
                src="/servicios1.png"
                alt="Servicios Inmobiliarios"
                fill
                className="object-cover rounded-lg shadow-lg"
                priority
              />
            </div>

            {/* Texto */}
            <div className="order-2 bg-white/95 p-6 lg:p-10 max-w-xl shadow-sm">
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
            <div className="bg-white p-6 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <FaHome className="text-4xl text-[#8b7355]" />
                <div className="flex items-end gap-2">
                  <span className="text-sm font-semibold text-gray-500">01/</span>
                  <h3 className="text-xl font-serif">Compra</h3>
                </div>
              </div>
              <p className="text-sm text-gray-700 flex-1">
                Te ayudamos a encontrar la propiedad perfecta que se ajuste a tus necesidades y presupuesto en el sur de Florida.
              </p>
              <div className="mt-5 flex justify-center">
                <Link
                  href="/contacto"
                  className="inline-block bg-black text-white px-4 py-2 text-sm text-center hover:bg-gray-800 transition-colors w-32"
                >
                  Consultar
                </Link>
              </div>
            </div>

            {/* Card 2: Venta */}
            <div className="bg-white p-6 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <FaKey className="text-4xl text-[#8b7355]" />
                <div className="flex items-end gap-2">
                  <span className="text-sm font-semibold text-gray-500">02/</span>
                  <h3 className="text-xl font-serif">Venta</h3>
                </div>
              </div>
              <p className="text-sm text-gray-700 flex-1">
                Maximizamos el valor de tu propiedad con estrategias de marketing efectivas y negociación experta.
              </p>
              <div className="mt-5 flex justify-center">
                <Link
                  href="/contacto"
                  className="inline-block bg-black text-white px-4 py-2 text-sm text-center hover:bg-gray-800 transition-colors w-32"
                >
                  Consultar
                </Link>
              </div>
            </div>

            {/* Card 3: Alquiler */}
            <div className="bg-white p-6 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <FaDoorOpen className="text-4xl text-[#8b7355]" />
                <div className="flex items-end gap-2">
                  <span className="text-sm font-semibold text-gray-500">03/</span>
                  <h3 className="text-xl font-serif">Alquiler</h3>
                </div>
              </div>
              <p className="text-sm text-gray-700 flex-1">
                Gestionamos el proceso de renta para que encuentres inquilinos calificados y condiciones convenientes sin complicaciones.
              </p>
              <div className="mt-5 flex justify-center">
                <Link
                  href="/contacto"
                  className="inline-block bg-black text-white px-4 py-2 text-sm text-center hover:bg-gray-800 transition-colors w-32"
                >
                  Consultar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 3: ¿Cómo funciona? - Accordion */}
      <section className="py-14 bg-[#e8ddd4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs text-[#8b7355] mb-2 tracking-[0.35em] uppercase">Lo que hacemos...</p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#1a1a1a]">¿Cómo funciona?</h2>
          </div>

          {/* Accordion Items */}
          <div className="space-y-5">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className={`bg-white/95 border border-black/20 rounded-2xl shadow-sm backdrop-blur-sm transition-all duration-300 ${
                  openAccordion === item ? 'shadow-xl translate-y-0' : 'hover:-translate-y-0.5'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(item)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border border-[#8b7355] flex items-center justify-center text-sm font-semibold text-[#8b7355] tracking-[0.2em]">
                      0{item}
                    </div>
                    <div>
                      <p className="text-base md:text-lg font-serif text-[#1a1a1a]">
                        {item === 1 && 'Consulta Inicial'}
                        {item === 2 && 'Búsqueda Personalizada'}
                        {item === 3 && 'Negociación y Cierre'}
                      </p>
                      {openAccordion === item && (
                        <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                          {item === 1 &&
                            'Iniciamos con una reunión personalizada para conocer tus necesidades. Nuestro compromiso es acompañarte desde el primer momento.'}
                          {item === 2 &&
                            'Buscamos propiedades que se adapten perfectamente a tus criterios para cumplir tus expectativas de inversión o vivienda.'}
                          {item === 3 &&
                            'Facilitamos la negociación y el cierre para asegurar condiciones favorables y una experiencia sin complicaciones.'}
                        </p>
                      )}
                    </div>
                  </div>
                  <div
                    className={`w-10 h-10 rounded-full border border-[#1a1a1a] flex items-center justify-center text-[#1a1a1a] transition-transform duration-300 ${
                      openAccordion === item ? 'rotate-180 bg-[#1a1a1a] text-white' : 'bg-white'
                    }`}
                  >
                    <HiOutlineChevronDown className="text-xl" />
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección 4: Otros servicios */}
      <section className="relative py-14 mt-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/servicios2.png"
            alt="Servicios adicionales"
            fill
            className="object-cover"
            priority={false}
          />
          <div className="absolute inset-0 bg-white/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-serif text-center mb-8 text-[#1a1a1a]">Otros servicios:</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: Administración */}
            <div className="bg-white p-6 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <FaClipboardList className="text-4xl text-[#8b7355]" />
                <div className="flex items-end gap-2">
                  <span className="text-sm font-semibold text-gray-500">04/</span>
                  <h3 className="text-xl font-serif">Administración</h3>
                </div>
              </div>
              <p className="text-sm text-gray-700 flex-1">
                Gestionamos cada detalle para que solo disfrutes de los beneficios de ser propietario.
              </p>
              <div className="mt-5 flex justify-center">
                <Link
                  href="/contacto"
                  className="inline-block bg-black text-white px-4 py-2 text-sm text-center hover:bg-gray-800 transition-colors w-32"
                >
                  Consultar
                </Link>
              </div>
            </div>

            {/* Card 2: Diseño de interior */}
            <div className="bg-white p-6 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <FaCouch className="text-4xl text-[#8b7355]" />
                <div className="flex items-end gap-2">
                  <span className="text-sm font-semibold text-gray-500">05/</span>
                  <h3 className="text-xl font-serif">Diseño de interior</h3>
                </div>
              </div>
              <p className="text-sm text-gray-700 flex-1">
                Creamos ambientes que hagan tu vida más cómoda y placentera, con estilo a tu medida.
              </p>
              <div className="mt-5 flex justify-center">
                <Link
                  href="/contacto"
                  className="inline-block bg-black text-white px-4 py-2 text-sm text-center hover:bg-gray-800 transition-colors w-32"
                >
                  Consultar
                </Link>
              </div>
            </div>

            {/* Card 3: Remodelaciones */}
            <div className="bg-white p-6 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <FaTools className="text-4xl text-[#8b7355]" />
                <div className="flex items-end gap-2">
                  <span className="text-sm font-semibold text-gray-500">06/</span>
                  <h3 className="text-xl font-serif">Remodelaciones</h3>
                </div>
              </div>
              <p className="text-sm text-gray-700 flex-1">
                Revalorizamos cada espacio con remodelaciones pensadas para compradores e inversores exigentes.
              </p>
              <div className="mt-5 flex justify-center">
                <Link
                  href="/contacto"
                  className="inline-block bg-black text-white px-4 py-2 text-sm text-center hover:bg-gray-800 transition-colors w-32"
                >
                  Consultar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 5: Newsletter con diseño del home */}
      <section className="bg-white py-16 mb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-serif text-black mb-3 leading-tight">
                Guía Gratuita: "5 simples pasos para vender tu casa"
              </h2>
              <p className="text-gray-600 text-sm">
                Suscríbete y recibe consejos exclusivos sobre el mercado inmobiliario para vender con éxito.
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
    </div>
  );
}
