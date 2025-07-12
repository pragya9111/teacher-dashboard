'use client'

import { Teacher } from '@/types/teacher'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material'
import { FaTrash, FaEdit, FaEye } from 'react-icons/fa'
import Link from 'next/link'

interface Props {
  teachers: Teacher[]
  onDelete: (id: number) => void
  onEdit: (teacher: Teacher) => void
}

export default function TeacherTable({ teachers, onDelete, onEdit }: Props) {
  return (
    <TableContainer component={Paper} className="shadow rounded-lg">
      <Table>
        <TableHead className="bg-purple-600">
          <TableRow>
            <TableCell sx={{ color: "white" }}>Name</TableCell>
            <TableCell sx={{ color: "white" }}>Subject</TableCell>
            <TableCell sx={{ color: "white" }}>Email</TableCell>
            <TableCell sx={{ color: "white" }}>Phone</TableCell>
            <TableCell sx={{ color: "white" }}>Status</TableCell>
            <TableCell sx={{ color: "white" }}>Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {teachers.map((teacher) => (
            <TableRow key={teacher.id} hover>
              <TableCell>{teacher.name}</TableCell>
              <TableCell>{teacher.subject}</TableCell>
              <TableCell>{teacher.email}</TableCell>
              <TableCell>{teacher.phone}</TableCell>
              <TableCell>{teacher.status}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  {/* View Action */}
                  <Link href={`/teachers/${teacher.id}`}>
                    <IconButton color="primary">
                      <FaEye />
                    </IconButton>
                  </Link>

                  {/* Edit Action */}
                  <IconButton color="secondary" onClick={() => onEdit(teacher)}>
                    <FaEdit />
                  </IconButton>

                  {/* Delete Action */}
                  <IconButton color="error" onClick={() => onDelete(teacher.id)}>
                    <FaTrash />
                  </IconButton>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
