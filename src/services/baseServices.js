import axios from "axios";

const baseService = axios.create({
  baseURL: `${import.meta.env.VITE_APP_PATH}`,
});

// 可以添加請求攔截器
baseService.interceptors.request.use(
  (config) => {
    // 可以在這裡添加請求頭或其他配置
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 可以添加響應攔截器
baseService.interceptors.response.use(
  (response) => {
    // 可以在這裡進行數據處理
    return response;
  },
  (error) => {
    console.error("API 錯誤:", error);
    return Promise.reject(error);
  }
);

export { baseService };
