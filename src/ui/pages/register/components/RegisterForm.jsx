import { Alert, Box, Button, Collapse, IconButton, InputAdornment, TextField } from '@mui/material';
import { styles } from '../../../../common/styles/constants/theme';
import {width} from '../../../../common/styles/constants/spaces';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Email from '@mui/icons-material/Email';

import useRegisterHandler from '../../../hooks/useRegisterHandler';
import useTogglePassword from '../../../hooks/useTogglePassword';
import { gradient } from '../../../../common/styles/constants/colors';
import { useTranslation } from 'react-i18next';
import useRegisterForm from '../../../hooks/useRegisterForm';
import useToggleConfirmPassword from '../../../hooks/useToggleConfirmPassword';
import { useCallback, useEffect } from 'react';

const RegisterForm = () => {
  console.log("Enter to Register form")

const { showConfirmPassword, toggleConfirmPasswordVisibility } = useToggleConfirmPassword();
// Hook para manejar la logica de validacion del formulario de registro
const { 
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
    isFormValid} = useRegisterForm()

const cleanForm = useCallback(() => {
  setName('');
  setEmail('');
  setPassword('');
  setConfirmPassword('')
}, [setName, setEmail, setPassword, setConfirmPassword]);
    
// Hook para manejo de traduccion      
const [t] = useTranslation("global");
// Hook para manejar la redireccion del usuario autenticado al sitio privado
const { handleSubmit, successMessage } = useRegisterHandler(
  validateForm,
  name,
  email,
  password,
  setNameError,
  setEmailError,
  setPasswordError,
  setConfirmPasswordError
);
  
useEffect(() => {
  if(successMessage){
    cleanForm();
  }

}, [cleanForm, successMessage])

 const { showPassword, togglePasswordVisibility } = useTogglePassword();
  return (
    <Box sx={{ width: width.textFieldLogin }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Collapse in={!!successMessage}>
          <Alert severity="success" sx={{ mb: 2 }}>
            {successMessage}
          </Alert>
        </Collapse>
        {/* caja de texto con nombre */}
        <TextField
          id="name"
          label={t("label.name")}
          variant="standard"
          value={name}
          error={!!nameError}
          helperText={nameError || ' '}
          onChange={(e) => setName(e.target.value)}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                
                </InputAdornment>
              ),
            },
          }}
          sx={styles.textFieldInput}
          />        
        {/* caja de texto con email */}
        <TextField
          id="email"
          label={t("label.mail")}
          variant="standard"
          value={email}
          error={!!emailError}
          helperText={emailError || ' '}
          onChange={(e) => setEmail(e.target.value)}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <Email />
                </InputAdornment>
              ),
            },
          }}
          sx={styles.textFieldInput}
          />
          {/* caja de texto con password*/}
        <TextField
          id="password"
          label={t("label.password")}
          variant="standard"
          type={showPassword ? "text" : "password"}
          value={password}
          error={!!passwordError}
          helperText={passwordError || ' '}
          onChange={(e) => setPassword(e.target.value)}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
                    }
                    onClick={togglePasswordVisibility}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
          sx={styles.textFieldInput}
        />
        <TextField
          id="confirmPassword"
          label={t("label.confirmPassword")}
          variant="standard"
          type={showConfirmPassword ? "text" : "password"}
          value={confirmPassword}
          error={!!confirmPasswordError}
          helperText={confirmPasswordError || ' '}
          onChange={(e) => setConfirmPassword(e.target.value)}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
                    }
                    onClick={toggleConfirmPasswordVisibility}
                    edge="end"
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
          sx={styles.textFieldInput}
        />        
        <Box
        sx={{ width: width.textFieldLogin,
          marginTop: '10px',
          display: 'flex',
          justifyContent: 'center',
        }}>
        </Box>
        
        <Button sx={styles.buttonLogin(isFormValid,gradient)} onClick={handleSubmit}>
          {t("button.register")}
        </Button>

      </Box>
    </Box>
  )}

export default RegisterForm;
