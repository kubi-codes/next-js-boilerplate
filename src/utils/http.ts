import axios from "axios";
import Cookies from "js-cookie";
import rateLimit from "axios-rate-limit";

const http = rateLimit(
  axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  }),
  {
    maxRequests: 2,
    perMilliseconds: 1000,
    maxRPS: 2,
  }
);

// Add a request interceptor
http.interceptors.request.use(
  (config) => {
    if (Cookies.get("accessToken"))
      config.headers["Authorization"] = "Bearer " + Cookies.get("accessToken");
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// add a response interceptor
http.interceptors.response.use(
  (response) => {
    // Tangani respons sukses di sini jika diperlukan
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // Tangani error 401 di sini, misalnya, redirect atau tampilkan pesan
      if (typeof window !== "undefined") window.location.replace("/logout");
    }
    return Promise.reject(error);
  }
);

export default http;
