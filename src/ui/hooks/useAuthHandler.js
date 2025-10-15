import React from 'react'
import { useTranslation } from 'react-i18next';
import useSpinnerStore from '../stores/useSpinnerStore';
import useUserStore from '../stores/useUserStore';
import LoginUseCase from '../../domain/login/loginUseCase';
import useAuthStore from '../stores/useAuthStore';


const useAuthHandler = (
    validateForm, 
    email, 
    password, 
    setEmailError, 
    setPasswordError) => {
  const {t} = useTranslation();
  // Hook de zustand para el manejo del token de usuario
  const {setAuthorization} = useAuthStore();
  //hook de zustand para el manejo de la informacion del cliente en el storage
  const {setUser} = useUserStore();
  // hook de zustand para el manejo del spinner (cargando)
  const {startSpinnerLogin, stopSpinnerLogin} = useSpinnerStore();

  const handleSubmit = async () => {
    console.log("entra al handler")
    if(!validateForm()) return

    startSpinnerLogin();
    console.log("Inicia el spinner")
    try{
      const loginUSeCase = new LoginUseCase();
      const loginResponse = await loginUSeCase.call(email, password);
      const {token, user} = loginResponse
      console.log({token, user})

      setAuthorization(token)
      setUser(user)

    }catch(error){
      console.log(error)
      setEmailError(t('helperText.theDataNotMatch'))
      setPasswordError(t('helperText.theDataNotMatch'))
    }
    finally{
      stopSpinnerLogin();
      console.log("Detiene el spinner")
    }
  }
    return {handleSubmit}
}
export default useAuthHandler;