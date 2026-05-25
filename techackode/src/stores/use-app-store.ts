import { create } from 'zustand'

type AppState = {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

export const useAppStore = create<AppState>((set) => ({
  theme: 'light',
  toggleTheme: () =>
    set((state) => {
      const theme = state.theme === 'light' ? 'dark' : 'light'
      document.documentElement.classList.toggle('dark', theme === 'dark')
      return { theme }
    }),
}))
