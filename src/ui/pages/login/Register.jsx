import {Avatar, Box, Paper, Typography} from "@mui/material";
import RegisterForm from "./components/RegisterForm";

const Register = () => {

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
        <RegisterForm />

      </Paper>
    </Box>
  );
};

export default Register;
