import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useAuthStore = create(
  persist(
    (set) => ({
      token: null,
      setAuthorization: (token) => set({ token }),
      clearAuthorization: () => set({ token: null }),
    }),
    {
      name: 'auth-storage', // name of item in localStorage
    }
  )
)

export default useAuthStore


