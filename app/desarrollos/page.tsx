import Image from 'next/image';
import Link from 'next/link';

export default function DesarrollosPage() {
  return (
    <div className="pt-24">
      {/* Sección 1: Hero con imagen grande izquierda + info derecha */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Imagen grande del edificio */}
            <div className="relative h-[450px] md:h-[550px]">
              <Image
                src="/desarrollo-casa-wyn.jpg"
                alt="Casa WYN - Desarrollo inmobiliario"
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </div>

            {/* Info + 3 imágenes pequeñas */}
            <div>
              <h1 className="text-3xl md:text-4xl font-serif mb-4">
                Bienvenidos a CASA WYN
              </h1>
              <p className="text-sm lg:text-base text-gray-700 mb-6">
                Entrega: Principios 2027.
              </p>
              
              <Link
                href="/contacto"
                className="inline-block border-2 border-black px-6 py-2.5 text-sm hover:bg-black hover:text-white transition-colors mb-8"
              >
                Contáctame
              </Link>

              {/* Grid de 3 imágenes pequeñas de amenidades */}
              <div className="grid grid-cols-3 gap-3 mt-6">
                <div className="relative h-[120px]">
                  <Image
                    src="/casa-wyn-amenidad-1.jpg"
                    alt="Amenidades Casa WYN - Terraza"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="relative h-[120px]">
                  <Image
                    src="/casa-wyn-amenidad-2.jpg"
                    alt="Amenidades Casa WYN - Gimnasio"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="relative h-[120px]">
                  <Image
                    src="/casa-wyn-amenidad-3.jpg"
                    alt="Amenidades Casa WYN - Área social"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 2: Texto descriptivo */}
      <section className="bg-[#e8ddd4] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-serif mb-5">
            Un espacio para disfrutar con los demás
          </h2>
          <p className="text-sm lg:text-base text-gray-800 leading-relaxed">
            Estudios, 1 habitación o 1 habitación + Den. Terraza con jardín y área de parrilla. Scooters eléctricos para residentes. Precios exclusivos de pre-construcción. ¡Tu hogar ideal, ahora más cerca!
          </p>
        </div>
      </section>

      {/* Sección 3: Grid de 4 imágenes grandes */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-5">
            {/* Imagen 1 - Vista nocturna edificio */}
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="/casa-wyn-detalle-1.jpg"
                alt="Casa WYN - Vista nocturna"
                fill
                className="object-cover rounded-2xl"
              />
            </div>

            {/* Imagen 2 - Dormitorio */}
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="/casa-wyn-detalle-2.jpg"
                alt="Casa WYN - Dormitorio moderno"
                fill
                className="object-cover rounded-2xl"
              />
            </div>

            {/* Imagen 3 - Cocina */}
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="/casa-wyn-detalle-3.jpg"
                alt="Casa WYN - Cocina equipada"
                fill
                className="object-cover rounded-2xl"
              />
            </div>

            {/* Imagen 4 - Terraza rooftop */}
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="/casa-wyn-detalle-4.jpg"
                alt="Casa WYN - Terraza rooftop"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
