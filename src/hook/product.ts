import { ProductListType } from "../product_list/interface";
import { axiosGet } from "../remotes/axios";

export const getProductList = async(): Promise<ProductListType[]> => {
    const { data } = await axiosGet('/product')
    return data
}