import UserRepository from "../../data/repositories/userRepository"

export default class UserEditUseCase{
    async call(payload, id){
        return await UserRepository.editUser(payload, id)
    }

}