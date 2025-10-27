import { Box } from "@mui/material";
import MernLogo from "../../../common/assets/MERN-logo.png";
import NestedModal from "../../components/ModalNotification";


const Home = () => {

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 150px)", // Ajusta la altura para ocupar el espacio disponible menos la barra de navegación y otros elementos
        backgroundImage: `url(${MernLogo})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain", // 'contain' para que la imagen se vea completa, o 'cover' para que llene el espacio
        opacity: 0.5, // Ajusta la opacidad para que no sea tan dominante
      }}
    >
      {/* Puedes mantener el texto o quitarlo si prefieres solo la imagen */}
      {/* <Typography variant="h2" sx={{ color: 'rgba(0, 0, 0, 0.6)' }}>Home Page</Typography> */}
    
    </Box>
  );
};

export default Home;
