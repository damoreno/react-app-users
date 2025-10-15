import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import User from '../pages/user/User';
import Login from '../pages/login/Login';
import Error404 from '../pages/Error404';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import { APP_ROUTERS } from '../../common/utils/router';



const AppRouters = () => {
    return (
        <BrowserRouter>
            <Routes>

                {/* Rutas publicas */}
                <Route path={APP_ROUTERS.LOGIN} element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                }

                ></Route>
                {/* Rutas privadas */}
                <Route path={APP_ROUTERS.HOME} element={
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                }>

                </Route>
                <Route path={APP_ROUTERS.USER} element={
                    <PrivateRoute>
                        <User />
                    </PrivateRoute>}>
                </Route>
                {/* Ruta 404*/}
                <Route path="*" element={<Error404 />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouters;