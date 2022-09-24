import axios from "axios";

const API_URL = "http://127.0.0.1:3002/api/v1/auth/";

const register = async (email, password, confirmPassword) => {
  const response= await axios.post(API_URL + "register", {
    email,
    password,
    confirmPassword
  });
  return response;
};

const login = async (email, password) => {
  const response = await axios.post(API_URL + "login", {
    email,
    password,
  });
  const data = response.data.data;
  if (data.token) {
    localStorage.setItem("user", JSON.stringify(data.user));
  }
  return data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
