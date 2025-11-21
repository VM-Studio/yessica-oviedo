'use client';

import { useState } from 'react';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    servicio: '',
    zona: '',
    presupuesto: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Aquí puedes agregar la lógica para enviar el formulario
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-24 min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Card del formulario con fondo beige */}
        <div className="bg-[#e8ddd4] p-6 md:p-10 rounded-lg shadow-2xl">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-serif mb-3">
              Consulta Gratuita
            </h1>
            <p className="text-base text-gray-800">
              Sin costo. Sin compromiso. Garantizado.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Nombre y Apellido */}
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="nombre" className="block text-xs font-medium mb-1.5">
                  Nombre *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="First name"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 text-sm border-2 border-gray-800 bg-transparent focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <div>
                <label htmlFor="apellido" className="block text-xs font-medium mb-1.5">
                  Apellido *
                </label>
                <input
                  type="text"
                  id="apellido"
                  name="apellido"
                  placeholder="Last name"
                  value={formData.apellido}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 text-sm border-2 border-gray-800 bg-transparent focus:outline-none focus:border-black transition-colors"
                />
              </div>
            </div>

            {/* Email y Teléfono */}
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="email" className="block text-xs font-medium mb-1.5">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 text-sm border-2 border-gray-800 bg-transparent focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <div>
                <label htmlFor="telefono" className="block text-xs font-medium mb-1.5">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  placeholder="Phone"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 text-sm border-2 border-gray-800 bg-transparent focus:outline-none focus:border-black transition-colors"
                />
              </div>
            </div>

            {/* Servicios */}
            <div>
              <label htmlFor="servicio" className="block text-xs font-medium mb-1.5">
                Servicios *
              </label>
              <select
                id="servicio"
                name="servicio"
                value={formData.servicio}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 text-sm border-2 border-gray-800 bg-transparent focus:outline-none focus:border-black transition-colors appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23000' d='M10.293 3.293L6 7.586 1.707 3.293A1 1 0 00.293 4.707l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 1rem center',
                  backgroundSize: '1rem'
                }}
              >
                <option value="">Seleccionar servicio</option>
                <option value="compra">Compra de Propiedad</option>
                <option value="venta">Venta de Propiedad</option>
                <option value="inversion">Inversión Inmobiliaria</option>
                <option value="alquiler">Alquiler</option>
                <option value="administracion">Administración de Propiedades</option>
                <option value="diseno">Diseño de Interior</option>
                <option value="remodelacion">Remodelaciones</option>
              </select>
            </div>

            {/* Zonas */}
            <div>
              <label htmlFor="zona" className="block text-xs font-medium mb-1.5">
                Zonas *
              </label>
              <select
                id="zona"
                name="zona"
                value={formData.zona}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 text-sm border-2 border-gray-800 bg-transparent focus:outline-none focus:border-black transition-colors appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23000' d='M10.293 3.293L6 7.586 1.707 3.293A1 1 0 00.293 4.707l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 1rem center',
                  backgroundSize: '1rem'
                }}
              >
                <option value="">Seleccionar zona</option>
                <option value="miami-dade">Miami-Dade</option>
                <option value="broward">Broward</option>
                <option value="palm-beach">Palm Beach</option>
                <option value="weston">Weston</option>
                <option value="fort-lauderdale">Fort Lauderdale</option>
                <option value="boca-raton">Boca Raton</option>
                <option value="otra">Otra zona</option>
              </select>
            </div>

            {/* Presupuesto Estimado */}
            <div>
              <label htmlFor="presupuesto" className="block text-xs font-medium mb-1.5">
                Presupuesto Estimado *
              </label>
              <input
                type="text"
                id="presupuesto"
                name="presupuesto"
                placeholder="Aproximadamente"
                value={formData.presupuesto}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 text-sm border-2 border-gray-800 bg-transparent focus:outline-none focus:border-black transition-colors"
              />
            </div>

            {/* Mensaje */}
            <div>
              <label htmlFor="mensaje" className="block text-xs font-medium mb-1.5">
                Mensaje *
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                placeholder="Cual es tu consulta/duda mas grande?"
                value={formData.mensaje}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2.5 text-sm border-2 border-gray-800 bg-transparent focus:outline-none focus:border-black transition-colors resize-none"
              />
            </div>

            {/* Botón Enviar */}
            <div>
              <button
                type="submit"
                className="w-full md:w-auto px-10 py-3 bg-black text-white text-base font-medium hover:bg-gray-800 transition-colors"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
