import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useUserStorage = create(
  persist(
    (set) => ({
      email: '',
      name: '',
      role: '',
      permissions:[],
      setUser: (email, name, role, permissions) => set({ email, name, role, permissions}),
      clearUser: () => set({ email: '', name: '', role: '', permissions: [] }),
    }),
    {
      name: 'user-storage', // name of item in localStorage
    }
  )
)

export default useUserStorage


