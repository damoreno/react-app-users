import { useState } from 'react'

const useToggleConfirmPassword = () => {
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  return { showConfirmPassword, toggleConfirmPasswordVisibility }
}

export default useToggleConfirmPassword
