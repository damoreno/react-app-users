import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import GroupIcon from '@mui/icons-material/Group'
import {
  styled,
  Box,
  Drawer as MuiDrawer,
  AppBar as MuiAppBar,
  Toolbar,
  List,
  CssBaseline,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import profile from '../../common/assets/man-user-circle.png'
import { useNavigate } from 'react-router-dom'
import { logoutUser } from '../utils/logoutUser'
import { LanguageSelect } from './LanguageSelect'
import logoLogin from '../../common/assets/logo.webp'
import useUserStore from '../../ui/stores/useUserStore'
import { APP_ROUTERS } from '../utils/router'

const drawerWidth = 220

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
})

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
})

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}))

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: '#FBFBFB',
  height: '80px',
  boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  ...(!open && {
    marginLeft: `calc(${theme.spacing(7)} + 1px)`,
    width: `calc(100% - calc(${theme.spacing(7)} + 8px))`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  }),
}))

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: open ? drawerWidth : `calc(${theme.spacing(7)} + 1px)`,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  variants: [],
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}))

const DrawerLayout = ({ children }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('lg')) // It will collapse in < 1200px
  const [t] = useTranslation('global')
  const navigate = useNavigate()
  const [selected, setSelected] = useState(t('menu.home'))
  const [open, setOpen] = useState(true)
  const [anchorEl, setAnchorEl] = useState(null)
  const { name: userFullName } = useUserStore()


  // Efecto para manejar el responsive
  useEffect(() => {
    if (isMobile) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }, [isMobile])

  const isMenuOpen = Boolean(anchorEl)

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const toggleDrawer = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleLogOut = () => {
    logoutUser()
  }

  const handleNavigation = (path) => {
    navigate(path)
    if (isMobile) {
      setOpen(false)
    }
  }

  useEffect(() => {
    const mapToTranslationKey = {
      Inicio: 'menu.home',
      Home: 'menu.home',
      Usuarios: 'menu.user',
      Users: 'menu.user',
    }

    if (selected in mapToTranslationKey) {
      setSelected(t(mapToTranslationKey[selected]))
    }
  }, [t, selected])
  
    useEffect(() => {
    navigate(APP_ROUTERS.HOME)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const menuId = 'primary-search-account-menu'
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleLogOut}>{t('button.LogOut')}</MenuItem>
    </Menu>
  )

  const MenuButton = ({ text, Icon, onClick, isSubItem = false }) => (
    <ListItemButton
      onClick={onClick}
      sx={{
        borderRadius: '8px',
        marginRight: '5px',
        marginBottom: '5px',
        color: selected === text ? '#212121' : '#FBFBFB',
        background: selected === text ? 'linear-gradient(to right, #FFCD29, #F46700)' : 'transparent',
        '&:hover': {
          color: '#212121',
          background: 'linear-gradient(to right, #FFCD29, #F46700)',
          '& .MuiListItemIcon-root': {
            color: '#212121',
          },
        },
        transition: 'background 0.3s ease, color 0.3s ease',
        pl: isSubItem ? 4 : 2,
      }}
    >
      {Icon && (
        <ListItemIcon sx={{ color: selected === text ? '#212121' : '#FBFBFB', minWidth: '36px', marginRight: '12px' }}>
          <Icon />
        </ListItemIcon>
      )}
      <ListItemText
        primary={
          <Typography>
            {text}
          </Typography>
        }
      />
    </ListItemButton>
  )

  const DrawerList = (
    <Box
      sx={{
        width: drawerWidth,
        background: 'linear-gradient(135deg, #1a1a2e, #16213e, #53354a)',
        height: '100vh',
        color: '#FBFBFB',
      }}
      role='presentation'
    >
      <Box sx={{ 
        height: '170px', 
        display: open ? 'flex' : 'none', 
        alignItems: 'center', 
        justifyContent: 'center',
        marginTop: '20px',
      }}>
        <img 
          src={logoLogin} 
          alt="Logo de la aplicación" 
          style={{ 
            maxWidth: '100%', 
            maxHeight: '100%',
            objectFit: 'contain' 
          }} 
        />
      </Box>

      <List sx={{ marginTop: open ? '30px' : '80px' }}>
        <ListItem disablePadding>
          <MenuButton
            text={t('menu.home')}
            Icon={HomeIcon}
            onClick={() => {
              setSelected(t('menu.home'))
              handleNavigation(APP_ROUTERS.HOME)
            }}
          />
        </ListItem>

        <ListItem disablePadding>
          <MenuButton
            text={t('menu.user')}
            Icon={GroupIcon}
            onClick={() => {
              setSelected(t('menu.user'))
              handleNavigation(APP_ROUTERS.USER)
            }}
          />
        </ListItem>
      </List>
    </Box>
  )

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar position='fixed' open={open}>
        <Toolbar>
          <IconButton
            aria-label='open drawer'
            onClick={toggleDrawer}
            edge='start'
            sx={{
              marginRight: 5,
              color: '#212121',
            }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <LanguageSelect />

            <IconButton
              size='large'
              edge='end'
              aria-label='account of current user'
              aria-controls={menuId}
              aria-haspopup='true'
              onClick={handleProfileMenuOpen}
              color='inherit'
              sx={{
                width: '80px',
              }}
            >
              <Avatar
                alt='User profile'
                src={profile}
                sx={{
                  width: '55px',
                  height: '55px',
                }}
              />
            </IconButton>
          </Box>
          <Typography sx={{ color: '#212121', fontSize: '15px', marginLeft: '15px', fontWeight: 600 }}>
            {userFullName.split(' ')[0]} {userFullName.split(' ')[1]?.charAt(0)}.
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer variant='permanent' open={open}>
        {DrawerList}
      </Drawer>
      <Box component='main' sx={{ flexGrow: 1, p: 3, background: '#f1f1f1', height: '100vh', width: '100vw' }}>
        <DrawerHeader />
        {children} {/* We ride what the private route brings */}
      </Box>

      {renderMenu}
    </Box>
  )
}

export default DrawerLayout