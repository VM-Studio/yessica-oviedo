import Image from 'next/image'
import Link from 'next/link'

export default function DesarrollosPage() {
  return (
    <div className="pt-24 bg-white">
      {/* Sección 1 */}
      <section className="py-12 bg-white">
        <div className="max-w-[1250px] mx-auto">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative h-[520px] lg:h-[650px]">
              <Image src="/desarrollo1.png" alt="Casa WYN exterior" fill className="object-cover" priority />
            </div>
            <div className="bg-[#e8ddd4] flex flex-col justify-between">
              <div className="p-12 text-center flex flex-col items-center justify-center h-full">
                <h1 className="text-4xl font-serif text-[#1a1a1a] mb-4">Bienvenidos a CASA WYN</h1>
                <p className="text-base text-gray-800 mb-6">Entrega: Principios 2027.</p>
            <Link href="/contacto" className="inline-block border border-black px-8 py-3 text-sm uppercase tracking-[0.2em] bg-[#7c6043] text-white hover:bg-[#5d4630] transition-colors">
                  Contáctame
                </Link>
              </div>
              <div className="bg-white px-10 py-6">
                <div className="grid grid-cols-3 gap-4">
                  {['/desarrollo2.png', '/desarrollo3.png', '/desarrollo4.png'].map((src) => (
                    <div key={src} className="relative h-[190px]">
                      <Image src={src} alt="Amenidad Casa WYN" fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 2 */}
      <section className="py-12 bg-[#f5f0ea]">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
          <div className="relative h-[420px] lg:h-[520px]">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src="/desarrollo5.mp4" type="video/mp4" />
            </video>
          </div>
          <div>
            <div className="space-y-4 mb-6">
              <h2 className="text-2xl md:text-3xl font-serif text-[#1a1a1a]">Un espacio para disfrutar con los demás</h2>
              <p className="text-base text-gray-800 leading-relaxed">
                Estudios, 1 habitación o 1 habitación + Den. Terraza con jardín y área de parrilla. Scooters eléctricos para residentes.
                Precios exclusivos de pre-construcción. ¡Tu hogar ideal, ahora más cerca!
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {['/desarrollo6.png', '/desarrollo7.png'].map((src) => (
                <div key={src} className="relative h-[260px] bg-white">
                  <Image src={src} alt="Interior Casa WYN" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-6">
          <div className="relative h-[280px] lg:h-[320px] bg-white">
            <Image src="/desarrollo8.png" alt="Terraza Casa WYN" fill className="object-cover" />
          </div>
        </div>
      </section>
    </div>
  )
}
