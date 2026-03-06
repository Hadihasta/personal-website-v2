import Navbar from '@/components/global/Navbar'
import type { Metadata } from 'next'
import { Rowdies, Roboto_Slab, Staatliches } from 'next/font/google'
import '@/style/globals.css'

const rowdies = Rowdies({
  subsets: ['latin'],
  variable: '--font-rowdies',
  weight: ['400', '700'],
})

const staatliches = Staatliches({
  subsets: ['latin'],
  variable: '--font-staatliches',
  weight: '400',
})

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  variable: '--font-robotoslab',
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Hijri Hadi',
  description: 'An online blog and portofolio By hadi',
   icons: {
    icon: '/asset/logoHadi.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={` ${rowdies.variable}  ${staatliches.variable} ${robotoSlab.variable} antialiased bg-linear-[171deg] from-blueDark to-muteGrey min-h-screen cursor-default `}
      >
      <Navbar />
        {children}
      </body>
    </html>
  )
}
