import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const PoppinsFont = Poppins({ subsets: ['latin'], weight: '400' , variable: '--font-poppins' })

export const metadata: Metadata = {
  title: 'Ecommerce Project',
  description: 'Created with TypeScript, Next.js, React, TailwindCSS and some things',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={` ${PoppinsFont.variable}  bg-white `}   >{children}</body>
    </html>
  )
}
