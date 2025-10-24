import useAuthStore from "../../ui/stores/useAuthStore";
import { logoutUser } from '../utils/logoutUser'
import { API_ROUTES } from "./router";

const URL_BASE = `${import.meta.env.VITE_API_URL_BASE}`;

export default class FetchData{

    async GET(endpoint){
        const URL = `${URL_BASE}${endpoint}`;
        let token = null;
            try{
                token = useAuthStore.getState().token
                if(!token){
                    throw new Error("Token not found")
                }
            }catch(error)
            {
                console.log("UsersListRepository.getUsersList Error", error)
            }

            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("x-token", token)
            const requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };
            

            try {
                const body = await fetch(`${URL}`, requestOptions)
                const resp = await body.json()

                if(resp.status == 401){
                    logoutUser();
                    throw new Error(`Unauthorized: ${body.status}`)
                }

                return {body, resp};
            } catch (error) {
                console.log("Interceptor Fetch.GET Error", error)
                throw new Error("Authentication failed")
            }
    }
}