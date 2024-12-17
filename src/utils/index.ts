import axios from "axios";
import toast from "react-hot-toast";

import DarkTheme from "./dark-mode";

const apiInstance = axios.create({
  baseURL: "https://tourice-backend-ts.onrender.com/api/v1",
});

export const validateEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const validations = (email: string, password: string, username?: string) => {
  if (!username || !email || !password) {
    toast.error("Empty Fields !!");
    return;
  }

  if (!validateEmail(email)) {
    toast.error("Invalid Email !!!");
    return;
  }

  if (password.length <= 7) {
    toast.error("Your password must be atleast 8 characters long !");
    return;
  }

  return true;
};

export { apiInstance, DarkTheme, validations };
