import Image from 'next/image'
import Link from 'next/link'
import { FaEye, FaRegCommentDots, FaRegHeart, FaFacebookF, FaLinkedinIn, FaLink } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const recentPosts = [
  {
    id: 2,
    title: 'El Impacto del Diseño de Interiores en el Valor de tu Hogar',
    image: '/blog2.png',
    views: 7,
    comments: 0,
  },
  {
    id: 3,
    title: 'Las Zonas más Prometedoras que Debes Conocer en Miami',
    image: '/blog3.png',
    views: 25,
    comments: 0,
  },
  {
    id: 4,
    title: 'La Inversión Inmobiliaria Clave para 2025',
    image: '/blog4.png',
    views: 30,
    comments: 0,
  },
]

export default function OportunidadUnicaPage() {
  return (
    <div className="pt-24 pb-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="border border-[#e6dac8] shadow-[0_20px_45px_rgba(0,0,0,0.07)]">
          <div className="relative h-[320px] md:h-[420px] w-full">
            <Image
              src="/blog1.png"
              alt="Oportunidad ÚNICA en Florida"
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
                    src="/blog1.png"
                    alt="Yesica Oviedo"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-[#1a1a1a]">Yesica Oviedo</p>
                  <p>13 feb · 2 Min. de lectura</p>
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
                Oportunidad ÚNICA en Florida: Casa a estrenar en Rotonda West
              </h1>

              <p>¿Estás buscando una casa perfecta para vivir en familia, en un entorno sereno y lleno de encanto?</p>

              <p>Aunque tengo muchas propiedades para recomendarte, esta destaca claramente sobre las demás.</p>

              <p>Situada en la hermosa Rotonda West, Florida, esta casa nueva es un auténtico paraíso.</p>

              <p>
                En los próximos minutos, te mostraré todos los detalles que hacen de esta propiedad una oportunidad única e
                inigualable.
              </p>

              <h2 className="text-2xl mt-6 text-[#1a1a1a]">La Ubicación Perfecta</h2>
              <p>
                Ubicada estratégicamente cerca de las playas más impresionantes, campos de golf de primer nivel y vibrantes
                centros comerciales, esta área es ideal para quienes buscan un ambiente familiar.
              </p>
              <p>
                Rotonda West te ofrece todo lo necesario cerca de casa, logrando un perfecto equilibrio entre la tranquilidad y
                la vibrante vida social que caracteriza a Florida.
              </p>

              <h2 className="text-2xl mt-6 text-[#1a1a1a]">Diseño Sofisticado</h2>
              <p>
                Este hogar cuenta con 3 amplias habitaciones, 3 baños completos y un garaje con espacio para 2 vehículos,
                brindándote comodidad y espacio para toda tu familia.
              </p>
              <p>
                Las ventanas y puertas de impacto no solo aportan un diseño moderno, sino que también garantizan la máxima
                seguridad.
              </p>
              <p>
                La cocina, equipada con una isla central y electrodomésticos de alta gama, se convierte en el corazón del hogar,
                ideal para crear recuerdos inolvidables con tus seres queridos.
              </p>
              <p>
                El diseño moderno se evidencia en sus líneas limpias y espacios abiertos, iluminados por la abundante luz natural
                que realza cada detalle contemporáneo.
              </p>

              <h2 className="text-2xl mt-6 text-[#1a1a1a]">Comodidad y Estilo en Un Solo Lugar</h2>
              <p>
                Imagina comenzar el 2025 en un hogar con todo lo que siempre soñaste: funcionalidad, elegancia y comodidad.
              </p>
              <p>
                Es un lugar donde cada día se siente como una nueva oportunidad para disfrutar de la vida. No dejes que esta
                oportunidad pase de largo. Este es el momento de hacer tuyo este increíble hogar y comenzar un nuevo capítulo
                lleno de posibilidades.
              </p>
              <p>
                Escríbeme y juntos haremos que tu próxima etapa sea la más emocionante de todas. Estoy aquí para guiarte en cada
                paso del camino hacia tu nuevo hogar en Rotonda West.
              </p>
              <p>
                Me especializo en brindar el asesoramiento personalizado que necesites para tomar decisiones informadas y
                exitosas.
              </p>
              <p>
                ¿Listo para comenzar? Agenda una consulta gratuita y déjame ayudarte a convertir tus sueños inmobiliarios en
                realidad.
              </p>
              <p>Visita nuestro sitio web para más información y empecemos a construir tu futuro.</p>
              <p>Tu éxito es nuestra prioridad.</p>
              <p>¡Nos vemos la próxima!</p>
              <p className="font-semibold">Yesica Oviedo</p>
            </div>

            <div className="border-t border-[#e6dac8] pt-6 text-gray-600 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <FaEye /> 4 visualizaciones
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
            <Link href="/blog" key={post.id} className="border border-[#e6dac8] hover:-translate-y-1 transition-transform">
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
