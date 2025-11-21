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

export default function ImpactoDisenoPage() {
  return (
    <div className="pt-24 pb-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="border border-[#e6dac8] shadow-[0_20px_45px_rgba(0,0,0,0.07)]">
          <div className="relative h-[320px] md:h-[420px] w-full">
            <Image
              src="/blog2.png"
              alt="El Impacto del Diseño de Interiores en el Valor de tu Hogar"
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
                    src="/blog2.png"
                    alt="Yesica Oviedo"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-[#1a1a1a]">Yesica Oviedo</p>
                  <p>4 feb · 3 Min. de lectura</p>
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
                El Impacto del Diseño de Interiores en el Valor de tu Hogar
              </h1>

              <p>
                ¿Sabes ese momento cuando entras a una casa y sentís que 'es la indicada'? No es casualidad. Durante años he
                descubierto que el éxito en la venta de una propiedad va más allá de los números.
              </p>

              <p>
                Sí, la ubicación privilegiada y los metros cuadrados son fundamentales. Pero existe un elemento que marca la
                diferencia entre una propiedad más y una que enamora a primera vista: el diseño de interiores.
              </p>

              <p>
                No se trata solo de embellecer espacios, sino de crear un ambiente que resuene con los potenciales compradores o
                inquilinos, aumentando así el valor de mercado de tu hogar.
              </p>

              <p>
                A continuación, profundizaremos en cómo un buen diseño puede transformar no solo la estética, sino también el valor
                económico de tu propiedad.
              </p>

              <h2 className="text-2xl mt-6 text-[#1a1a1a]">Primera impresión: el poder de la estética</h2>
              <p>
                Los primeros siete segundos son oro. Es todo lo que tienes para cautivar a un potencial comprador, y el diseño de
                interiores es tu mejor herramienta.
              </p>
              <p>
                Un diseño de interiores bien ejecutado puede hacer que los espacios pequeños parezcan más grandes y los espacios
                grandes más acogedores.
              </p>
              <p>
                Colores adecuados, muebles bien elegidos y una disposición estratégica pueden transformar un espacio ordinario en
                un hogar deseable. Este atractivo visual inicial es clave para captar el interés del comprador o inquilino desde el
                primer momento.
              </p>

              <h2 className="text-2xl mt-6 text-[#1a1a1a]">Funcionalidad y uso del espacio</h2>
              <p>
                El diseño de interiores no solo se centra en la estética, sino también en la funcionalidad. Una distribución
                inteligente del espacio maximiza el uso de cada metro cuadrado, lo que es particularmente importante en propiedades
                más pequeñas.
              </p>
              <p>
                Cuando los compradores descubren cómo un espacio bien diseñado puede simplificar su vida diaria - desde un vestidor
                que organiza con elegancia hasta un rincón de home office que inspira productividad - no solo ven una propiedad
                atractiva, ven un estilo de vida superior que justifica una mayor inversión.
              </p>

              <h2 className="text-2xl mt-6 text-[#1a1a1a]">Valor emocional</h2>
              <p>
                El diseño bien pensado también toca el aspecto emocional de los compradores.
              </p>
              <p>
                La creación de ambientes acogedores y personalizados puede evocar sensaciones de bienestar y pertenencia, lo que
                puede motivar a los compradores a elegir tu propiedad sobre otras opciones en el mercado.
              </p>
              <p>
                Utilizar elementos de diseño que conecten emocionalmente con el público objetivo puede ser la clave para cerrar una
                venta.
              </p>
              <p>
                Cuando un espacio resuena con los sueños y aspiraciones de tus compradores potenciales, no están simplemente
                adquiriendo una propiedad - están eligiendo el lugar perfecto para escribir el próximo capítulo de sus vidas. Y esa
                conexión emocional... no tiene precio.
              </p>

              <h2 className="text-2xl mt-6 text-[#1a1a1a]">Actualización y modernización</h2>
              <p>
                Las tendencias de diseño evolucionan, y un hogar que está actualizado con las últimas tendencias de diseño puede
                diferenciarse en el mercado.
              </p>
              <p>Los compradores a menudo buscan propiedades que no requieren renovaciones inmediatas.</p>
              <p>
                Inversiones en mejoras modernas, como cocinas equipadas con tecnología de punta o baños renovados, pueden justificar
                un precio de venta más alto.
              </p>

              <h2 className="text-2xl mt-6 text-[#1a1a1a]">Impacto en la reventa</h2>
              <p>
                Finalmente, un buen diseño de interiores puede facilitar la reventa de la propiedad en el futuro. Un hogar bien
                diseñado y bien mantenido no solo se venderá más rápido, sino que también tendrá la capacidad de retener o incluso
                aumentar su valor a lo largo del tiempo.
              </p>
              <p>El diseño de interiores es una inversión estratégica que va más allá de la decoración superficial.</p>
              <p>
                Al aumentar la estética, funcionalidad y sostenibilidad de un hogar, se puede influir significativamente en su
                valor de mercado.
              </p>
              <p>
                Al considerar renovaciones o mejoras en el diseño de interiores, propietarios e inversores no solo están mejorando
                su calidad de vida, sino también protegiendo y aumentando su inversión.
              </p>
              <p>
                Existen numerosas opciones y una gran cantidad de información por descubrir. Por eso estoy acá, para acompañarte a
                lo largo de este proceso y asegurarnos de que sea lo más sencillo y libre de estrés posible.
              </p>
              <p>Me especializo en brindar el asesoramiento personalizado que necesites para tomar decisiones informadas y exitosas.</p>
              <p>¿Listo para comenzar? Agenda una consulta gratuita y déjame ayudarte a convertir tus sueños inmobiliarios en realidad.</p>
              <p>Visita nuestro sitio web para más información y empecemos a construir tu futuro.</p>
              <p>Tu éxito es nuestra prioridad.</p>
              <p>¡Nos vemos la próxima!</p>
              <p className="font-semibold">Yesica Oviedo</p>
            </div>

            <div className="border-t border-[#e6dac8] pt-6 text-gray-600 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <FaEye /> 7 visualizaciones
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
