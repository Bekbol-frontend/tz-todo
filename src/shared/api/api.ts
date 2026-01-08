import axios from "axios";
import { baseURL } from "./baseUrl";

export const API = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
