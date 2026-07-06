import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Preloader from '@/components/Preloader'

export const metadata: Metadata = {
  title: 'Portfolio Fikri Rahmansyah',
  description: 'Personal Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>
        <Preloader />
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
