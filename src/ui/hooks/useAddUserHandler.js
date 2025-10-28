import { useCallback } from "react";
import UserCreateAdminUseCase from "../../domain/user/userCreateAdminUseCase";
import { APP_ROUTES } from "../../common/utils/router";
import { useNavigate } from 'react-router-dom';

const useAddUserHandler = (form) => {
        const navigate = useNavigate()

        const redirectToLogin = useCallback(() => {
            console.log("Redirecciona a Login")
            navigate(APP_ROUTES.USER)
        }, [navigate]);

        const handleSubmit = async() => {
            console.log('Formulario enviado:')
            const userCreateAdminUseCase = new UserCreateAdminUseCase();
            const payload = {
                name: form.name,
                email: form.email,
                password: form.password,
                img:'',
            rol: form.rol,
            state: form.state,
            google: form.google
        }

        // Llamar al repositorio para obtener la lista de usuarios
        try{
            const {body} = await userCreateAdminUseCase.call(payload)
        if(!body.ok){
            throw new Error('Error al crear el usuario')
        }else{
            redirectToLogin()
        }
        
        }catch(error){
            console.log(error)
        }
    }

return {handleSubmit}

}

export default useAddUserHandler;