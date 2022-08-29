import axios, { AxiosResponse } from "axios";
import { axiosGet } from "../remotes/axios";

interface ttype {
    name: string
}

export const getProductList = async(): Promise<ttype[]> => {
    // const data = await axiosGet('http://localhost:3001/product')
    const data = await axios.get('http://localhost:3001/product')
    return data.data
}