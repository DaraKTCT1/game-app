import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T>{
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance =  axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0274223c8b31408384ef4aa2d2bb034e",
  },
});

class APIClient<T>{
  endpoint: string;
  constructor(endpoint: string){
    this.endpoint = endpoint;
  }
  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance.get<FetchResponse<T>>(this.endpoint,config)
      .then(res => res.data)
  }
}

export default APIClient
