'use client'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/redux/store'
import {
  fetchTeachers,
  deleteTeacher,
  addTeacher,
  editTeacher as editTeacherAction
} from '@/redux/teacherSlice'
import TeacherForm from '@/components/Teacher/TeacherForm'
import TeacherTable from '@/components/Teacher/TeacherTable'
import { TextField, Button, InputAdornment } from '@mui/material'
import { CgSearch } from "react-icons/cg";
import { Teacher } from '@/types/teacher'

export default function TeachersPage() {
  const dispatch = useDispatch<AppDispatch>()
  const { teachers, loading } = useSelector((state: RootState) => state.teacher)
  const [search, setSearch] = useState('')
  const [open, setOpen] = useState(false)
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | undefined>(undefined)

  useEffect(() => {
    dispatch(fetchTeachers())
  }, [dispatch])

  const filteredTeachers = teachers.filter(t =>
    t.name.toLowerCase().includes(search.toLowerCase()) ||
    t.subject.toLowerCase().includes(search.toLowerCase())
  )

  const handleAddEdit = (teacher: Teacher) => {
    if (selectedTeacher) {
      dispatch(editTeacherAction(teacher))
    } else {
      dispatch(addTeacher(teacher))
    }
    setSelectedTeacher(undefined)
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-purple-600">Teachers</h1>

      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0">
        <TextField
          variant="outlined"
          placeholder="Search by name or subject"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CgSearch />
              </InputAdornment>
            ),
          }}
          className="w-full sm:w-1/2 bg-white rounded"
        />

        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setSelectedTeacher(undefined)
            setOpen(true)
          }}
        >
          Add Teacher
        </Button>
      </div>

      <TeacherForm
        open={open}
        onClose={() => {
          setOpen(false)
          setSelectedTeacher(undefined)
        }}
        onSave={handleAddEdit}
        teacher={selectedTeacher}
      />

      {loading ? (
        <p>Loading...</p>
      ) : filteredTeachers.length === 0 ? (
        <p>No teachers found.</p>
      ) : (
        <TeacherTable
          teachers={filteredTeachers}
          onDelete={(id) => dispatch(deleteTeacher(id))}
          onEdit={(teacher) => {
            setSelectedTeacher(teacher)
            setOpen(true)
          }}
        />
      )}
    </div>
  )
}
