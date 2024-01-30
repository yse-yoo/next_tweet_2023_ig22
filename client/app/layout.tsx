import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/app/components/Navbar'
// import UserProvider from '@/app/providers/UserProvider'
import { NextAuthProvider } from '@/app/providers/NextAuthProvider'

export const metadata: Metadata = {
  title: 'Next Tweet',
  description: 'This is tweet app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className='flex min-h-screen flex-col p-2'>
        <NextAuthProvider>
          <Navbar />
          <main className="m-10">
            {children}
          </main>
        </NextAuthProvider>
      </body>
    </html>
  )
}
