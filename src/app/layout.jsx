"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className="scroll-smooth overflow-x-visible xs:overflow-x-hidden">
      <body className={inter.className + "overflow-x-visible xs:overflow-x-hidden"}><Navbar className={"z-10"}/>{children}<Footer cls="bg-zinc-900 px-3"/></body>
    </html>
  )
}
