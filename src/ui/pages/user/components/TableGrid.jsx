import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Box,
  LinearProgress,
  TablePagination,
  Chip,
  Typography,
  useTheme,
  useMediaQuery
} from '@mui/material'
import { getRandomColor } from '../../../helper/getRandomColor'
import UsersListUseCase from '../../../../domain/user/usersListUseCase'



const TableGrid = () => {
  const [t] = useTranslation('global')
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [loading, setLoading] = useState(false)
  const [usersList, setUsersList] = useState([])
  const { totalUsers = 0, users = [] } = usersList
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md')) // md = 900px
  console.log(users)
  const columns = [
    { width: 150, label: t('columnName.firstLastNames'), dataKey: 'name' },
    { width: 200, label: t('columnName.email'), dataKey: 'email' },
    { width: 150, label: t('columnName.role'), dataKey: 'rol' },
    { width: 100, label: t('columnName.status'), dataKey: 'state' },
  ]

  const handleChangePage = (_, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const paperStyles = {
    width: '100%',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    overflow: 'hidden',
  }

    const tableContainerStyles = {
    width: '100%',
    overflowX: 'auto',
    '@media (max-width: 900px)': {
      '&': {
        display: 'block',
        overflowX: 'auto',
        WebkitOverflowScrolling: 'touch',
      },
      '&::-webkit-scrollbar': {
        height: '6px',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: theme.palette.primary.main,
        borderRadius: '3px',
      },
      '&::-webkit-scrollbar-track': {
        backgroundColor: '#f1f1f1',
      }
    }
  }

    const tableStyles = {
    minWidth: isSmallScreen ? '800px' : '100%',
    '& .MuiTableCell-root': {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    }
  }

  const responsiveHeaderStyles = {
    fontWeight: 'bold',
    fontSize: isSmallScreen ? '0.875rem' : 'inherit',
    padding: isSmallScreen ? '8px' : '16px',
  }

  const fecthUsers = async () => {
    const usersListUseCase = new UsersListUseCase()
    setLoading(true)
    try {
      // Llamar al repositorio para obtener la lista de usuarios
      const { body, adapterResponse } = await usersListUseCase.call(page, rowsPerPage)
      if (!body.ok) {
        setUsersList([])
        throw new Error('Error al obtener la lista de usuarios')
      }
      setUsersList(adapterResponse)
    } catch (error) {
      console.error('Error fetching users:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fecthUsers()
  }, [page, rowsPerPage])

  const formatStatus = (state) => {
    return (
      <Chip 
        label={state ? t('text.active') : t('text.inactive')}
        color={state ? 'success' : 'error'}
        size="small"
        sx={{ 
          minWidth: '80px',
          fontSize: isSmallScreen ? '0.75rem' : '0.8125rem'
        }}
      />
    )
  }

  const formatRole = (rol) => {
    const rolesMap = {
      'ADMIN_ROLE': t('text.admin'),
      'USER_ROLE': t('text.user'),
      'SALES_ROLE': t('text.sales')
    }
    return rolesMap[rol] || rol
  }


  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      <Paper sx={paperStyles}>
        {loading && (
          <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>
        )}

        <TableContainer sx={tableContainerStyles}>
          <Table stickyHeader aria-label="users table" sx={tableStyles}>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.dataKey}
                    style={{ width: column.width }}
                    sx={responsiveHeaderStyles}
                  >
                    <Typography variant="subtitle2" noWrap>
                      {column.label}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow hover key={user.uid} onClick={() => console.log('ID del usuario:', user.uid)}>
                  {columns.map((column) => {
                    if (column.dataKey === 'name') {
                      const initial = user.name.charAt(0).toUpperCase()
                      const color = getRandomColor(user.name)
                      
                      return (
                        <TableCell key={column.dataKey}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Avatar sx={{ 
                              bgcolor: color, 
                              width: isSmallScreen ? 28 : 32, 
                              height: isSmallScreen ? 28 : 32 
                            }}>
                              {initial}
                            </Avatar>
                            <Typography variant="body2" noWrap>
                              {user.name}
                            </Typography>
                          </Box>
                        </TableCell>
                      )
                    }

                    if (column.dataKey === 'state') {
                      return (
                        <TableCell key={column.dataKey}>
                          {formatStatus(user.state)}
                        </TableCell>
                      )
                    }

                    if (column.dataKey === 'rol') {
                      return (
                        <TableCell key={column.dataKey}>
                          <Typography variant="body2" noWrap>
                            {formatRole(user.rol)}
                          </Typography>
                        </TableCell>
                      )
                    }

                    return (
                      <TableCell key={column.dataKey}>
                        <Typography variant="body2" noWrap>
                          {user[column.dataKey]}
                        </Typography>
                      </TableCell>
                    )
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          component="div"
          count={Number(totalUsers)}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage={t('label.itemsPerPagination')}
          sx={{
            '& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows': {
              fontSize: isSmallScreen ? '0.75rem' : '0.875rem'
            }
          }}
        />
      </Paper>
    </Box>
  )
}

export default TableGrid
