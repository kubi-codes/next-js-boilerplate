import axios from "axios";
// import Swal from "sweetalert2";
import rateLimit from "axios-rate-limit";
import { setupCache } from "axios-cache-adapter";

// Create `axios-cache-adapter` instance
const cache = setupCache({
  maxAge: 15 * 60 * 1000,
});

const http = rateLimit(
  axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    adapter: cache.adapter,
  }),
  {
    maxRequests: 2,
    perMilliseconds: 1000,
    maxRPS: 2,
  }
);

export default http;
