'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Newsletter() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica de envío del formulario
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[400px] order-2 lg:order-1">
            <div className="relative w-full h-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/newsletter-image.jpg"
                alt="Guía gratuita"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Form */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Guía Gratuita: "5 simples pasos para vender tu casa".
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Descarga nuestra guía gratuita y descubre los secretos para vender tu propiedad de manera rápida y al mejor precio.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-secondary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-accent transition-colors"
              >
                {isSubmitted ? '¡Gracias!' : 'Registrarme'}
              </button>
            </form>

            {isSubmitted && (
              <p className="mt-4 text-green-600 text-center font-semibold">
                ¡Te enviaremos la guía a tu email!
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
