import type { Metadata } from 'next'
import './globals.css'

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
        {children}
      </body>
    </html>
  )
}
