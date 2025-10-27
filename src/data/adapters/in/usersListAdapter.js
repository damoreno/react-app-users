import { UserListModel } from "../../model/userListModel";

const usersListAdapter = (user) => {

    const userListType = new UserListModel(user)

    return Object.assign({}, userListType);
};

export default usersListAdapter;
