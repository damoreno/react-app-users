import { UserAddAndEditModel } from "../../model/userAddAndEditModel";

const userAddAndEditAdapter = (user) => { 
    return new UserAddAndEditModel(
        user.name, 
        user.email, 
        user.password, 
        user.img, 
        user.rol, 
        user.state, 
        user.google)
    }

export default userAddAndEditAdapter;