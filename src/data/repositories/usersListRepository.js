import FetchData from "../../common/utils/fetchData";
import { API_ROUTES } from "../../common/utils/router";
import usersListAdapter from "../adapters/in/usersListAdapter";
export default class UsersListRepository{
    static async getUsersList(page, limit){       
        try {
            const {body, resp} =  await new FetchData().GET(`${API_ROUTES.USER_LIST}?page=${page}&limit=${limit}`);
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
}
