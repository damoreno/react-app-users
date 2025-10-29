import UserRepository from "../../data/repositories/userRepository";

export default class UsersListUseCase{
    async call(page, limit){
        return await UserRepository.getUsersList(page, limit);
    }

}