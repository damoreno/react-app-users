import { Box, Button, IconButton, InputAdornment, TextField } from '@mui/material';
import { styles } from '../../../../common/styles/constants/theme';
import {width} from '../../../../common/styles/constants/spaces';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Email from '@mui/icons-material/Email';

import useAuthHandler from '../../../hooks/useAuthHandler';
import useTogglePassword from '../../../hooks/useTogglePassword';
import { gradient } from '../../../../common/styles/constants/colors';
import useLoginForm from '../../../hooks/useLoginForm';
import { useTranslation } from 'react-i18next';

// const togglePasswordVisibility = () => {
//   setShowPassword(!showPassword);
// };



const Form = () => {
// Hook para manejar la logica de validacion del formulario login
const {        
      email,
      setEmail,
      password,
      setPassword,
      emailError,
      setEmailError,
      passwordError,
      setPasswordError,
      validateForm,
      isFormValid,} = useLoginForm()
// Hook para manejo de traduccion      
const [t] = useTranslation("global");
// Hook para manejar la redireccion del usuario autenticado al sitio privado
const { handleSubmit } = useAuthHandler(
    validateForm, 
    email, 
    password, 
    setEmailError, 
    setPasswordError
);
  
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
        {/* caja de texto con email */}
        <TextField
          id="email"
          label={t("label.email")}
          variant="standard"
          // value={email}
          // value="admin@gmail.com"
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
          // value={password}
          // value="admin@gmail.com"
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
        <Box
        sx={{ width: width.textFieldLogin,
          marginTop: '10px',
          display: 'flex',
          justifyContent: 'center',
        }}>
        </Box>
        
        <Button sx={styles.buttonLogin(isFormValid,gradient)} onClick={handleSubmit}>
          {t("button.login")}
        </Button>

      </Box>
    </Box>
  )}

export default Form;
