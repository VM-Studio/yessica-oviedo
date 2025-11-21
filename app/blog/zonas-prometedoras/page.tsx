import Image from 'next/image'
import Link from 'next/link'
import { FaEye, FaRegCommentDots, FaRegHeart, FaFacebookF, FaLinkedinIn, FaLink } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const recentPosts = [
  {
    id: 1,
    title: 'Oportunidad ÚNICA en Florida: Casa a estrenar en Rotonda West',
    image: '/blog1.png',
    views: 2,
    comments: 0,
    href: '/blog/oportunidad-unica',
  },
  {
    id: 2,
    title: 'El Impacto del Diseño de Interiores en el Valor de tu Hogar',
    image: '/blog2.png',
    views: 7,
    comments: 0,
    href: '/blog/impacto-diseno',
  },
  {
    id: 4,
    title: 'La Inversión Inmobiliaria Clave para 2025',
    image: '/blog4.png',
    views: 30,
    comments: 0,
  },
]

export default function ZonasPrometedorasPage() {
  return (
    <div className="pt-24 pb-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="border border-[#e6dac8] shadow-[0_20px_45px_rgba(0,0,0,0.07)]">
          <div className="relative h-[320px] md:h-[420px] w-full">
            <Image
              src="/blog3.png"
              alt="Las Zonas más Prometedoras que Debes Conocer en Miami"
              fill
              className="object-cover"
              sizes="100vw"
              priority
              unoptimized
            />
          </div>

          <div className="px-6 md:px-10 py-10 font-serif space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-[#e6dac8]">
                  <Image
                    src="/blog3.png"
                    alt="Yesica Oviedo"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-[#1a1a1a]">Yesica Oviedo</p>
                  <p>15 ene · 2 Min. de lectura</p>
                </div>
              </div>
              <div className="flex gap-4 text-gray-500 text-lg">
                <FaFacebookF className="cursor-pointer hover:text-[#8b7355]" />
                <FaXTwitter className="cursor-pointer hover:text-[#8b7355]" />
                <FaLinkedinIn className="cursor-pointer hover:text-[#8b7355]" />
                <FaLink className="cursor-pointer hover:text-[#8b7355]" />
              </div>
            </div>

            <div className="space-y-4 text-gray-800 leading-relaxed text-base">
              <p className="text-sm uppercase tracking-[0.35em] text-[#8b7355]">
                Foto del escritor: Yesica Oviedo
              </p>
              <h1 className="text-3xl md:text-4xl text-[#1a1a1a] leading-tight">
                Las Zonas más Prometedoras que Debes Conocer en Miami
              </h1>
              <p className="text-sm text-gray-500">Actualizado: 16 ene</p>

              <p>
                El mercado inmobiliario del Sur de Florida es como un rompecabezas. Cada pieza - cada vecindario, cada zona - tiene
                su propia personalidad y potencial único de inversión.
              </p>

              <p>
                Como agente inmobiliaria especializada en esta región, mi trabajo es ayudarte a encontrar esa pieza perfecta que no
                solo se ajuste a tu estrategia de inversión, sino que también maximice tu retorno a largo plazo.
              </p>

              <p>Hoy, te voy a guiar a través de las zonas más prometedoras de Miami.</p>

              <h2 className="text-2xl mt-6 text-[#1a1a1a]">Miami Beach: El Corazón del Lujo y el Turismo</h2>
              <p>
                Con una demanda constante de alquileres vacacionales y una apreciación sostenida de las propiedades, esta zona ofrece
                rendimientos excepcionales.
              </p>
              <p>
                Los edificios frente al mar y las propiedades históricas del Art Deco District son particularmente atractivos para
                inversores internacionales
              </p>

              <h2 className="text-2xl mt-6 text-[#1a1a1a]">Brickell y Downtown Miami: El Centro Financiero</h2>
              <p>El distrito financiero de Miami se ha transformado en un punto internacional de negocios.</p>
              <p>
                Los apartamentos de lujo y las unidades más compactas atraen a profesionales jóvenes y ejecutivos, garantizando una
                alta ocupación en alquileres a largo plazo.
              </p>

              <h2 className="text-2xl mt-6 text-[#1a1a1a]">Doral: La Ciudad Emergente</h2>
              <p>
                Sus comunidades planificadas, excelentes escuelas y proximidad al Aeropuerto Internacional de Miami la convierten en
                una opción ideal para familias e inversores que buscan propiedades con potencial de valorización.
              </p>

              <h2 className="text-2xl mt-6 text-[#1a1a1a]">Aventura: Equilibrio Entre Lujo y Comodidad</h2>
              <p>Esta zona ofrece una mezcla perfecta de vida residencial y comercial.</p>
              <p>
                El Aventura Mall y su ubicación estratégica entre Miami y Fort Lauderdale la hacen especialmente atractiva para
                compradores que buscan un estilo de vida más tranquilo sin alejarse de la acción.
              </p>

              <h2 className="text-2xl mt-6 text-[#1a1a1a]">Fort Lauderdale: La Venecia Americana</h2>
              <p>
                Con sus canales pintorescos y un mercado inmobiliario más accesible que Miami Beach, Fort Lauderdale está
                experimentando un boom en desarrollo de lujo.
              </p>
              <p>Las propiedades cerca de Las Olas Boulevard y la playa son particularmente prometedoras.</p>

              <h2 className="text-2xl mt-6 text-[#1a1a1a]">Boca Ratón: Elegancia y Estabilidad</h2>
              <p>
                Conocida por su elegancia y comunidades exclusivas, Boca Ratón atrae a compradores de alto poder adquisitivo.
              </p>
              <p>Sus playas inmaculadas y ambiente familiar la convierten en una inversión segura con apreciación constante.</p>

              <h2 className="text-2xl mt-6 text-[#1a1a1a]">¿Qué hacer ahora?</h2>
              <p>
                Como siempre digo a mis clientes: la clave está en elegir una ubicación que no solo satisfaga tus objetivos de
                inversión actuales, sino que también tenga potencial de crecimiento futuro.
              </p>
              <p>
                Cada una de estas zonas tiene sus características únicas, y la decisión final dependerá de tu estrategia de inversión
                personal.
              </p>
              <p>¿Te gustaría explorar más a fondo alguna de estas zonas?</p>
              <p>
                Como tu asesora inmobiliaria, estoy acá para guiarte en cada paso del proceso. Agenda una llamada conmigo y
                descubramos juntos cuál es la mejor opción para tu próxima inversión.
              </p>
              <p>
                Seguime en mis redes sociales para más consejos sobre el mercado inmobiliario de Miami y mantente al día con las
                últimas tendencias del sector.
              </p>
              <p className="font-semibold">Yesica Oviedo</p>
            </div>

            <div className="border-t border-[#e6dac8] pt-6 text-gray-600 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <FaEye /> 25 visualizaciones
                </div>
                <div className="flex items-center gap-2">
                  <FaRegCommentDots /> 0 comentarios
                </div>
              </div>
              <FaRegHeart className="text-[#d9a9a9] text-2xl" />
            </div>
          </div>
        </div>
      </div>

      <section className="max-w-5xl mx-auto px-4 mt-16">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-serif text-[#1a1a1a]">Entradas recientes</h3>
          <Link href="/blog" className="text-sm uppercase tracking-[0.3em] text-[#8b7355] hover:text-[#6d5a43]">
            Ver todo
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 font-serif">
          {recentPosts.map((post) => (
            <Link href={post.href ?? '/blog'} key={post.id} className="border border-[#e6dac8] hover:-translate-y-1 transition-transform">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                  unoptimized
                />
              </div>
              <div className="p-4 space-y-3">
                <p className="text-base text-[#1a1a1a] line-clamp-2">{post.title}</p>
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <FaEye /> {post.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaRegCommentDots /> {post.comments}
                  </span>
                  <FaRegHeart className="text-[#d9a9a9]" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 mt-16">
        <div className="border border-[#e6dac8] p-6 font-serif">
          <h3 className="text-2xl text-[#1a1a1a] mb-4">Comentarios</h3>
          <hr className="border-[#e6dac8]" />
          <textarea
            placeholder="Escribir un comentario..."
            className="w-full mt-4 p-4 border border-[#e6dac8] focus:outline-none focus:ring-2 focus:ring-[#8b7355]"
            rows={4}
          />
        </div>
      </section>
    </div>
  )
}
