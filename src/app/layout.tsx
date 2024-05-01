import '@/styles/globals.scss'
import 'react-toastify/dist/ReactToastify.css'

import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Navbar } from '@/components/navbar/navbar.component'
import Providers from '@/providers/Providers'
import { ToastContainer } from 'react-toastify'

const montSerrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'MKS sistemas',
  description: 'Store ',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className={`${montSerrat.className}`}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick={true}
          pauseOnHover={false}
          draggable={true}
          theme="dark"
        />
      </body>
    </html>
  )
}
