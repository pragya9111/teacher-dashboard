'use client'

import { useState, useEffect } from 'react'
import { Modal, Box, TextField, Button, MenuItem } from '@mui/material'
import { Teacher } from '@/types/teacher'

interface Props {
  open: boolean
  onClose: () => void
  onSave: (teacher: Teacher) => void
  teacher?: Teacher
}

export default function TeacherForm({ open, onClose, onSave, teacher }: Props) {
  const [formData, setFormData] = useState<Teacher>({
    id: Date.now(),
    name: '',
    subject: '',
    email: '',
    phone: '',
    status: 'Active',
    schedule: [],
  })

  // ✅ Reset formData when modal opens or teacher changes
  useEffect(() => {
    if (teacher) {
      setFormData(teacher)
    } else {
      setFormData({
        id: Date.now(),
        name: '',
        subject: '',
        email: '',
        phone: '',
        status: 'Active',
        schedule: [],
      })
    }
  }, [teacher, open]) // include open to reset when adding

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    onSave(formData)
    onClose()
  }

  return (
    <Modal open={open} onClose={onClose}>
      <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-lg w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold">{teacher ? 'Edit' : 'Add'} Teacher</h2>
        <TextField label="Name" name="name" value={formData.name} onChange={handleChange} fullWidth sx={{ marginTop: 2 }} />
        <TextField label="Subject" name="subject" value={formData.subject} onChange={handleChange} fullWidth sx={{ marginTop: 2 }} />
        <TextField label="Email" name="email" value={formData.email} onChange={handleChange} fullWidth sx={{ marginTop: 2 }} />
        <TextField label="Phone" name="phone" value={formData.phone} onChange={handleChange} fullWidth sx={{ marginTop: 2 }} />
        <TextField
          select
          label="Status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          fullWidth
          sx={{ marginTop: 2 }}
        >
          <MenuItem value="Active">Active</MenuItem>
          <MenuItem value="Inactive">Inactive</MenuItem>
        </TextField>
        <Button variant="contained" color="primary" onClick={handleSubmit} fullWidth sx={{ marginTop: 2 }}>
          Save
        </Button>
      </Box>
    </Modal>
  )
}
