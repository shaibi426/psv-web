"use client"
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/header'
import { usePathname,useRouter } from 'next/navigation' 
import AuthProvider from './components/authprovider'

const inter = Inter({ subsets: ['latin'] })




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
 
  const pathname = usePathname()


  const showHeader = pathname === '/auth/signIn' || pathname === '/auth/signOut' ? false : true;
  // return (
  //   <html lang="en">
      
  //     <body className={inter.className}>
  //       <AuthProvider>
  //     {/* {showHeader && <Header />} */}
  //       {children}
  //       </AuthProvider>
  //       </body>
  //   </html>
  // )

  return (
    <html lang="en">
      <body className={inter.className}>
      <AuthProvider>
        <main>
        {showHeader && <Header />}
        {children}
        </main>
      </AuthProvider>
        </body>
    </html>
  )
}
