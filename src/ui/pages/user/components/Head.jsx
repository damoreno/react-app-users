import { Box, Button, Typography } from '@mui/material'
import { APP_ROUTES } from '../../../../common/utils/router'
import { useNavigate } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add'
import { styles } from '../../../../common/styles/constants/theme'  
import { useTranslation } from 'react-i18next'

export const Head = () => {
      const navigate = useNavigate()
      const [t] = useTranslation('global')
  return (
    <Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3
        }}
      >
        <Typography sx={{ ...styles.title, fontSize: '30px' }}>
          {t('title.userList')}
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            borderRadius: '8px',
            textTransform: 'none',
            fontWeight: 500,
            fontSize: '0.9rem',
            padding: '6px 16px',
          }}
          onClick={() => navigate(APP_ROUTES.ADDUSER)}
        >
          {t('button.addUser')}
        </Button>
      </Box>
    </Box>
  )
}
