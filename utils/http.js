import axios from "axios";
import rateLimit from "axios-rate-limit";
import Swal from "sweetalert2";

const http = rateLimit(
  axios.create({ baseURL: process.env.NEXT_PUBLIC_BASE_URL }),
  {
    maxRequests: 2,
    perMilliseconds: 1000,
    maxRPS: 2,
  }
);

const token = localStorage.getItem("token") || null; // your auth token

if (token) {
  http.defaults.headers.common.Authorization = `Bearer ${token}`;
}

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response !== undefined) {
      const errMsg = error?.response?.data?.messages;

      Swal.fire({
        title: "",
        html: errMsg ?? "Something wrong with our system...",
        icon: "error",
        timer: 2000,
        showCancelButton: false,
        showConfirmButton: false,
      });
    }
    return Promise.reject(error);
  }
);

export default http;
