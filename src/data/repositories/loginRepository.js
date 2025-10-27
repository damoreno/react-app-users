import { API_ROUTES } from "../../common/utils/router";
import loginAdapter from "../../data/adapters/out/loginAdapter";
export default class LoginRepository{
    static async login(email, password){
        const URL_BASE = `${import.meta.env.VITE_API_URL_BASE}${API_ROUTES.LOGIN}`;
        
        try {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: JSON.stringify(loginAdapter(email, password)),
                redirect: 'follow'
            };

            // const response = await fetch("/json/login.json", requestOptions)
            
            const response = await fetch(`${URL_BASE}`, requestOptions)

            if(!response.ok){
                throw new Error("Authentication failed")
            }
            const result = await response.json()
            console.log(result);
            return result;
        } catch (error) {
            console.log("LoginRepository.login Error", error)
            throw new Error("Authentication failed")
        }
    }
}


