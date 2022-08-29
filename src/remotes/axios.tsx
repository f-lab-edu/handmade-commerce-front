import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const axiosGet = async (url: string) => {
    const data = await axios.get(url)
    return data
}