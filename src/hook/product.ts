import { ProductListType, ProductType } from "../product_list/interface";
import { axiosGet } from "../remotes/axios";

export const getProductList = async (
  page: number = 0,
  keyword: string = "",
  all: boolean = false
): Promise<ProductListType> => {
  let productUrl = `/product?page=${page}`;
  if (keyword) productUrl = `${productUrl}&keyword=${keyword}&all=${all}`;
  else productUrl;
  const { data } = await axiosGet(productUrl);
  return data;
};

export const getProductItem = async (
  productId: string
): Promise<ProductType> => {
  const { data } = await axiosGet(`/product/${productId}`);
  return data;
};
