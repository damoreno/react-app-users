import { LoginModel } from "../../model/loginModel";


const loginAdapter = (json) => {
 return new LoginModel(json.email, json.password);
}

export default loginAdapter;