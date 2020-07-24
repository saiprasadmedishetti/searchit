import axios from "axios";

const ACCESS_KEY = "gd79Ir7RAPAVV7rABD4R7VEMHbuBa1CMcA9TpARPV6c";
export const api = axios.create({
  baseURL: "https://api.unsplash.com",
  timeout: 10000,
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`,
    "Accept-Version": "v1",
  },
});

export default api;
