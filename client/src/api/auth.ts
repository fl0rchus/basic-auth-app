import axios from "axios";

export const loginRequest = async (email: string, password: string) => {
  return axios.post("http://localhost:3000/login", {
    email,
    password,
  });
};

export const profileRequest = async () => {
  return axios.get("http://localhost:3000/profile");
};
