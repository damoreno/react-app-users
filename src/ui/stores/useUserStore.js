import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useUserStore = create(
  persist(
    (set) => ({
      email: '',
      name: '',
      role: '',
      permissions:[],
      setUser: (user) => set({ email: user.email, name: user.name, role: user.rol, permissions: user.permissions}),
      clearUser: () => set({ email: '', name: '', role: '', permissions: [] }),
    }),
    {
      name: 'user-storage', // name of item in localStorage
    }
  )
)

export default useUserStore
