import { Teacher } from "@/types/teacher";

export const mockTeachers: Teacher[] = [
  {
    id: 1,
    name: 'Alice Johnson',
    subject: 'Mathematics',
    email: 'alice.johnson@example.com',
    phone: '9876543210',
    status: 'Active',
    schedule: [
      {
        id: 's1',
        title: 'Algebra Class',
        start: '2025-07-12T09:00:00',
        end: '2025-07-12T10:00:00'
      },
      {
        id: 's2',
        title: 'Calculus Review',
        start: '2025-07-13T11:00:00',
        end: '2025-07-13T12:00:00'
      }
    ]
  },
  {
    id: 2,
    name: 'Brian Smith',
    subject: 'Physics',
    email: 'brian.smith@example.com',
    phone: '8765432109',
    status: 'Inactive',
    schedule: [
      {
        id: 's3',
        title: 'Quantum Mechanics',
        start: '2025-07-14T13:00:00',
        end: '2025-07-14T14:30:00'
      }
    ]
  },
  {
    id: 3,
    name: 'Catherine Lee',
    subject: 'Chemistry',
    email: 'catherine.lee@example.com',
    phone: '7654321098',
    status: 'Active',
    schedule: [
      {
        id: 's4',
        title: 'Organic Chemistry',
        start: '2025-07-15T10:00:00',
        end: '2025-07-15T11:30:00'
      },
      {
        id: 's5',
        title: 'Lab Safety Training',
        start: '2025-07-16T09:00:00',
        end: '2025-07-16T10:00:00'
      }
    ]
  },
  {
    id: 4,
    name: 'David Kim',
    subject: 'English',
    email: 'david.kim@example.com',
    phone: '6543210987',
    status: 'Active',
    schedule: [
      {
        id: 's6',
        title: 'Literature Discussion',
        start: '2025-07-17T14:00:00',
        end: '2025-07-17T15:00:00'
      }
    ]
  },
  {
    id: 5,
    name: 'Emily Turner',
    subject: 'History',
    email: 'emily.turner@example.com',
    phone: '5432109876',
    status: 'Inactive',
    schedule: [
      {
        id: 's7',
        title: 'World War II Overview',
        start: '2025-07-18T11:00:00',
        end: '2025-07-18T12:30:00'
      }
    ]
  }
];