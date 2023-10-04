import Footer from '@/components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import ModalProvider from '@/providers/ModalProvider'
import ToastProvider from '@/providers/ToastProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Store',
  description: 'Store client',
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
