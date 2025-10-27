import RegisterRepository from "../../data/repositories/addUserRepository"

export default class RegisterUseCase{
    async call(name, email, password){
        return await RegisterRepository.register(name, email, password)
    }

}