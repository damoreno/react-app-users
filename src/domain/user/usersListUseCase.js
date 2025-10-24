import UsersListRepository from "../../data/repositories/usersListRepository";

export default class UsersListUseCase{
    async call(page, limit){
        return await UsersListRepository.getUsersList(page, limit);
    }

}