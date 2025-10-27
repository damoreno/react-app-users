import FetchData from "../../common/utils/fetchData";
import { API_ROUTES } from "../../common/utils/router";
import rolesListAdapter from "../adapters/in/rolesListAdapter";
export default class RolesListRepository{
    static async getAll(){       
        try {
            const {body, resp} =  await new FetchData().GET(`${API_ROUTES.ROLES}`);
            const adapterResponse = {
                totalRoles: resp.totalRoles,
                roles: resp.roles.map(role => rolesListAdapter(role))
            }
            return {body, adapterResponse}
        } catch (error) {
            console.log("RolesListRepository.getAll Error", error)
            throw new Error("Fail to get roles list")
        }
    }
}
