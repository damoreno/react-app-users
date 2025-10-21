import { API_ROUTES } from "../../common/utils/router";
import registerAdapter from "../adapters/out/registerAdapter";
export default class RegisterRepository{
    static async register(name, email, password){
        const URL_BASE = `${import.meta.env.VITE_API_URL_BASE}${API_ROUTES.REGISTER}`;
        
        try {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: JSON.stringify(registerAdapter(name, email, password)),
            };

            const response = await fetch(`${URL_BASE}`, requestOptions)
            
            if(!response.ok){
                throw new Error("Register failed")
            }
            const result = await response.json()

            return {
                    ok:true, 
                    result: result
                };
        } catch (error) {
            console.log("RegisterRepository.register Error", error)
            return {
                ok: false,
                message: error.message
            }
        }
    }
}


