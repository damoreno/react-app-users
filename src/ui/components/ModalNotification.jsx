import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function NestedModal({ user, actionDelete }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    console.log("Acción confirmada");
    actionDelete(user);
    handleClose();
  };

  return (
    <div>
       <DeleteOutlineIcon
                                  onClick={handleOpen}
                                  sx={{
                                    color: 'error.main',
                                    cursor: 'pointer',
                                    transition: '0.2s',
                                    '&:hover': { color: 'error.dark' },
                                  }}
                                />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <Typography id="parent-modal-title" variant="h6" component="h2">
            Confirmar Acción
          </Typography>
          <Typography id="parent-modal-description" sx={{ mt: 2 }}>
            {`Realmente quiere eliminar al usuario ${user.name}?`}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3, gap: 2 }}>
            <Button 
              variant="outlined" 
              onClick={handleClose}
            >
              No
            </Button>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={handleConfirm}
            >Si</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
