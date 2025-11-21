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
    id: 3,
    title: 'Las Zonas más Prometedoras que Debes Conocer en Miami',
    image: '/blog3.png',
    views: 25,
    comments: 0,
    href: '/blog/zonas-prometedoras',
  },
]

export default function Inversion2025Page() {
  return (
    <div className="pt-24 pb-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="border border-[#e6dac8] shadow-[0_20px_45px_rgba(0,0,0,0.07)]">
          <div className="relative h-[320px] md:h-[420px] w-full">
            <Image
              src="/blog4.png"
              alt="La Inversión Inmobiliaria Clave para 2025"
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
                    src="/blog4.png"
                    alt="Yesica Oviedo"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-[#1a1a1a]">Yesica Oviedo</p>
                  <p>9 ene · 2 Min. de lectura</p>
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
                La Inversión Inmobiliaria Clave para 2025
              </h1>

              <p>
                Durante una visita a Argentina, mientras disfrutaba de un café con una amiga, surgió una pregunta que suelo escuchar
                con frecuencia:
              </p>

              <p>"Quiero invertir en algo significativo como meta para este 2025, ¿Qué me recomendarías?"</p>

              <p>"Sin lugar a dudas, Miami."</p>

              <p>En los próximos minutos, te explico por qué esta ciudad tiene que ser una de tus principales prioridades de inversión este año.</p>

              <h2 className="text-2xl mt-6 text-[#1a1a1a]">Por qué Invertir en Miami es tu Mejor Opción</h2>
              <p>
                Más allá de lo hermosa que es la ciudad, sus playas y su estilo de vida único en el mundo, cuando hablamos de
                inversiones, lo que realmente importa es proteger y hacer crecer nuestro capital.
              </p>
              <p>
                Invertir en Miami no solo te ofrece un pedacito de este estilo de vida, sino que también te da la oportunidad de
                mover tu economía en dólares, asegurando una estabilidad financiera que es difícil de encontrar en otros lugares.
              </p>
              <p>Estados Unidos proporciona un marco legal sólido y seguridad jurídica, ideal para inversores extranjeros.</p>
              <p>
                Además, si hablamos de oportunidades, Miami es un destino turístico y de negocios, lo que garantiza una demanda
                constante de inquilinos y compradores.
              </p>

              <h2 className="text-2xl mt-6 text-[#1a1a1a]">Oportunidades Inmobiliarias Únicas a Nivel Mundial</h2>
              <p>
                Esta ciudad es reconocida mundialmente como un destino turístico y un núcleo clave de negocios internacionales, lo
                que alimenta una economía local y constante crecimiento.
              </p>
              <p>
                En términos fiscales, Miami se destaca gracias a las políticas amigables de Florida, que incluyen la ausencia de
                impuestos estatales sobre la renta, junto con impuestos a la propiedad relativamente bajos, lo cual es EXCELENTE para
                los inversores que buscan maximizar sus rendimientos.
              </p>
              <p>
                El mercado inmobiliario acá es líder en Florida, con un dinamismo en la construcción de nuevas propiedades que
                asegura una variedad de opciones para todos los gustos y presupuestos.
              </p>
              <p>
                Estos factores combinados hacen de Miami un destino ideal para inversiones inmobiliarias, donde el potencial de
                crecimiento y la estabilidad están en perfecta armonía.
              </p>

              <h2 className="text-2xl mt-6 text-[#1a1a1a]">¿Y Ahora, Cómo Comenzar a Invertir?</h2>
              <p>
                Existen numerosas opciones y una gran cantidad de información por descubrir. Por eso estoy aquí, para acompañarte a
                lo largo de este proceso y asegurarnos de que sea lo más sencillo y libre de estrés posible.
              </p>
              <p>
                Me especializo en brindar el asesoramiento personalizado que necesites para tomar decisiones informadas y exitosas.
                Nuestro equipo de expertos está listo para simplificar cada paso del proceso, asegurando que tu inversión no solo sea
                segura, sino también rentable.
              </p>
              <p>¿Listo para comenzar? Agenda una consulta gratuita y déjame ayudarte a convertir tus sueños inmobiliarios en realidad.</p>
              <p>Visita nuestro sitio web para más información y empecemos a construir tu futuro.</p>
              <p>Tu éxito es nuestra prioridad.</p>
              <p>¡Nos vemos la próxima!</p>
              <p className="font-semibold">Yesica Oviedo</p>
            </div>

            <div className="border-t border-[#e6dac8] pt-6 text-gray-600 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <FaEye /> 30 visualizaciones
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
