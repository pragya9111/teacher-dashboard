'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaChalkboardTeacher, FaHome } from 'react-icons/fa'

export default function Sidebar() {
  const pathname = usePathname()

  const links = [
    { href: '/dashboard', label: 'Dashboard', icon: <FaHome /> },
    { href: '/teachers', label: 'Teachers', icon: <FaChalkboardTeacher /> },
  ]

  return (
    <div className="w-64 bg-purple-700 text-white flex flex-col">
      <div className="text-2xl font-bold p-6">TeacherMS</div>
      <nav className="flex-1">
        {links.map(link => (
          <Link key={link.href} href={link.href}>
            <div
              className={`flex items-center space-x-3 px-6 py-3 hover:bg-purple-600 cursor-pointer ${pathname === link.href ? 'bg-purple-800' : ''
                }`}
            >
              {link.icon}
              <span>{link.label}</span>
            </div>
          </Link>
        ))}
      </nav>
    </div>
  )
}
