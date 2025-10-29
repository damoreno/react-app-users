//Rutas para manejar redireccionamiento
export const APP_ROUTES = Object.freeze({
    //Rutas publicas
    LOGIN: "/login",
    REGISTER: "/register",
    
    //Rutas Privadas
    HOME: "/home",
    USER: "/user",
    ADDUSER:"/add-user",
    EDIT_USER: "/edit-user/:id",

})


//Rutas de servicios externos
export const API_ROUTES = Object.freeze({
    LOGIN: "/auth/login",
    REGISTER: "/users/user",
    USERS: "/users",
    ROLES: "/roles"
});