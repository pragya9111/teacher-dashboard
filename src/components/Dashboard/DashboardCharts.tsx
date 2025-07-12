'use client'

import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, LineChart, Line, CartesianGrid, Legend } from 'recharts'
import { mockTeachers } from '@/data/mockData'

const COLORS = ['#8b5cf6', '#f43f5e']

export default function DashboardCharts() {
  // Use static data from mockTeachers for pie chart
  const activeCount = mockTeachers.filter(t => t.status === 'Active').length
  const inactiveCount = mockTeachers.filter(t => t.status === 'Inactive').length

  const statusData = [
    { name: 'Active', value: activeCount },
    { name: 'Inactive', value: inactiveCount },
  ]

  const data = [
    { name: 'Jan', value: 40 },
    { name: 'Feb', value: 52 },
    { name: 'Mar', value: 48 },
    { name: 'Apr', value: 50 },
    { name: 'May', value: 60 },
    { name: 'June', value: 70 },
    { name: 'July', value: 75 },
    { name: 'Aug', value: 80 },
  ];

  // Static subjects data
  const subjectsMap: Record<string, number> = {}
  mockTeachers.forEach((t) => {
    if (t.subject) {
      subjectsMap[t.subject] = (subjectsMap[t.subject] || 0) + 1
    }
  })

  const subjectData = Object.keys(subjectsMap).map(subject => ({
    subject,
    count: subjectsMap[subject],
  }))

  // Static weekly data
  const weeklyData = [
    { week: 'Week 1', teachers: 2 },
    { week: 'Week 2', teachers: 5 },
    { week: 'Week 3', teachers: 3 },
    { week: 'Week 4', teachers: 4 },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
      {/* Pie Chart */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Teacher Status</h2>
        {statusData.reduce((acc, cur) => acc + cur.value, 0) === 0 ? (
          <p className="text-gray-500">No data available</p>
        ) : (
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                dataKey="value"
                data={statusData}
                outerRadius={80}
                label
              >
                {statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* Bar Chart */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Teachers per Subject</h2>
        {subjectData.length === 0 ? (
          <p className="text-gray-500">No data available</p>
        ) : (
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={subjectData}>
              <XAxis dataKey="subject" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="count" fill="#8b5cf6" />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* Line Chart */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Weekly Added Teachers</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={weeklyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="teachers" stroke="#f43f5e" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-medium mb-4">Teacher Performance</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Bar dataKey="value" fill="#4f46e5" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}