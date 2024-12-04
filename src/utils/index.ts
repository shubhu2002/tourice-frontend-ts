import axios from "axios";
import ScrollToTop from "./scroll-to-top";
import DarkTheme from "./dark-mode";

const apiInstance = axios.create({
  baseURL: "https://tourice-backend-ts.onrender.com/api/v1",
});

export { ScrollToTop, apiInstance, DarkTheme };
