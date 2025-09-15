import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import User from '../pages/user/User';
import Login from '../pages/login/Login';
import Error404 from '../pages/Error404';

const AppRouters = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />}></Route>
                <Route path="login" element={<Login />}></Route>
                <Route path="user" element={<User />}></Route>
                <Route path="*" element={<Error404 />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouters;