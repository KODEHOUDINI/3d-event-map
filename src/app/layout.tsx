import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: '3D Event Map',
  description: '3D Event Map',
  icons: {
    icon: '/favicon.png'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='h-screen w-screen'>{children}</body>
    </html>
  )
}
