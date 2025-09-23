import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import User from '../pages/user/User';
import Error404 from '../pages/Error404';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import APP_ROUTERS from '../../commons/utils/utils';
import Login from '../pages/login/Login';


const AppRouters = () => {
    return (
        <BrowserRouter>
            <Routes>

                {/* Rutas publicas */}
                <Route path={APP_ROUTERS.LOGIN} element={
                    <PublicRoute>
                        <Login name='david' pass='oculta'>
                        </Login>
                    </PublicRoute>
                }

                ></Route>
                {/* Rutas privadas */}
                <Route path={APP_ROUTERS.HOME} element={
                    <PrivateRoute>
                            <Home>
                                <div>
                                    Parametro como elemento hijo
                                </div>
                            </Home>
                    </PrivateRoute>
                }>

                </Route>
                <Route path={APP_ROUTERS.USER} element={
                    <PrivateRoute>
                        <User>
                             <div>
                                Parametro como elemento hijo
                            </div>
                        </User>
                    </PrivateRoute>}>
                </Route>
                {/* Ruta 404*/}
                <Route path="*" element={<Error404 />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouters;