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
    href: '/blog/inversion-2025',
  },
]

export default function RazonesFloridaPage() {
  return (
    <div className="pt-24 pb-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="border border-[#e6dac8] shadow-[0_20px_45px_rgba(0,0,0,0.07)]">
          <div className="relative h-[320px] md:h-[420px] w-full">
            <Image
              src="/blog5.png"
              alt="5 Razones Para Invertir en Florida"
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
                    src="/blog5.png"
                    alt="Yesica Oviedo"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-[#1a1a1a]">Yesica Oviedo</p>
                  <p>8 dic 2024 · 3 Min. de lectura</p>
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
                5 Razones Para Invertir en Florida
              </h1>

              <p>¿Alguna vez te preguntaste dónde podrías invertir tu dinero de forma estratégica?</p>

              <p>
                Déjame contarte algo: Florida es el lugar perfecto para hacerlo, y no lo digo solo porque amo este estado, sino
                porque los números y las tendencias lo respaldan.
              </p>

              <p>Acá te presento 5 razones para invertir en Florida.</p>

              <h2 className="text-2xl mt-6 text-[#1a1a1a]">Economía a Prueba de Todo</h2>
              <p>Primero, hablemos de la economía.</p>
              <p>Aunque el resto del país o incluso el mundo enfrenten desafíos, acá parece que las cosas siempre van como corresponde.</p>
              <p>
                Esto se debe en parte a que Florida atrae empresas tecnológicas, financieras y de salud que no paran de expandirse.
                Además, su ambiente fiscal es amigable y hace que las personas y los negocios quieran quedarse y crecer acá.
              </p>
              <p>Por si fuera poco, más de 1,000 personas se mudan a Florida cada día.</p>
              <p>Sí, ¡cada día! Esto crea una base sólida para el crecimiento económico y asegura que las inversiones sean más seguras.</p>

              <h2 className="text-2xl mt-6 text-[#1a1a1a]">Un sector inmobiliario en constante crecimiento</h2>
              <p>Hablemos de algo emocionante: el mercado inmobiliario.</p>
              <p>
                El crecimiento acá no es solo una moda pasajera; es una tendencia que parece no tener límites. Desde las playas
                soleadas hasta las ciudades llenas de energía como Miami, Fort Lauderdale y Palm Beach, la demanda de propiedades
                sigue siendo impresionante.
              </p>
              <p>
                Y lo mejor es que no solo las casas y departamentos tradicionales están en auge, sino también las propiedades para
                alquileres vacacionales y de lujo.
              </p>
              <p>¿Sabías que se espera un crecimiento sostenido en el mercado inmobiliario hasta 2025 y más?</p>
              <p>
                La llegada constante de nuevas empresas internacionales y la migración de familias en busca de una mejor calidad de
                vida son factores clave que impulsan esta demanda.
              </p>

              <h2 className="text-2xl mt-6 text-[#1a1a1a]">Protege tu Dinero y Gana Más</h2>
              <p>
                Cuando compras una propiedad en Florida, no solo estás asegurando tu inversión, sino que también estás incrementando
                su valor con el tiempo.
              </p>
              <p>Es como tener un activo que no pierde fuerza, incluso en tiempos inciertos.</p>
              <p>
                Además, con ciudades como Miami y Orlando siempre llenas de turistas, la demanda de alquileres a corto y largo plazo
                está por las nubes.
              </p>
              <p>Así que, además de mantener el valor de tu propiedad, podés generar ingresos constantes.</p>

              <h2 className="text-2xl mt-6 text-[#1a1a1a]">Calidad de Vida</h2>
              <p>
                Florida no es solo un lugar para visitar, es un lugar para quedarse, disfrutar y prosperar. Este estado ofrece una
                calidad de vida difícil de igualar. Vivir acá es como estar en un eterno verano.
              </p>
              <p>
                No es de extrañar que tantas familias y profesionales elijan Florida para empezar un nuevo capítulo en sus vidas…
              </p>
              <p>
                La posibilidad de combinar trabajo, ocio y tiempo de calidad con los tuyos hace que vivir acá sea tan deseable como
                gratificante.
              </p>
              <p>Pero no solo se trata de disfrutar del presente; el futuro también promete grandes cosas.</p>

              <h2 className="text-2xl mt-6 text-[#1a1a1a]">Proyecciones Positivas para 2025</h2>
              <p>Ahora, pensemos en el futuro.</p>
              <p>
                Todo apunta a que Florida seguirá siendo un imán para las inversiones. Con una población en crecimiento, tasas de
                interés relativamente bajas y un flujo constante de nuevos negocios y oportunidades, el panorama luce brillante.
              </p>
              <p>
                Ciudades como Hollywood, Palm Beach y Weston están mostrando un crecimiento impresionante, lo que significa que hay
                muchas opciones para diversificar tus inversiones en diferentes regiones del estado.
              </p>

              <h2 className="text-2xl mt-6 text-[#1a1a1a]">¿Qué opinas?</h2>
              <p>Invertir en Florida no es solo una decisión financiera; es un paso hacia un futuro más seguro y prometedor.</p>
              <p>Si estás listo para explorar las oportunidades que te esperan, contáctame. Hablemos hoy mismo y empecemos a planificar tu próximo gran movimiento.</p>
              <p>¡Hablamos pronto!</p>
              <p className="font-semibold">Yesica</p>
            </div>

            <div className="border-t border-[#e6dac8] pt-6 text-gray-600 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <FaEye /> 12 visualizaciones
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
