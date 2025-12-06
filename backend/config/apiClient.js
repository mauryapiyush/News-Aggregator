import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://newsapi.org/v2",
  timeout: 10000,
});

export default apiClient;
