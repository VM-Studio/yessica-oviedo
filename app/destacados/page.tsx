import Image from 'next/image'
import { FaHome, FaCar, FaDollarSign } from 'react-icons/fa'

const infoItems = [
  { icon: <FaHome className="text-2xl text-[#8b7355]" />, label: '3 DORMITORIOS / 3 BAÑOS' },
  { icon: <FaCar className="text-2xl text-[#8b7355]" />, label: 'Cochera' },
  { icon: <span className="text-2xl text-[#8b7355]">✨</span>, label: '242 m²' },
  { icon: <FaDollarSign className="text-2xl text-[#c9a875]" />, label: '$459,000' },
]

export default function DestacadosPage() {
  return (
    <div className="pt-24">
      {/* Sección 1 */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.35em] text-[#8b7355] font-serif">Destacado</p>
              <h1 className="text-3xl md:text-4xl font-serif">Rotonda, Florida</h1>
              <p className="text-sm lg:text-base text-gray-700 leading-relaxed max-w-xl">
                Descubre esta hermosa propiedad en una de las zonas más tranquilas y exclusivas del sur de la Florida. Con amplios
                espacios, acabados modernos y un ambiente relajante, esta casa es ideal para quienes buscan comodidad y serenidad.
              </p>
              <p className="text-sm lg:text-base text-gray-700 leading-relaxed max-w-xl">
                Está ubicada cerca de hermosos campos de golf, playas y toda la naturaleza que Rotonda tiene para ofrecer.
              </p>
              <div className="relative h-[260px] md:h-[320px] rounded-[32px] overflow-hidden shadow-lg">
                <Image src="/destacados2.png" alt="Casa Rotonda Florida - Interior" fill className="object-cover" />
              </div>
            </div>

            <div className="relative h-[360px] md:h-[480px] rounded-[32px] overflow-hidden shadow-2xl self-end mt-6">
              <Image src="/destacados1.png" alt="Casa Rotonda Florida - Exterior" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Banner marquee */}
      <section className="bg-black text-white py-4 overflow-hidden whitespace-nowrap">
        <div className="flex">
          <div className="flex items-center animate-marquee gap-8 text-lg font-serif tracking-[0.35em] uppercase">
            {Array.from({ length: 8 }).map((_, index) => (
              <span key={index}>New Construction</span>
            ))}
          </div>
          <div className="flex items-center animate-marquee gap-8 text-lg font-serif tracking-[0.35em] uppercase">
            {Array.from({ length: 8 }).map((_, index) => (
              <span key={index}>New Construction</span>
            ))}
          </div>
        </div>
      </section>

      {/* Sección 3 */}
      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative h-[380px] md:h-[460px] rounded-[32px] overflow-hidden shadow-xl bg-[#f7f3ed]">
              <Image src="/destacados3.png" alt="Plano de la propiedad Rotonda" fill className="object-contain p-6" />
            </div>

            <div className="bg-[#f4ece2] p-8 md:p-10 rounded-[32px] shadow-lg">
              <p className="text-xs tracking-[0.35em] uppercase text-[#8b7355] mb-4">Ficha técnica</p>
              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[#1a1a1a]">Información</h2>
              <div className="space-y-5">
                {infoItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 border border-[#e2d3c4] rounded-full px-5 py-3 bg-white/60 hover:bg-white transition-colors"
                  >
                    {item.icon}
                    <span className="text-base tracking-wide text-[#1a1a1a]">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
