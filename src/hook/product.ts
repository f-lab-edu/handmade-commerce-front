import { ProductListType, ProductType } from "../product_list/interface";
import { axiosGet } from "../remotes/axios";

interface Props {
  page: number;
  keyword?: string;
  category: string;
  subCategory: string;
}

export const getProductList = async ({
  page,
  keyword,
  category,
  subCategory,
}: Props): Promise<ProductListType> => {
  const baseQuery = `/product?page=${page}`;
  let productUrl = `${baseQuery}&category=${category}&subCategory=${subCategory}`;
  if (keyword) productUrl = `${baseQuery}&keyword=${keyword}`;
  else productUrl;
  const { data } = await axiosGet(productUrl);
  return data;
};

export const getAllList = async (): Promise<ProductListType> => {
  const url = "/product?all=true";
  const { data } = await axiosGet(url);
  return data;
};

export const getProductItem = async (
  productId: string
): Promise<ProductType> => {
  const { data } = await axiosGet(`/product/${productId}`);
  return data;
};
