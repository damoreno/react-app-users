import React from 'react'
import {Navigate} from 'react-router-dom'
import APP_ROUTERS from '../../commons/utils/utils';


const PrivateRoute = ({children}) => {
    const token = '1234';
    return token ? children : <Navigate to={APP_ROUTERS.LOGIN}/>
}

export default PrivateRoute