import { UserListModel } from "../../model/userListModel";

const usersListAdapter = (user) => {

    const userListType = new UserListModel(user.uuid, user.name, user.email, user.img, user.rol, user.permissions, user.state, user.google)

    return Object.assign({}, userListType);
};

export default usersListAdapter;
