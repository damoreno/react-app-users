import { useCallback } from "react";
import { APP_ROUTES } from "../../common/utils/router";
import { useNavigate } from 'react-router-dom';
import UserEditUseCase from "../../domain/user/userCreateAdminUseCase copy";

const useEditUserHandler = (form, id) => {
        const navigate = useNavigate()

        const redirectToUsers = useCallback(() => {
            console.log("Redirecciona a Users")
            navigate(APP_ROUTES.USER)
        }, [navigate]);

        const handleSubmit = async() => {
            console.log('Formulario enviado:')
            const userEditUseCase = new UserEditUseCase();
            const payload = {
                name: form.name,
                email: form.email,
                password: form.password,
                rol: form.rol,
                state: form.state,
                google: form.google
        }

        // Llamar al repositorio para obtener la lista de usuarios
        try{
            const {body} = await userEditUseCase.call(payload, id)
        if(!body.ok){
            throw new Error('Error al crear el usuario')
        }else{
            redirectToUsers()
        }
        
        }catch(error){
            console.log(error)
        }
    }

return {handleSubmit}

}

export default useEditUserHandler;