'use client'

import './globals.css'
import { Montserrat } from 'next/font/google'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import Sidebar from '@/components/Layout/Sidebar';

const motserrate = Montserrat({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${motserrate.className} bg-gray-50`}>
        <Provider store={store}>
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 bg-gray-50 p-6">{children}</main>
          </div>
        </Provider>
      </body>
    </html>
  )
}
