import { APP_ROUTERS } from "./router"

export const logoutUser = () => {
    ['language', 'authorization-storage', 'user-storge'].forEach(key => {
        localStorage.removeItem(key)
    })

    window.location.assign(APP_ROUTERS.login)

}