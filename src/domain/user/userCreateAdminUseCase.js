import UserRepository from "../../data/repositories/userRepository"

export default class UserCreateAdminUseCase{
    async call(payload){
        return await UserRepository.createAdmin(payload)
    }

}