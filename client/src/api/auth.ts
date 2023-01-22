import axios from "axios";

export const loginRequest = (email: string, password: string) => {
  return axios.post("http://localhost:3000/login", {
    email,
    password,
  });
};
