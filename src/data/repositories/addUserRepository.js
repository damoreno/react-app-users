import FetchData from "../../common/utils/fetchData";
import { API_ROUTES } from "../../common/utils/router";
import userAddAndEditAdapter from "../adapters/out/usersAddAndEditAdapter";
export default class AddUserRepository{
    static async createAdmin(payload){
            const {body, resp} =  await new FetchData().POST(`${API_ROUTES.USERS}/admin`, userAddAndEditAdapter(payload));
            return {body, resp}
    }
}


