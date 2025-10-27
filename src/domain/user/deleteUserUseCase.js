import DeleteUserRepository from "../../data/repositories/deleteUserRepository";

export default class DeleteUserUseCase{
    async call(uuid){
        return await DeleteUserRepository.deleteUser(uuid);
    }

}