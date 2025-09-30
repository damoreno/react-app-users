import React, { useState } from 'react';
import { Box, IconButton, InputAdornment, TextField } from '@mui/material';
import { styles } from '../../../../commons/styles/constants/theme';
import {width} from '../../../../commons/styles/constants/spaces';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Email from '@mui/icons-material/Email';
import { useTranslation } from 'react-i18next';
import userAuthHandler from '../../../hooks/userAuthHandler';
import useTogglePassword from '../../../hooks/useTogglePassword';


const togglePasswordVisibility = () => {
  setShowPassword(!showPassword);
};


const Form = () => {
const [t] = useTranslation("global");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { handleSubmit } = userAuthHandler(
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
        <TextField
          id="email"
          label={t("label.mail")}
          variant="standard"
          value={email}
          error={!!emailError}
          helperText={emailError || " "}
          oncChange={(e) => setEmail(e.target.value)}
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
        <TextField
          id="password"
          label={t("label.password")}
          variant="standard"
          type={showPassword ? "text" : "password"}
          value={password}
          error={!!passwordError}
          helperText={passwordError || " "}
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
      </Box>
    </Box>
  )}

export default Form;
