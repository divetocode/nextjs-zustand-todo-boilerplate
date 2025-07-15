// libs/axios.ts

import axios from "axios";
import { URL_BASE_JSONPLACEHOLDER } from "@/constants";

const api = axios.create({
  baseURL: URL_BASE_JSONPLACEHOLDER,
  headers: {
    "Content-Type": "application/json",
  },
});

// GET 요청
export const getRequest = async <T = any>(url: string): Promise<T> => {
  const response = await api.get<T>(url);
  return response.data;
};

// POST 요청
export const postRequest = async <T = any>(url: string, data: any): Promise<T> => {
  const response = await api.post<T>(url, data);
  return response.data;
};

export default api;
