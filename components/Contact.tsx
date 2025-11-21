'use client'

import { useState } from 'react'
import { FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica de envío del formulario
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 3000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary">
            Contacto
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos y comencemos a trabajar juntos en tu próxima inversión inmobiliaria.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary">
              Información de Contacto
            </h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start">
                <FaEnvelope className="text-secondary text-2xl mt-1 mr-4" />
                <div>
                  <h4 className="font-bold text-lg mb-1">Email</h4>
                  <a
                    href="mailto:info@yesicaoviedo.com"
                    className="text-gray-700 hover:text-secondary transition-colors"
                  >
                    info@yesicaoviedo.com
                  </a>
                  <br />
                  <a
                    href="mailto:ventas@yesicaoviedo.com"
                    className="text-gray-700 hover:text-secondary transition-colors"
                  >
                    ventas@yesicaoviedo.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <FaPhone className="text-secondary text-2xl mt-1 mr-4" />
                <div>
                  <h4 className="font-bold text-lg mb-1">Teléfono</h4>
                  <a
                    href="tel:+19547601855"
                    className="text-gray-700 hover:text-secondary transition-colors"
                  >
                    +1 (954) 760-1855
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start">
                <FaWhatsapp className="text-secondary text-2xl mt-1 mr-4" />
                <div>
                  <h4 className="font-bold text-lg mb-1">WhatsApp</h4>
                  <a
                    href="https://wa.me/19547601855"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-secondary transition-colors"
                  >
                    Enviar mensaje
                  </a>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="mt-8 p-6 bg-white rounded-lg shadow">
              <h4 className="font-bold text-lg mb-3">Horario de Atención</h4>
              <p className="text-gray-700">Lunes - Viernes: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-700">Sábados: 10:00 AM - 4:00 PM</p>
              <p className="text-gray-700">Domingos: Con cita previa</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-primary">
              Envíanos un mensaje
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-secondary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-accent transition-colors"
              >
                {isSubmitted ? '¡Mensaje Enviado!' : 'Enviar Mensaje'}
              </button>
            </form>

            {isSubmitted && (
              <p className="mt-4 text-green-600 text-center font-semibold">
                ¡Gracias por contactarnos! Te responderemos pronto.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
