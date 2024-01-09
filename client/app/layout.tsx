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
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
