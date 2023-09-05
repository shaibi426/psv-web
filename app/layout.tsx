"use client"
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/header'
import { usePathname,useRouter } from 'next/navigation' 

const inter = Inter({ subsets: ['latin'] })




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
 
  const pathname = usePathname()


  const showHeader = pathname === '/' ? false : true;
  return (
    <html lang="en">
      
      <body className={inter.className}>
      {showHeader && <Header />}
        {children}
        </body>
    </html>
  )
}
