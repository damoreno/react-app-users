import React from "react";

interface LoginProps {
 name: string,
 pass: string,
 description: string
}


const Login = ({name, pass, description=''}: LoginProps) => {
    return (
        <>
        <h2>Name: {name}</h2>
        <h2>pass: {pass}</h2>
        <h2>description: {description}</h2>
        <div>Login page</div>
        </>
  
    )
}

export default Login;
