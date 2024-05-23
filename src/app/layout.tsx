import React from 'react'
import './globals.scss'


export default async function RootLayout ({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <>
            {children}
        </>
      </body>
    </html>
  )
}
