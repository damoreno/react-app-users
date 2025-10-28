import { Box } from "@mui/material";
import { Head } from "./components/Head";
import TableGrid from "./components/TableGrid";

const User = () => {
    return (
        <Box sx={{
            maxHeight: '90vh',
            overflowY: 'auto'
        }}>
            <Head></Head>
            <TableGrid />
        </Box>
    )
}

export default User;
