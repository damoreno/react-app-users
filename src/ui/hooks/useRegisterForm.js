import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 6
const useRegisterForm = () => {
  const [t] = useTranslation('global')
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')



  const validateForm = () => {
    let isValid = true


    if (!name) {
      setNameError(t('helperText.thisFieldIsRequired'))
      isValid = false
    } else {
      setNameError('')
    }

    if (!email) {
      setEmailError(t('helperText.thisFieldIsRequired'))
      isValid = false
    } else if (!EMAIL_REGEX.test(email)) {
      setEmailError(t('helperText.incorrectFormatExample@mail.com'))
      isValid = false
    } else {
      setEmailError('')
    }

    console.log(password, confirmPassword)
    if (!password) {
      setPasswordError(t('helperText.thisFieldIsRequired'))
      isValid = false
    } else if (password.length < MIN_PASSWORD_LENGTH) {
      setPasswordError(t('helperText.minEightCharacters'))
      isValid = false
    } else {
      setPasswordError('')
    } 

    if (!confirmPassword) {
      setConfirmPasswordError(t('helperText.thisFieldIsRequired'))
      isValid = false
    } else if (confirmPassword.length < MIN_PASSWORD_LENGTH) {
      setPasswordError(t('helperText.minEightCharacters'))
      isValid = false
    } else if (confirmPassword !== password) {
      setConfirmPasswordError(t('helperText.passAndConfirmNotMatch'))
      isValid = false
    }     
    else {
      setConfirmPasswordError('')
    } 

    return isValid
  }

  const isFormValid = EMAIL_REGEX.test(email) && password.length >= MIN_PASSWORD_LENGTH

  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    nameError,
    setNameError,
    emailError,
    setEmailError,
    passwordError,
    setPasswordError,
    confirmPasswordError,
    setConfirmPasswordError,
    validateForm,
    isFormValid,
  }
}

export default useRegisterForm
