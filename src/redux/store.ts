'use client'

import { configureStore } from '@reduxjs/toolkit';
import teacherReducer from '@/redux/teacherSlice';

export const store = configureStore({
  reducer: {
    teacher: teacherReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
