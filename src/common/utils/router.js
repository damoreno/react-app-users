//Rutas para manejar redireccionamiento
export const APP_ROUTERS = Object.freeze({
    //Rutas publicas
    LOGIN: "/login",
    REGISTER: "/register",
    
    //Rutas Privadas
    HOME: "/home",
    USER: "/user",

})


//Rutas de servicios externos
export const API_ROUTES = Object.freeze({
    LOGIN: "/auth/login",
    REGISTER: "/users/user",
});