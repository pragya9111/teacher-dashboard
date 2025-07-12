'use client'
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Teacher } from '@/types/teacher';
import { mockTeachers } from '@/data/mockData';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface TeacherState {
  teachers: Teacher[];
  loading: boolean;
}

const initialState: TeacherState = {
  teachers: [],
  loading: false,
};

// Thunk for fetching teachers
export const fetchTeachers = createAsyncThunk(
  'teacher/fetchTeachers',
  async () => {
    // Simulate async fetch
    return new Promise<Teacher[]>(resolve => {
      setTimeout(() => {
        resolve(mockTeachers);
      }, 1000);
    });
  }
);

const teacherSlice = createSlice({
  name: 'teacher',
  initialState,
  reducers: {
    addTeacher(state, action: PayloadAction<Teacher>) {
      state.teachers.push(action.payload);
    },
    editTeacher(state, action: PayloadAction<Teacher>) {
      const index = state.teachers.findIndex(t => t.id === action.payload.id);
      if (index !== -1) state.teachers[index] = action.payload;
    },
    deleteTeacher(state, action: PayloadAction<number>) {
      state.teachers = state.teachers.filter(t => t.id !== action.payload);
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTeachers.pending, state => {
        state.loading = true;
      })
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.teachers = action.payload;
        state.loading = false;
      })
      .addCase(fetchTeachers.rejected, state => {
        state.loading = false;
      });
  }
});

export const { addTeacher, editTeacher, deleteTeacher } = teacherSlice.actions;
export default teacherSlice.reducer;
