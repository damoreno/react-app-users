import { useTranslation } from 'react-i18next';
import useSpinnerStore from '../stores/useSpinnerStore';
import RegisterUseCase from '../../domain/login/registerUseCase';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '../../common/utils/router';


const useRegisterHandler = (
    validateForm, 
    name,
    email, 
    password,
    setNameError,
    setEmailError, 
    setPasswordError,
    setConfirmPasswordError) => {
  const {t} = useTranslation('global');
  // hook de zustand para el manejo del spinner (cargando)
  const {startSpinnerLogin, stopSpinnerLogin} = useSpinnerStore();
  const [userCreated, setUserCreated] = useState(undefined);
  const [alertMessage, setAlertMessage] = useState('');
  const navigate = useNavigate();

  const redirectToLogin = useCallback(() => {
    console.log("Redirecciona a Login")
    navigate(APP_ROUTES.LOGIN)
  }, [navigate]);

  
 useEffect(() => {
  if(userCreated){
    if(userCreated.ok){
      setAlertMessage(t('messages.userCreatedSuccessfully'));
    }else{
      setAlertMessage(t('messages.errorUserCreate'))
    }
  }

  }, [userCreated, t])  
  
 useEffect(() => {
  if(userCreated){
    if(userCreated.ok){
        setTimeout(() => redirectToLogin(), 3000);
    }else{
      setTimeout(() => setAlertMessage(''), 3000);
    } 
  }
  }, [userCreated, redirectToLogin])    
  
  const handleSubmit = async () => {
    console.log("entra al register handler")
    if(!validateForm()) return

    startSpinnerLogin();
    console.log("Inicia el spinner")
    try{
      // Debe llamar al usecase que realiza la persistencia en DB
      const registerUseCase = new RegisterUseCase();

      //Si la respuesta es exitosa debe dejar pasar sino lanza error
      const registerResponse = await registerUseCase.call(name, email, password);
      setUserCreated(registerResponse)
      console.log({userCreated})

    }catch(error){
      console.log(error)
      setNameError(t('helperText.theDataNotMatch'))
      setEmailError(t('helperText.theDataNotMatch'))
      setPasswordError(t('helperText.theDataNotMatch'))
      setConfirmPasswordError(t('helperText.theDataNotMatch'))

    }
    finally{
      stopSpinnerLogin();
      console.log("Detiene el spinner")
    }
  }
    return {handleSubmit, successMessage: alertMessage}
}
export default useRegisterHandler;