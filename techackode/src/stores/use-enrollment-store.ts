import { create } from 'zustand'

type EnrollmentState = {
  isOpen: boolean
  source: 'manual' | 'auto' | null
  open: (source?: 'manual' | 'auto') => void
  close: () => void
}

export const useEnrollmentStore = create<EnrollmentState>((set) => ({
  isOpen: false,
  source: null,
  open: (source = 'manual') => set({ isOpen: true, source }),
  close: () => set({ isOpen: false, source: null }),
}))
