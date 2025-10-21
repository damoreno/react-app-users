import { LoginModel } from "../../model/loginModel";


const loginAdapter = (email, password) => {
 return {email, password};
}

export default loginAdapter;