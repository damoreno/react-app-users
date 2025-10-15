import LoginRepository from "../../data/repositories/loginRepository"

export default class LoginUseCase{
    async call(email, password){
        return await LoginRepository.login(email, password)
    }

}