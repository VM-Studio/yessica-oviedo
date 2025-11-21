import Image from 'next/image';
import { FaHome, FaCar, FaDollarSign } from 'react-icons/fa';

export default function DestacadosPage() {
  return (
    <div className="pt-24">
      {/* Sección 1: Texto arriba izquierda + 2 imágenes */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Texto descriptivo arriba a la izquierda */}
          <div className="mb-8 max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-serif mb-4">
              Rotonda, Florida
            </h1>
            <p className="text-sm lg:text-base text-gray-700 mb-4 leading-relaxed">
              Descubre esta hermosa propiedad en una de las zonas más tranquilas y exclusivas del sur de la Florida. Con amplios espacios, acabados modernos y un ambiente relajante, esta casa es ideal para quienes buscan comodidad y serenidad.
            </p>
            <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
              Está ubicada cerca de hermosos campos de golf, playas y toda la naturaleza que Rotonda tiene para ofrecer.
            </p>
          </div>

          {/* Grid de 2 imágenes */}
          <div className="grid md:grid-cols-2 gap-5">
            {/* Imagen 1 */}
            <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden">
              <Image
                src="/destacado-rotonda-1.jpg"
                alt="Casa Rotonda Florida - Vista frontal"
                fill
                className="object-cover"
              />
            </div>

            {/* Imagen 2 */}
            <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden">
              <Image
                src="/destacado-rotonda-2.jpg"
                alt="Casa Rotonda Florida - Vista trasera"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sección 2: Plano + Información */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Banner marquee */}
          <div className="bg-black text-white py-3 overflow-hidden whitespace-nowrap mb-10 -mx-4 sm:-mx-6 lg:-mx-8">
            <div className="inline-block animate-marquee">
              <span className="text-lg font-bold mx-6">NEW CONSTRUCTION</span>
              <span className="text-lg font-bold mx-6">NEW CONSTRUCTION</span>
              <span className="text-lg font-bold mx-6">NEW CONSTRUCTION</span>
              <span className="text-lg font-bold mx-6">NEW CONSTRUCTION</span>
              <span className="text-lg font-bold mx-6">NEW CONSTRUCTION</span>
              <span className="text-lg font-bold mx-6">NEW CONSTRUCTION</span>
            </div>
            <div className="inline-block animate-marquee">
              <span className="text-lg font-bold mx-6">NEW CONSTRUCTION</span>
              <span className="text-lg font-bold mx-6">NEW CONSTRUCTION</span>
              <span className="text-lg font-bold mx-6">NEW CONSTRUCTION</span>
              <span className="text-lg font-bold mx-6">NEW CONSTRUCTION</span>
              <span className="text-lg font-bold mx-6">NEW CONSTRUCTION</span>
              <span className="text-lg font-bold mx-6">NEW CONSTRUCTION</span>
            </div>
          </div>

          {/* Grid: Plano + Info */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Plano */}
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="/plano-rotonda.jpg"
                alt="Plano de la propiedad Rotonda"
                fill
                className="object-contain"
              />
            </div>

            {/* Información */}
            <div className="bg-[#e8ddd4] p-8 rounded-2xl">
              <h2 className="text-3xl md:text-4xl font-serif mb-6">
                Información
              </h2>

              <div className="space-y-4">
                {/* Dormitorios/Baños */}
                <div className="flex items-center gap-3">
                  <FaHome className="text-2xl text-[#8b7355]" />
                  <span className="text-base">3 DORMITORIOS / 3 BAÑOS</span>
                </div>

                {/* Cochera */}
                <div className="flex items-center gap-3">
                  <FaCar className="text-2xl text-[#8b7355]" />
                  <span className="text-base">Cochera</span>
                </div>

                {/* Superficie */}
                <div className="flex items-center gap-3">
                  <span className="text-2xl text-[#8b7355]">✨</span>
                  <span className="text-base">242 m²</span>
                </div>

                {/* Precio */}
                <div className="flex items-center gap-3">
                  <FaDollarSign className="text-2xl text-[#c9a875]" />
                  <span className="text-base font-bold">$459,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
