'use client'

import { useParams } from 'next/navigation'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import TeacherCalendar from '@/components/Teacher/TeacherCalendar'

export default function TeacherDetailsPage() {
  const { id } = useParams()
  const teacherId = parseInt(id as string)
  const teacher = useSelector((state: RootState) =>
    state.teacher.teachers.find(t => t.id === teacherId)
  )

  if (!teacher) return <p className=" text-grey-300 p-4">Teacher not found.</p>

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-purple-600">Teacher Details</h1>

      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-purple-400">{teacher.name}</h2>
        <p className="text-gray-700 mb-1"><strong>Subject:</strong> {teacher.subject}</p>
        <p className="text-gray-700 mb-1"><strong>Email:</strong> {teacher.email}</p>
        <p className="text-gray-700 mb-1"><strong>Phone:</strong> {teacher.phone}</p>
        <p className="text-gray-700"><strong>Status:</strong> {teacher.status}</p>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">Schedule</h2>
        <TeacherCalendar schedule={teacher.schedule} />
      </div>
    </div>
  )
}
