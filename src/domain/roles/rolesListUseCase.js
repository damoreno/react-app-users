import RolesListRepository from "../../data/repositories/rolesListRepository";

export default class RolesListUseCase{
    async call(){
        return await RolesListRepository.getAll();
    }

}