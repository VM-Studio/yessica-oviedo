'use client'

import { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const testimonials = [
  {
    name: 'María González',
    text: 'Excelente servicio, Yesica nos ayudó a encontrar nuestra casa soñada en Miami. Profesional, dedicada y siempre disponible.',
    rating: 5,
  },
  {
    name: 'Carlos Rodríguez',
    text: 'La mejor experiencia comprando una propiedad de inversión. Yesica conoce el mercado perfectamente y nos guió en cada paso.',
    rating: 5,
  },
  {
    name: 'Ana Martínez',
    text: 'Vendimos nuestra casa en tiempo récord y al mejor precio gracias a Yesica. Altamente recomendada.',
    rating: 5,
  },
  {
    name: 'Jorge Fernández',
    text: 'Como inversionista, valoro el conocimiento profundo del mercado que Yesica tiene. Excelente asesoramiento.',
    rating: 5,
  },
  {
    name: 'Laura Sánchez',
    text: 'Proceso de relocation sin complicaciones. Yesica hizo que nuestra mudanza a Florida fuera perfecta.',
    rating: 5,
  },
  {
    name: 'Roberto Lima',
    text: 'Profesionalismo y dedicación en cada detalle. Muy satisfecho con el servicio recibido.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary">
            Llevemos al éxito tus inversiones
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Lo que nuestros clientes dicen sobre su experiencia trabajando con nosotros
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-xl" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>

              {/* Name */}
              <p className="font-bold text-primary">{testimonial.name}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/consulta"
            className="bg-[#7c6043] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#5d4630] transition-colors inline-block"
          >
            Contáctame
          </a>
        </div>
      </div>
    </section>
  )
}
