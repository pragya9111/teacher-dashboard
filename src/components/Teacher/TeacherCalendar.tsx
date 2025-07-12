'use client'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { Schedule } from '@/types/teacher'

interface Props {
  schedule: Schedule[]
}

export default function TeacherCalendar({ schedule }: Props) {
  return (
    <div className="bg-whitesmoke p-4 rounded-lg shadow">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        events={schedule.map(event => ({
          ...event,
          color: '#8b5cf6',
          textColor: 'white',
        }))}
        height="auto"
      />
    </div>
  )
}
