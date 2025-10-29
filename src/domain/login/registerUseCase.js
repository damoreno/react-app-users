import UserRepository from "../../data/repositories/userRepository"

export default class RegisterUseCase{
    async call(name, email, password){
        return await UserRepository.register(name, email, password)
    }

}