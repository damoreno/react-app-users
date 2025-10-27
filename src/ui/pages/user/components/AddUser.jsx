import { useEffect, useState } from 'react'
import { Box, Button, TextField, Typography, Paper, MenuItem, FormControlLabel, Switch } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { styles } from '../../../../common/styles/constants/theme'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import AddIcon from '@mui/icons-material/Add'
import { APP_ROUTES } from '../../../../common/utils/router'
import RolesListUseCase from '../../../../domain/roles/rolesListUseCase'
import { useNavigate } from 'react-router-dom'
import UserCreateAdminUseCase from '../../../../domain/user/userCreateAdminUseCase'

const AddUser = () => {
  const [loading, setLoading] = useState(false)
  const [t] = useTranslation('global')
  const navigate = useNavigate()
  const [rolesList, setRolesList] = useState([])
  const {roles = []} = rolesList;
  const [usersList, setUsersList] = useState({})
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    rol: '',
    state: true,
    google: false
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSwitchChange = (e) => {
    const { name, checked } = e.target
    setForm({
      ...form,
      [name]: checked,
    })
  }

  const fetchRoles = async () => {
    const rolesListUseCase = new RolesListUseCase()
    try {
      // Llamar al repositorio para obtener la lista de usuarios
      const { body, adapterResponse } = await rolesListUseCase.call();
      if (!body.ok) {
        setRolesList({ totalRoles: 0, roles: [] });
        throw new Error('Error al obtener la lista de roles');
      }
      setRolesList(adapterResponse)
    } catch (error) {
      console.error('Error fetching roles:', error)
    }
  }

useEffect(() => {
  fetchRoles()
}, [])


  const handleSubmit = async () => {
    // Lógica para manejar el envío del formulario
    console.log('Formulario enviado:')
    const userCreateAdminUseCase = new UserCreateAdminUseCase();
    const payload = {
      name: form.name,
      email: form.email,
      password: form.password,
      img:'',
      rol: form.rol,
      state: form.state,
      google: form.google
    }

      // Llamar al repositorio para obtener la lista de usuarios
      try{
      const {body, resp} = await userCreateAdminUseCase.call(payload)
      if(!body.ok){
        throw new Error('Error al crear el usuario')
      }
      navigate(APP_ROUTES.USER)
    }catch(error){
      console.log(error)
    }

  }

  return (
    <Box>
      {/* Cabecera */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3
        }}
      >
        <Typography sx={{ ...styles.title, fontSize: '30px' }}>
          {t('title.addUser')}
        </Typography>

        <Button
          variant="contained"
          startIcon={<ArrowBackIcon />}
          sx={{
            borderRadius: '8px',
            textTransform: 'none',
            fontWeight: 500,
            fontSize: '0.9rem',
            padding: '6px 16px',
          }}
          onClick={() => navigate(APP_ROUTES.USER)}

        >
          {t('button.back')}
        </Button>
      </Box>

      {/* Formulario */}
      <Paper
        elevation={3}
        sx={{
          maxWidth: 600,
          margin: '0 auto',
          padding: 4,
          borderRadius: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
      >

        <TextField
          label={t('label.fullName')}
          name="name"
          value={form.name}
          onChange={handleChange}
          fullWidth
          variant="outlined"
        />

        <TextField
          label={t('label.email')}
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          fullWidth
          variant="outlined"
        />

        <TextField
          label={t('label.password')}
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          fullWidth
          variant="outlined"
        />

        <TextField
          label={t('label.passwordConfirmation')}
          name="confirmPassword"
          type="password"
          value={form.confirmPassword}
          onChange={handleChange}
          fullWidth
          variant="outlined"
        />

        <TextField
          select
          label={t('label.role')}
          name="rol"
          value={form.rol}
          onChange={handleChange}
          fullWidth
        >
          {roles.map(role => (
            <MenuItem key={role._id} value={role.rol}>
              {role.name}
            </MenuItem>
          ))}
        </TextField>



        <FormControlLabel
          control={
            <Switch
              checked={form.state}
              onChange={handleSwitchChange}
              name="state"
              color="success"
            />
          }
          label={t('label.status')}
        />

        <FormControlLabel
          control={
            <Switch
              checked={form.google}
              onChange={handleSwitchChange}
              name="google"
              color="primary"
            />
          }
          label={t('label.google')}
        />

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 2 }}>
          <Button
            variant="outlined"
            onClick={() => navigate(APP_ROUTES.USER)}
          >
            {t('button.cancel')}
          </Button>

          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={handleSubmit}
          >
            {t('button.save')}
          </Button>
        </Box>



      </Paper>







    </Box>
  )
}

export default AddUser
