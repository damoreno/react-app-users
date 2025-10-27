import { RolesListModel } from "../../model/rolesListModel";


const rolesListAdapter = (role) => {

    const rolesListType = new RolesListModel(role._id, role.rol, role.name)
    return Object.assign({}, rolesListType);
};

export default rolesListAdapter;
