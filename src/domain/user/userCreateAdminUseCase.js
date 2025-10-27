import AddUserRepository from "../../data/repositories/addUserRepository"

export default class UserCreateAdminUseCase{
    async call(payload){
        return await AddUserRepository.createAdmin(payload)
    }

}