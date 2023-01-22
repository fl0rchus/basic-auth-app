import React from "react";
import { loginRequest } from "../api/auth";

const Login = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;

    const resLogin = await loginRequest(email, password);
    console.log(resLogin);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="email@email.com" />
        <input type="password" placeholder="***" />
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default Login;
