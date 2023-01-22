import React from "react";
import { loginRequest, profileRequest } from "../api/auth";
import { useAuthStore } from "../store/auth";

const Login = () => {
  const { setToken } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;

    const resLogin = await loginRequest(email, password);
    setToken(resLogin.data.token);
    const resProfile = await profileRequest();
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
