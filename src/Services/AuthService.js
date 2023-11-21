import axios from "axios";

const API_URL = "http://localhost:5136";
const login = async (username, senha) => {
  const response = await axios.post(API_URL + "/api/Home/login", {
    username,
    senha,
  });
  console.log("response: " + JSON.stringify(response.data.token));
  if (response.data.token) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};
const logout = () => {
  localStorage.removeItem("user");
};
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
const AuthService = {
  API_URL,
  login,
  logout,
  getCurrentUser,
};
export default AuthService;
