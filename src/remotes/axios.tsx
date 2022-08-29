import axios from "axios";

export const axiosGet = async (url: string) => {
    const data = await axios.get(url)
    return data
}