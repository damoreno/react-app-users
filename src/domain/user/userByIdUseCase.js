import UserRepository from "../../data/repositories/userRepository";

export default class UserByIdUseCase{
    async call(uuid){
        return await UserRepository.getById(uuid);
    }

}