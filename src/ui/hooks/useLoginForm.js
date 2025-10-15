import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 6
const useLoginForm = () => {
  const [t] = useTranslation('global')
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const validateForm = () => {
    let isValid = true

    if (!email) {
      setEmailError(t('helperText.thisFieldIsRequired'))
      isValid = false
    } else if (!EMAIL_REGEX.test(email)) {
      setEmailError(t('helperText.incorrectFormatExample@mail.com'))
      isValid = false
    } else {
      setEmailError('')
    }

    if (!password) {
      setPasswordError(t('helperText.thisFieldIsRequired'))
      isValid = false
    } else if (password.length < MIN_PASSWORD_LENGTH) {
      setPasswordError(t('helperText.minEightCharacters'))
      isValid = false
    } else {
      setPasswordError('')
    } 

    return isValid
  }

  const isFormValid = EMAIL_REGEX.test(email) && password.length >= MIN_PASSWORD_LENGTH

  return {
    email,
    setEmail,
    password,
    setPassword,
    emailError,
    setEmailError,
    passwordError,
    setPasswordError,
    validateForm,
    isFormValid,
  }
}

export default useLoginForm
