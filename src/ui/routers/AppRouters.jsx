import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login';
import Error404 from '../pages/Error404';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import { APP_ROUTES } from '../../common/utils/router';
import Register from '../pages/register/Register';
import AddUser from '../pages/user/components/AddUser';
import User from '../pages/user/User';



const AppRouters = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Ruta raíz que redirige a login */}
                <Route path="/" element={<Navigate to={APP_ROUTES.LOGIN} />} />


                {/* Rutas publicas */}
                <Route path={APP_ROUTES.LOGIN} element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                }
                ></Route>
                <Route path={APP_ROUTES.REGISTER} element={
                    <PublicRoute>
                        <Register />
                    </PublicRoute>
                }
                ></Route>
                {/* Rutas privadas */}
                <Route path={APP_ROUTES.HOME} element={
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                }>
                </Route>
                <Route path={APP_ROUTES.USER} element={
                    <PrivateRoute>
                        <User></User>
                    </PrivateRoute>}>
                </Route>
                <Route path={APP_ROUTES.ADDUSER} element={
                    <PrivateRoute>
                        <AddUser />
                    </PrivateRoute>}>
                </Route>                
                {/* Ruta 404*/}
                <Route path="*" element={<Error404 />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouters;