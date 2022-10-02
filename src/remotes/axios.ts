import axios from "axios";

// axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;
axios.defaults.baseURL = "http://localhost:3001";
export const axiosGet = async (url: string) => {
  const data = await axios.get(url);
  return data;
};
