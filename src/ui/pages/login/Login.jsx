import {Avatar, Box, Paper, Typography} from "@mui/material";
import Form from "./components/Form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../../common/utils/router";

const Login = () => {
  const [t] = useTranslation('global')
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #1a1a2e, #16213e, #53354a)",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: { xs: "350px", sm: "400px" },
          padding: 4,
          borderRadius: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backdropFilter: "blur(10px)",
          backgroundColor: "#e7f0fe",
        }}
      >
        <Avatar
          sx={{
            width: 172,
            height: 172,
            background: "linear-gradient(135deg, #1a1a2e, #16213e, #53354a)",
            mb: 2,
          }}
        />
        <Form />
        {/* Línea semitransparente */}
        <Box
          sx={{
            marginTop: 4,
            marginBottom: 2,
            width: 'calc(100% + 64px)',
            height: '30px',
            background: 'linear-gradient(135deg, #1A1A2E, #16213E, #53354A)',
          }}
        />
        {/* Enlaces */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 2,
            fontSize: '14px',
          }}
        >
          <Typography variant="body2" onClick={() => navigate(APP_ROUTES.REGISTER)} sx={{ cursor: 'pointer', color: '#1A1A2E', fontSize: '17px' }}>
            {t('button.register')}
          </Typography>
        </Box>

      </Paper>
    </Box>
  );
};

export default Login;
