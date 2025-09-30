import React from 'react'
import useAuthStore from '../stores/useAuthStore';
import { useTranslation } from 'react-i18next';
import useSpinnerStore from '../stores/useSpinnerStore';
import useUserStorage from '../stores/useUserStorage';

const useAuthHandler = (
    validateForm, 
    email, 
    password, 
    setEmailError, 
    setPasswordError) => {
  const {t} = useTranslation();
  const {setAuthorization} = useAuthStore();
  const {setUser} = useUserStorage();
  const {startSpinnerLogin, stopSpinnerLogin} = useSpinnerStore();

  const handlerSummit = async () => {
    //if(!validateForm()) return

    //startSpinnerLogin();
    
}
    return {handlerSummit}
}
export default useAuthHandler;