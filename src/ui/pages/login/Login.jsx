import {Avatar, Box, Paper} from "@mui/material";
import Form from "./components/Form";

const Login = () => {
    return (
        <Box sx={{
            with: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #1a1a2e, #16213e, #53354a)'
            
        }}>
            <Paper  
            elevation={6}
            sx={{
                width: {xs: '350px', sm:'400px'},
                padding:4,
                borderRadius: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backdropFilter: 'blur(10px)',
                backgroundColor: '#e7f0fe'}}
            >
                <Avatar
                sx={{
                    width: 172,
                    height: 172,
                    background: 'linear-gradient(135deg, #1a1a2e, #16213e, #53354a)',
                    mb: 2
                }}
                
                />
                <Form></Form>
            </Paper>
        </Box>
    )
}

export default Login;
