import './globals.css'
import { Inter } from 'next/font/google'
import "tw-elements-react/dist/css/tw-elements-react.min.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lukasz26671',
  description: 'Lukasz26671 website, made using NextJS & Tailwind',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className="scroll-smooth overflow-x-visible xs:overflow-x-hidden">
      
      <body className={inter.className + "overflow-x-visible xs:overflow-x-hidden"}>{children}</body>
    </html>
  )
}
