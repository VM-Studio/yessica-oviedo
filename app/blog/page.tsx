import Image from 'next/image'
import Link from 'next/link'
import { FaRegHeart } from 'react-icons/fa'

const blogPosts = [
  {
    id: 1,
    title: 'Oportunidad ÚNICA en Florida: Casa a estrenar en Rotonda West',
    excerpt: '¿Estás buscando una casa perfecta para vivir en familia, en un entorno sereno y lleno de encanto?',
    date: '13 feb',
    readTime: '2 Min. de lectura',
    views: 2,
    comments: 0,
    image: '/blog1.png',
    website: 'www.yesicaoviedo.com',
    href: '/blog/oportunidad-unica',
  },
  {
    id: 2,
    title: 'El Impacto del Diseño de Interiores en el Valor de tu Hogar',
    excerpt:
      'Los primeros siete segundos son oro. Es todo lo que tienes para cautivar a un potencial comprador, y el diseño de interiores es tu mejor herramienta.',
    date: '4 feb',
    readTime: '3 Min. de lectura',
    views: 7,
    comments: 0,
    image: '/blog2.png',
    href: '/blog/impacto-diseno',
  },
  {
    id: 3,
    title: 'Las Zonas más Prometedoras que Debes Conocer en Miami',
    excerpt:
      'Cada una de estas zonas tiene sus características únicas, y la decisión final dependerá de tu estrategia de inversión personal.',
    date: '15 ene',
    readTime: '2 Min. de lectura',
    views: 25,
    comments: 0,
    image: '/blog3.png',
    updated: 'Actualizado: 16 ene',
    href: '/blog/zonas-prometedoras',
  },
  {
    id: 4,
    title: 'La Inversión Inmobiliaria Clave para 2025',
    excerpt: '"Quiero invertir en algo significativo como meta para este 2025, ¿Qué me recomendarías?"',
    date: '9 ene',
    readTime: '2 Min. de lectura',
    views: 30,
    comments: 0,
    image: '/blog4.png',
    href: '/blog/inversion-2025',
  },
  {
    id: 5,
    title: '5 Razones Para Invertir en Florida',
    excerpt:
      '¿Alguna vez te preguntaste dónde podrías invertir tu dinero de forma estratégica? Acá te presento 5 razones para invertir en Florida.',
    date: '8 dic 2024',
    readTime: '3 Min. de lectura',
    views: 12,
    comments: 0,
    image: '/blog5.png',
    href: '/blog/razones-florida',
  },
]

export default function BlogPage() {
  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.35em] text-[#8b7355] mb-4 font-serif">Insights & Tips</p>
          <h1 className="text-4xl md:text-5xl font-serif text-[#1a1a1a]">
            Blog Real Estate
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mt-4 font-serif">
            Artículos, consejos y noticias sobre el mercado inmobiliario en Florida.
          </p>
        </div>

        <div className="space-y-10">
          {blogPosts.map((post) => (
            <Link
              href={post.href ?? '#'}
              key={post.id}
              className="block group"
            >
              <article className="flex flex-col lg:flex-row border border-[#eadfce] bg-white shadow-[0_15px_35px_rgba(0,0,0,0.05)] overflow-hidden">
                <div className="lg:w-1/2 relative min-h-[260px]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    priority={post.id === 1}
                    unoptimized
                  />
                  {post.website && (
                    <div className="absolute bottom-4 left-4 bg-white/85 px-4 py-1 text-sm font-serif tracking-wide text-[#1a1a1a] shadow">
                      {post.website}
                    </div>
                  )}
                </div>

                <div className="lg:w-1/2 p-6 lg:p-10 flex flex-col gap-4 font-serif">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-10 h-10 rounded-full bg-[#eee9e1] flex items-center justify-center text-xs tracking-[0.2em] uppercase">
                      YO
                    </div>
                    <div>
                      <p className="text-[#1a1a1a] font-semibold">Yesica Oviedo</p>
                      <p>{post.date} · {post.readTime}</p>
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl text-[#1a1a1a] leading-snug group-hover:text-[#8b7355] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-700">
                    {post.excerpt}
                  </p>
                  {post.updated && (
                    <p className="text-sm text-gray-500">{post.updated}</p>
                  )}

                  <div className="mt-auto border-t border-[#eadfce] pt-4 flex items-center justify-between text-sm text-gray-500">
                    <div className="flex gap-6">
                      <span>{post.views} visualizaciones</span>
                      <span>{post.comments} comentarios</span>
                    </div>
                    <FaRegHeart className="text-[#d9a9a9] text-xl" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
