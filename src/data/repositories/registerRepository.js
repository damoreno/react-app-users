import { API_ROUTES } from "../../common/utils/router";
//import loginAdapter from "../../data/adapters/out/loginAdapter";
export default class RegisterRepository{
    static async register(name, email, password){
        const URL_BASE = `${import.meta.env.VITE_API_URL}${API_ROUTES.REGISTER}`;
        
        try {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                //body: JSON.stringify(loginAdapter(email, password)),
                redirect: 'follow'
            };

            const response = await fetch("/json/login.json", requestOptions)
            
            //const response1 = await fetch(`${URL_BASE}`, requestOptions)

            if(!response.ok){
                throw new Error("Register failed")
            }
            const result = await response.json()

            return result;
        } catch (error) {
            console.log("RegisterRepository.register Error", error)
            throw new Error("Register failed")
        }
    }
}


