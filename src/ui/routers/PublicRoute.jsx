import {Navigate} from 'react-router-dom'

import { APP_ROUTES } from '../../common/utils/router';
import useAuthStore from '../stores/useAuthStore';

const PublicRoute = ({ children }) => {
    // si el token existe entonces se envia al sitio privado (Home)
    const {token} = useAuthStore()
    return token ? <Navigate to={APP_ROUTES.HOME} /> : children
}

export default PublicRoute;