export const styles = {
  title: {
    fontWeight: 700,
    color: '#212121',
    marginTop: '20px',
    marginBottom: '20px',
  },

  textFieldInput: {
    width: '100%',
    marginBottom: '10px',

    // Label
    '& .MuiInputLabel-root': {
      color: '#1a1a2e',
      fontSize: '18px', // tamaño del label
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: '#1a1a2e',
      fontSize: '18px',
    },

    // Texto que escribe el usuario
    '& .MuiInputBase-input': {
      fontSize: '22px', // aquí controlas el tamaño del texto dentro del input
      color: '#1a1a2e', // opcional: color del texto
    },

    // Línea inferior (solo si usas variant="standard")
    '& .MuiInput-underline:before': {
      borderBottom: '2px solid #1a1a2e',
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottom: '2px solid #1a1a2e',
    },
    '& .MuiInput-underline:after': {
      borderBottom: '3px solid #1a1a2e',
    },

    // Íconos
    '& .MuiInputAdornment-root': {
      color: '#1a1a2e',
      '& .MuiSvgIcon-root': {
        fontSize: '28px',
      },
    },
    '& .MuiIconButton-root': {
      color: '#1a1a2e',
      '& .MuiSvgIcon-root': {
        fontSize: '28px',
      },
    },
  },

  textFieldInputSecondary: {
    width: '100%',
    marginBottom: '10px',
    '& label': { color: '#141414' },
    '& label.Mui-focused': { color: '#141414' },
    '& .MuiOutlinedInput-root': {
      position: 'relative',
      '& fieldset': {
        borderWidth: '2px',
        borderStyle: 'solid',
        borderImage: 'linear-gradient(to right, #00B8FF, #0008D3) 1',
        borderRadius: '8px',
      },
      '&:hover fieldset': {
        borderImage: 'linear-gradient(to right, #00B8FF, #0008D3) 1',
        borderRadius: '8px',
      },
      '&.Mui-focused fieldset': {
        borderImage: 'linear-gradient(to right, #00B8FF, #0008D3) 1',
        borderRadius: '8px',
      },
    },
  },

  buttonPrimary: {
    background: 'linear-gradient(90deg, #9C27B0 0%, #2196F3 100%)',
    color: 'white',
    fontWeight: 'bold',
    px: 3,
    py: 1,
    borderRadius: '8px',
    textTransform: 'none',
    '&:hover': {
      background: 'linear-gradient(90deg, #7B1FA2 0%, #1976D2 100%)',
    },
  },

  buttonSecondary: {
    color: '#000000',
    fontWeight: 'bold',
    px: 3,
    py: 1,
    borderRadius: '8px',
    textTransform: 'none',
    position: 'relative',
    border: 'none',
    background: 'transparent',
    zIndex: 0,
    '&::before': {
      content: '""',
      position: 'absolute',
      inset: 0,
      padding: '2px',
      borderRadius: '8px',
      background: 'linear-gradient(to right, #BA29D2, #0880C7)',
      WebkitMask: `
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0)
      `,
      WebkitMaskComposite: 'xor',
      maskComposite: 'exclude',
      pointerEvents: 'none',
    },
    '&:hover': {
      backgroundColor: '#f3e5f5',
      '&::before': {
        opacity: 0.8,
      },
    },
  },

  buttonLogin: (isFormValid, gradient) => ({
    width: '100%',
    height: '45x',
    fontSize: '17px',
    fontWeight: 'bold',
    background: isFormValid ? gradient.purpleBlue : '#e7f0fe',
    color: isFormValid ? '#ffffffd5' : '#1a1a2e', // texto blanco en válido, gris oscuro en inválido
    border: isFormValid ? 'none' : '2px solid #1a1a2e',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: isFormValid ? gradient.purpleBlue : gradient.purpleBlue, // hover en gris más oscuro
      cursor: isFormValid ? 'pointer' : 'not-allowed',
    },
  }),
};