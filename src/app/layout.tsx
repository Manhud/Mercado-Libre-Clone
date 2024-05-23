import React from 'react'
import './globals.scss'
import { SearchBox } from '@/components/layout/SearchBox';
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
    <html lang='en' className={montserrat.className}>
      <body>
        <>
          <SearchBox/>
          {children}
        </>
      </body>
    </html>
  )
}
