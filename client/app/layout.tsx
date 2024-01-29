import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/app/components/Navbar'
import UserProvider from '@/app/providers/UserProvider'

export const metadata: Metadata = {
  title: 'Next Tweet',
  description: 'This is tweet app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // JSX
  return (
    <html lang="ja">
      <body className='flex min-h-screen flex-col p-2'>
        <UserProvider>
          <Navbar />
          <main className="m-10">
            {children}
          </main>
        </UserProvider>
      </body>
    </html>
  )
}
