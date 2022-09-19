import { ProductListType } from "../product_list/interface";
import { axiosGet } from "../remotes/axios";

export const getProductList = async (
  page: number = 0
): Promise<ProductListType> => {
  const { data } = await axiosGet(`/product?page=${page}`);
  return data;
};
