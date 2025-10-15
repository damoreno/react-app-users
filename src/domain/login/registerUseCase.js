import RegisterRepository from "../../data/repositories/registerRepository"

export default class RegisterUseCase{
    async call(name, email, password){
        return await RegisterRepository.register(name, email, password)
    }

}