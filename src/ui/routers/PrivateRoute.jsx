import React from 'react'
import {Navigate} from 'react-router-dom'
import useAuthStore from '../stores/useAuthStore';
import DrawerLayout from '../../common/assets/DrawerLayout'
import { APP_ROUTERS } from '../../common/utils/router';

const PrivateRoute = ({children}) => {
    // Si el token existe entonces se envia al sitio privado contenido en el children
    const {token} = useAuthStore()
    return token ? <DrawerLayout>{children}</DrawerLayout> : <Navigate to={APP_ROUTERS.LOGIN}/>
}

export default PrivateRoute