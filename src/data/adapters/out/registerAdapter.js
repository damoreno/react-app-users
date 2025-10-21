
const registerAdapter = (name, email, password) => {
 return {name, email, password, img:"", rol: "USER_ROLE", state: true, google: false};
}

export default registerAdapter;