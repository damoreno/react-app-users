import FetchData from "../../common/utils/fetchData";
import { API_ROUTES } from "../../common/utils/router";
export default class DeleteUserRepository{
    static async deleteUser(uid){       
        try {
            return await new FetchData().DELETE(`${API_ROUTES.USERS}`,uid);
        } catch (error) {
            console.log("DeleteUserRepository.deleteUser Error", error)
            throw new Error("Authentication failed")
        }
    }
}
