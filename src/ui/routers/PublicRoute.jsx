import {Navigate} from 'react-router-dom'
import APP_ROUTERS from '../../commons/utils/utils';


const PublicRoute = ({ children }) => {
    const token = ''
    return token ? <Navigate to={APP_ROUTERS.HOME} /> : children
}

export default PublicRoute;