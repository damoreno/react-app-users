import { useTranslation } from 'react-i18next';
import useSpinnerStore from '../stores/useSpinnerStore';
import RegisterUseCase from '../../domain/login/registerUseCase';


const useRegisterHandler = (
    validateForm, 
    name,
    email, 
    password,
    setNameError,
    setEmailError, 
    setPasswordError,
    setConfirmPasswordError) => {
  const {t} = useTranslation();
  // hook de zustand para el manejo del spinner (cargando)
  const {startSpinnerLogin, stopSpinnerLogin} = useSpinnerStore();

  const handleSubmit = async () => {
    console.log("entra al register handler")
    if(!validateForm()) return

    startSpinnerLogin();
    console.log("Inicia el spinner")
    try{
      // TODO: Debe llamar al usecase que realiza la persistencia en DB
      const registerUseCase = new RegisterUseCase();

      //TODO: Si la respuesta es exitosa debe dejar pasar sino lanza error
      const registerResponse = await registerUseCase.call(name, email, password);
      //const {token, user} = loginResponse
      //console.log({token, user})

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
    return {handleSubmit}
}
export default useRegisterHandler;