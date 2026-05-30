import type { Metadata } from 'next'
import { Inter, Oswald, Cormorant_Garamond, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import SmoothScroll from './components/SmoothScroll'
import CustomCursor from './components/CustomCursor'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Prathamesh Tikone — Developer & Builder',
  description: 'Full-Stack Web & App Developer, AI-based product builder from Thane, Maharashtra.',
  keywords: ['Prathamesh Tikone', 'Full Stack Developer', 'MERN Stack', 'Flutter', 'AI Developer', 'Thane'],
  authors: [{ name: 'Prathamesh Tikone' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} ${cormorant.variable} ${jetbrains.variable}`}>
      <body className="antialiased">
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
