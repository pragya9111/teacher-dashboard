'use client'

import { FaChalkboardTeacher, FaUserCheck, FaUserTimes } from 'react-icons/fa'

export default function StatsOverview() {
  const stats = [
    {
      id: 1,
      name: 'Total Teachers',
      value: 24,
      icon: <FaChalkboardTeacher size={24} />,
      bg: 'bg-purple-100',
      iconBg: 'bg-purple-500',
    },
    {
      id: 2,
      name: 'Active Teachers',
      value: 18,
      icon: <FaUserCheck size={24} />,
      bg: 'bg-green-100',
      iconBg: 'bg-green-500',
    },
    {
      id: 3,
      name: 'Inactive Teachers',
      value: 6,
      icon: <FaUserTimes size={24} />,
      bg: 'bg-red-100',
      iconBg: 'bg-red-500',
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`rounded-xl p-5 shadow hover:shadow-md transition border ${stat.bg}`}
        >
          <div className="flex items-center space-x-4">
            <div
              className={`p-3 rounded-full text-white ${stat.iconBg}`}
            >
              {stat.icon}
            </div>
            <div>
              <p className="text-gray-600">{stat.name}</p>
              <p className="text-2xl font-bold text-stone-400">{stat.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
