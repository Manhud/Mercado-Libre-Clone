import React from 'react'
import './globals.scss'
import { NavBar } from '@/components/layout/NavBar';
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '400', '300']
});

export default async function RootLayout ({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <>
          <NavBar/>
          {children}
        </>
      </body>
    </html>
  )
}
