import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Yesica Oviedo - Real Estate en Florida',
  description: 'Maximizamos el potencial de tus inversiones de manera segura y eficaz, convirtiendo cada oportunidad en realidad. Real Estate en Miami, Fort Lauderdale y Palm Beach.',
  keywords: 'real estate, florida, miami, inversiones inmobiliarias, propiedades, yesica oviedo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
