import FetchData from "../../common/utils/fetchData";
import { API_ROUTES } from "../../common/utils/router";
import usersListAdapter from "../adapters/in/usersListAdapter";
import registerAdapter from "../adapters/out/registerAdapter";
import userAddAndEditAdapter from "../adapters/out/usersAddAndEditAdapter";

export default class UserRepository{
    static async getUsersList(page, limit){       
        try {
            const {body, resp} =  await new FetchData().GET(`${API_ROUTES.USERS}?page=${page}&limit=${limit}`);
            const adapterResponse = {
                totalUsers: resp.totalUsers,
                users: resp.users.map(user => usersListAdapter(user))
            }
            return {body, adapterResponse}
        } catch (error) {
            console.log("UsersListRepository.getUsersList Error", error)
            throw new Error("Authentication failed")
        }
    }

    static async getById(id){       
        try {
            const {body, resp} =  await new FetchData().GET(`${API_ROUTES.USERS}/${id}`);
            const adapterResponse =  usersListAdapter(resp.user)
            return {body, adapterResponse}
        } catch (error) {
            console.log("UsersListRepository.getUsersList Error", error)
            throw new Error("Authentication failed")
        }
    }

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

        static async editUser(payload, id){
                const {body, resp} =  await new FetchData().PUT(`${API_ROUTES.USERS}/${id}`, userAddAndEditAdapter(payload));
                return {body, resp}
        }        

        static async createAdmin(payload){
                const {body, resp} =  await new FetchData().POST(`${API_ROUTES.USERS}/admin`, userAddAndEditAdapter(payload));
                return {body, resp}
        }

        static async deleteUser(uid){       
            try {
                return await new FetchData().DELETE(`${API_ROUTES.USERS}`,uid);
            } catch (error) {
                console.log("DeleteUserRepository.deleteUser Error", error)
                throw new Error("Authentication failed")
            }
        }        
    
}

