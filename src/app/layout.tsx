'use client'

import './globals.css'
import { Montserrat } from 'next/font/google'
import { ReactNode, useState } from 'react'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import Sidebar from '@/components/Layout/Sidebar'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-gray-50`}>
        <Provider store={store}>
          <div className="flex min-h-screen">
            {/* Mobile sidebar toggle button */}
            <button
              className="lg:hidden fixed top-4 left-4 z-50 bg-white rounded-full p-2 shadow"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle sidebar"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            {/* Sidebar */}
            <aside
              className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300
                ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:static lg:translate-x-0 lg:w-64`}
            >
              <Sidebar />
            </aside>
            {/* Overlay for mobile when sidebar is open */}
            {sidebarOpen && (
              <div
                className="fixed inset-0 z-30 bg-black bg-opacity-30 lg:hidden"
                onClick={() => setSidebarOpen(false)}
              />
            )}
            {/* Main content */}
            <main className={`flex-1 bg-gray-50 p-6 transition-all duration-300 ${sidebarOpen ? 'blur-sm pointer-events-none select-none' : ''} ml-0 lg:ml-64`}>
              {children}
            </main>
          </div>
        </Provider>
      </body>
    </html>
  )
}