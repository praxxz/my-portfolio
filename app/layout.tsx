import type { Metadata } from 'next'
import './globals.css'
import SmoothScroll from './components/SmoothScroll'
import CustomCursor from './components/CustomCursor'

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
